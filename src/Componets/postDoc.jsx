import React, { useState } from "react";
import { postFile } from "../Redux/Acctions/index.js";
import { useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  input: {
    display: 'none',
  },
  button: {
    marginLeft: 35,
    backgroundColor: 'white',
    color: 'red',
    '&:hover': {
      backgroundColor: 'red',
      color: 'white',
    },
  },
}));

const PostDoc = () => {

  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('Seleccionar archivo');
  const classes = useStyles();

  const handleFileChange = (event) => {
    setFileName(event.target.files[0].name);
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    if (file===null) {
      alert("add a file before send")
    } else {
      dispatch(postFile(file));
      setFileName('Seleccionar archivo');
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <input
        accept=".xlsx"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="default"
          component="span"
          startIcon={<CloudUploadIcon />}
        >
          {fileName}
        </Button>
      </label>
      <Button className={classes.button} type="submit" variant="contained">Enviar archivo</Button>
    </form>
  );
}

export default PostDoc;
