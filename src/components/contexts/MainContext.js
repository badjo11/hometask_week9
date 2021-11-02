import axios from 'axios';
import React, { useReducer } from 'react';

export const mainContext = React.createContext()

const INIT_STATE = {
    contacts: [],
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_CONTACTS":
            return { ...state, contacts: action.payload }
        default:
            return state
    }
}

const MainContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getContacts = async () => {
        const response = await axios('http://localhost:8000/contacts')
        let action = {
            type: "GET_CONTACTS",
            payload: response.data
        }
        dispatch(action)
    }


    return (
        <mainContext.Provider value={{
            getContacts: getContacts,
            contacts: state.contacts
        }}>
            {props.children}
        </mainContext.Provider>
    );
};

export default MainContextProvider;