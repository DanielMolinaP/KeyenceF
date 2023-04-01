// Importa las action types acá
import {
  GET_ALL_DATA,
  GET_ALL_FILE_NAME,
  DELETE_FILE_NAME,
  EDIT_DATA,
  POST_FILE
} from "../Acctions/index";

const initialState = {
  allData: [],
  fileName: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return {
        ...state,
        allData: action.payload
      };
    case GET_ALL_FILE_NAME:
      let parseFileName = action.payload.map((f) => {
        return {
          id: f.id,
          fileName: f.fileName,
        }
      })
      return {
        ...state,
        fileName: parseFileName
      };
    case DELETE_FILE_NAME:
      return {
        ...state,
      };
    case EDIT_DATA:
      return {
        ...state,
      };
    case POST_FILE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default rootReducer;
