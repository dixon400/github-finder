import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import Web from "../../config";

const GithubContext = createContext();

const GithubUrl = Web.url;
const GithubToken = Web.token;

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        loading: true
    };

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const fetchUsers = async () => {
        setLoading()
        const response = await fetch(`${GithubUrl}/users`, {
            headers: {
                Authorization: `token ${GithubToken}`
            }
        })

       const data = await response.json()
       dispatch({
           type:'GET_USERS',
           payload: data
       })
    }

    const setLoading = () => dispatch({type: 'SET_LOADING'})
    return (
        <GithubContext.Provider value={{users: state.users, loading:state.loading, fetchUsers}}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;