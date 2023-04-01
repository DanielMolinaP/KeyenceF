import axios from "axios";

export const GET_ALL_DATA = "GET_ALL_DATA";
export const GET_ALL_FILE_NAME = "GET_ALL_FILE_NAME";
export const DELETE_FILE_NAME = "DELETE_FILE_NAME";
export const EDIT_DATA = "EDIT_DATA";
export const POST_FILE = "POST_FILE";



export const getAllData = (fileName) => {
  return async function (dispatch) {
    const response = await axios
      .get(`/tables/?name=${fileName}`)
      .then((res) => res.data);
    // console.log(response)
    dispatch({
      type: GET_ALL_DATA,
      payload: response,
    });
  };
};

export const getAllFileName = () => {
  return async function (dispatch) {
    const response = await axios
      .get("/fileName/")
      .then((res) => res.data);
    // console.log(response)

    dispatch({
      type: GET_ALL_FILE_NAME,
      payload: response,
    });
  };
};

export function deleteNameFile(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        "/deleteFileName",
        { data: payload }
      );
      return dispatch({
        type: DELETE_FILE_NAME,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export function editData(payload) {
  return async function (dispatch) {
    const put = await axios.put(
      "/updateData",
      payload
    );
    return dispatch({
      type: EDIT_DATA,
      payload: put,
    });
  };
}

export function postFile(file) {
  return async function (dispatch) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post(
        "/data",
        formData
      );
      //lert('Archivo enviado correctamente');
      return dispatch({
        type: POST_FILE,
        payload: response,
      });
    } catch (error) {
      //alert('Error al enviar el archivo');
      console.log(error);
    }
  };
}