import { createContext } from "react";

const UserContext=createContext({
    loggedInUser:"Default user",
    date:"12-2-2023",
});

export default UserContext;

//i have imported this context to header and body it check there(for revision)