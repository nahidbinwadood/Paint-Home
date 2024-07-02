import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext(null);

const Firebase_AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Observer:
  useEffect(() => {
    const unSubscribe= onAuthStateChanged(auth, (user) => {
       if (user) {
         setUser(user);
       }
       setLoading(false)
     });
     return ()=>unSubscribe();
   }, []);

  //Providers:
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  //Register:
  const registerAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login:
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  //Update Account :

  const updateUserProfile = (name,email,image) => {
    updateProfile(auth.currentUser, {
       displayName: name,
       email:email,
       photoURL: image
     }).then(()=>{
       setUser({ ...user, displayName: name, email: email, photoURL: image });
       
     })
    return; 
}

  //Logout:
  const logOut = () => {
    setUser(null);
    signOut(auth).then(()=>{

    })
  };

  //Google:
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //Github:
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //Facebook:
  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  const allValues = {
    registerAccount,
    logIn,
    googleLogIn,
    user,
    loading,
    githubLogin,
    facebookLogin,
    logOut,updateUserProfile
  };

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};
Firebase_AuthProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export default Firebase_AuthProvider;
