import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import Web from "../../config";

const GithubContext = createContext();

const GithubUrl = Web.url;
const GithubToken = Web.token;

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        loading: false
    };

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const searchUser = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q: text
        })
        
        console.log(`${GithubUrl}/search/users?${params}`);
        const response = await fetch(`${GithubUrl}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GithubToken}`,
            }
        })

       const {items} = await response.json();

       dispatch({
           type:'GET_USERS',
           payload: items
       })
    }

    const clearUsers = () => {
        dispatch({
            type:'CLEAR'
        })
    }
    const setLoading = () => dispatch({type: 'SET_LOADING'})
    return (
        <GithubContext.Provider value={{users: state.users, loading:state.loading, searchUser, clearUsers}}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;