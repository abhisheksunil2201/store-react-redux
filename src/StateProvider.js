//Set up data layer
//Need this to track the basket
import React, { createContext, useContext, useReducer } from 'react';

//This is the data layer
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//this is how it's used inside of a component
export const useStateValue = () => useContext(StateContext);
