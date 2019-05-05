import surveys from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_SURVEY,
  FETCH_SURVEYS,
  FETCH_SURVEY,
  DELETE_SURVEY,
  EDIT_SURVEY
} from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createSurvey = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await surveys.post("/surveys", { ...formValues, userId });

  dispatch({ type: CREATE_SURVEY, payload: response.data });
  history.push("/");
};

export const fetchSurveys = () => async dispatch => {
  const response = await surveys.get("/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: response.data });
};

export const fetchSurvey = id => async dispatch => {
  const response = await surveys.get(`/surveys/${id}`);

  dispatch({ type: FETCH_SURVEY, payload: response.data });
};

export const editSurvey = (id, formValues) => async dispatch => {
  const response = await surveys.patch(`/surveys/${id}`, formValues);

  dispatch({ type: EDIT_SURVEY, payload: response.data });
  history.push("/");
};

export const deleteSurvey = id => async dispatch => {
  await surveys.delete(`/surveys/${id}`);

  dispatch({ type: DELETE_SURVEY, payload: id });
  history.push("/");
};
