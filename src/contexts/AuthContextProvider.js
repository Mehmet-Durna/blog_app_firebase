import React, {useContext, createContext} from "react";
import {auth, googleProvider} from "../utils/firebaseUtil";

const AuthContext = createContext();


//! Define a function to get data from Auth context
export function useAuth() {
    return useContext(AuthContext);
}


function AuthContextProvider(props) {

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        auth.signOut();
    }

    function loginWithGoogle() {
        googleProvider.setCustomParameters({prompt: "select_account"});
        auth.signInWithPopup(googleProvider);
    }


    return <div>

    </div>;
}

export default AuthContextProvider;