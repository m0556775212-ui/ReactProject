import React, { createContext, useReducer, useContext, useEffect, useCallback } from "react";
import type { TicketProps } from "../Types";
import { AuthContext } from "./authContext";
import Swal from 'sweetalert2';

interface TicketState {
    tickets: TicketProps[];
    loading: boolean;
}

type TicketAction = 
    | { type: 'SET_TICKETS'; payload: TicketProps[] }
    | { type: 'SET_LOADING'; payload: boolean };

const ticketReducer = (state: TicketState, action: TicketAction): TicketState => {
    switch (action.type) {
        case 'SET_TICKETS':
            return { ...state, tickets: action.payload, loading: false };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};

const initialState: TicketState = {
    tickets: [],
    loading: false,
};

export const TicketContext = createContext<{
    state: TicketState;
    dispatch: React.Dispatch<TicketAction>;
    fetchTickets: () => Promise<void>;
}>({
    state: initialState,
    dispatch: () => null,
    fetchTickets: async () => {},
});

export const TicketProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(ticketReducer, initialState);
    const { state: authState } = useContext(AuthContext);

    const fetchTickets = useCallback(async () => {
        if (!authState.token) return;
        
        dispatch({ type: 'SET_LOADING', payload: true });
        try {
            const response = await fetch("http://localhost:4000/tickets", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authState.token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                dispatch({ type: 'SET_TICKETS', payload: data });
            } else {
                if (response.status === 403) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Access Denied',
                        text: 'You do not have permission to view tickets.',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Failed to fetch tickets',
                    });
                }
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error fetching tickets',
            });
        } finally {
            dispatch({ type: 'SET_LOADING', payload: false });
        }
    }, [authState.token]);

    // Clear tickets when user logs out
    useEffect(() => {
        if (!authState.token) {
             dispatch({ type: 'SET_TICKETS', payload: [] });
        }
    }, [authState.token]);

    return (
        <TicketContext.Provider value={{ state, dispatch, fetchTickets }}>
            {children}
        </TicketContext.Provider>
    );
};
