import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import Web from "../../config";

const GithubContext = createContext();

const GithubUrl = Web.url;
const GithubToken = Web.token;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });

    console.log(`${GithubUrl}/search/users?${params}`);
    const response = await fetch(`${GithubUrl}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GithubToken}`,
      },
    });

    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GithubUrl}/users/${login}`, {
      headers: {
        Authorization: `token ${GithubToken}`,
      },
    });

    if (response.staus === 400) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR",
    });
  };
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        getUser,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
