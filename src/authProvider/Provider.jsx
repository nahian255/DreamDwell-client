import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const Provider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    // CreatUser .....
    const singUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const authInfo = { singUp };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;
