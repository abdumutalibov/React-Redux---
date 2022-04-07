import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENT_LOAD,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
} from "./types";

export const incrementLikes = () => {
  return {
    type: INCREMENT,
  };
};
export const decrementLikes = () => {
  return {
    type: DECREMENT,
  };
};

export const inputText = (text) => {
  return {
    type: INPUT_TEXT,
    text,
  };
};

export const commentCreate = (text, id) => {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
};

export const commentUpdate = (text, id) => {
  return {
    type: COMMENT_UPDATE,
    data: { text, id },
  };
};

export const commentDelete = (id) => {
    return {
      type: COMMENT_DELETE,
      id,
    };
  };
  export const loaderOn = () => {
    return {
      type: LOADER_DISPLAY_ON,
    };
  };
  export const loaderOff = () => {
    return {
      type: LOADER_DISPLAY_OFF,
    };
  };

  export const errorOn = (text) => {
    return dispatch=>{
      dispatch({
        type: ERROR_DISPLAY_ON,
        text
      })
      setTimeout(()=>{
        dispatch(errorOff());
      },2000)
    };
  };
  export const errorOff = () => {
    return {
      type: ERROR_DISPLAY_OFF,
    };
  };
export const commentLoad = () => {
  return async (dispatch) => {
try{
  dispatch(loaderOn());
  const response = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=11");
  const jsonData = await response.json();
  setTimeout(()=>{
dispatch({
    type: COMMENT_LOAD,
    data: jsonData,
  });
  dispatch(loaderOff())
  },2000)
}catch(err){
  dispatch(errorOn('Errorjon API'))
  dispatch(loaderOff())

}
   
  };
};
