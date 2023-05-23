import React, { useState, useContext, createContext, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: '',
    })
    useEffect(() => {
        const data = localStorage.getItem('auth1');
        let parseData = JSON.parse(data);
        setAuth({
            ...auth,
            user: parseData
        })
    }, [])
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }
