import React, { useState } from "react";
import { getAllData } from "../../Redux/Acctions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Cards";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    padding: "1rem",
    borderRadius: "5px",
    marginBottom: "1rem",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    width: "100%",
  },
  button: {
    color: "red",
    "&:hover": {
      backgroundColor: "red",
      color: "white",
    },
    marginTop: "1rem",
  },
  detailButton: {
    color: "white",
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "#960000",
    },
    marginTop: "1rem",
  },
}));

const BoxComponent = ({ fileName, id, onClose }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const data = useSelector((state) => state.allData);

  const getDataB = (fileName) => {
    setOpen(!open);
    dispatch(getAllData(fileName));
  };

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box display="flex" alignItems="center" justifyContent="space-between" >
        <Button onClick={() => onClose(id)}>
          <DeleteIcon />
        </Button>
        <Box flexGrow={1} textAlign="center" fontSize="1.2rem">
          {fileName}
        </Box>
        <Button className={classes.detailButton} onClick={() => getDataB(fileName)}>
          <AddIcon /> Detalle
        </Button>
      </Box>
      {open &&
        data.map((c, index) => (
          <Card
            key={index}
            id={c.id}
            UserID={c.UserID}
            userName={c.userName}
            date={c.date}
            punchIn={c.punchIn}
            punchOut={c.punchOut}
            open={open}
          />
        ))}
    </Box>
  );
};

export default BoxComponent;
