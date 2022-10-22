//React Imports
import { useReducer, createContext } from 'react';
//Custom Imports
import Notification from './Notification';
//Library Imports
import { AnimatePresence } from 'framer-motion';

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const NotificationContext = createContext(null);

const NotificationProvider = (props) => {
    const [state, dispatch] = useReducer((state, action) => {
        if (state) {
            state = [];
        }
        switch (action.type) {
            case REMOVE_NOTIFICATION:
                return state.filter((el) => el.id !== action.id);

            case ADD_NOTIFICATION:
                return [...state, { ...action.payload }];

            default:
                return state;
        }
    }, []);

    return (
        <NotificationContext.Provider value={dispatch}>
            <div className="wrapper">
                <AnimatePresence>
                    {state.map((note) => {
                        return (
                            <Notification
                                dispatch={dispatch}
                                key={note.id}
                                {...note}
                            />
                        );
                    })}
                </AnimatePresence>
                <style jsx>
                    {`
                        .wrapper {
                            top: 10rem;
                            right: 1.5rem;
                            position: fixed;
                            z-index: 100000;
                            gap: 2rem;
                            z-index: 1000000;
                        }
                    `}
                </style>
            </div>
            {props.children}
        </NotificationContext.Provider>
    );
};

export default NotificationProvider;
