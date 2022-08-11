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
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);
 
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
