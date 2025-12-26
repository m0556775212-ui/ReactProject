import React, { createContext, useEffect, useReducer } from "react";
import type { UserProps } from "../Types";
import { authMe } from "../services/authMe";
import { CircularProgress, Box } from "@mui/material";

interface AuthState {
  token: string | null;
  user: UserProps | null;
  loading: boolean;
}

const authReducer = (state: AuthState, action: any): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                loading: false,
            };
        case 'LOGOUT':
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                user: null,
                loading: false,
            };    
        default:
            return state;
    }
}

const initialState: AuthState = {
    token: localStorage.getItem("token") || null,
    user: null,
    loading: true,
};

export const AuthContext = createContext<{state: AuthState; dispatch: React.Dispatch<any>} >({
    state: initialState,
    dispatch: () => null,
});


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
        useEffect(() => {
        const initAuth = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const user = await authMe(token);
                    if (user) {
                        dispatch({
                            type: 'LOGIN',
                            payload: { token, user }
                        });
                    } else {
                        dispatch({ type: 'LOGOUT' });
                    }
                } catch (error) {
                    dispatch({ type: 'LOGOUT' });
                }
            } else {
                dispatch({ type: 'LOGOUT' });
            }
        };

        initAuth();
    }, []);

    if (state.loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};