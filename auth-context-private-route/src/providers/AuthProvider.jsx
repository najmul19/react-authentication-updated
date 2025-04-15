import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const authInf= {
        name: 'bal kal cal sal mal...',
    }

    return (
        <AuthContext.Provider value={authInf}>
            {/* mai part who will have access to this context */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * 1. create context with null as default
 * 2. create provider
 * 3. set a value something (authinf)
 * 4. use the auth provider in the main.jsx
 * 5. access the childrenn inside the auth provider inside authProvider in the main.jsx
 * 6. export AuthCOntext
 */