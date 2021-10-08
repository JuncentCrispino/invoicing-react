import React from 'react';

//create a Context Objec
const UserContext = React.createContext();

//UserProvider is a component the useContext hook can "consume" to subscribe to context changes
export const UserProvider = UserContext.Provider;

export default UserContext;