import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFileName, deleteNameFile } from "../../Redux/Acctions/index.js";
import Box from "./Box.jsx"
import PostDoc from "../postDoc.jsx";
import Navbar from "./Nabvar.jsx"
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
		display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
  },
  input: {
    display: 'none',
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    margin: "30px 0",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    marginBottom: "30px",
  },
  boxContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 20px",
  },
  noDataContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "50px",
  },
  noDataTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FF4444",
    textAlign: "center",
    margin: "0 0 20px",
  },
  noDataSubtitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    margin: "0 0 50px",
  },
}));

const Home = () => {
  const dispatch = useDispatch();
  const filesName = useSelector((state) => state.fileName)
  const classes = useStyles();

  useEffect(() => {
    dispatch(getAllFileName())
  }, [dispatch]);

  const onClose = (id) => {
    dispatch(deleteNameFile({ fileId: id }))
    dispatch(getAllFileName())
  }

  return (
    <div className={classes.root}>
      <Navbar />
      <PostDoc />
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <h1 className={classes.title}>My Files</h1>
        </Grid>
        {filesName.length > 0 ? (
          <div className={classes.boxContainer}>
            {filesName.map((c, index) => (
              <Box
                key={index}
                fileName={c.fileName}
                filesName={filesName}
                onClose={() => onClose(c.id)}
              />
            ))}
          </div>
        ) : (
          <div className={classes.noDataContainer}>
            <h1 className={classes.noDataTitle}>No data yet...</h1>
            <h2 className={classes.noDataSubtitle}>Please upload a file to get started</h2>
          </div>
        )}
      </Grid>
    </div>
  )
};

export default Home;
