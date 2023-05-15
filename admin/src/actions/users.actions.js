import axios from "../helpers/axios";
export const GET_USERS = "GET_USERS";
export const getUsers = () => {
  return (dispatch) => {
    return axios
      .get(`/admin/users`)
      .then((res) => {
        dispatch({ type: GET_USERS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
