// src/redux/actions.js
import api from "../utils/Axios";
import { FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_FAILURE } from "./actionTypes";

export const fetchProjects = () => {
   return async (dispatch) => {
      dispatch({ type: FETCH_PROJECTS_REQUEST });
      try {
         const response = await api.get("/projects");
         dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: response.data });
      } catch (error) {
         dispatch({ type: FETCH_PROJECTS_FAILURE, payload: error.message });
      }
   };
};
