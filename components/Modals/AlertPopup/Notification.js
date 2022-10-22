//React Imports
import { useState, useEffect, useContext } from 'react';
//Library Imports
import { motion } from 'framer-motion';
//Custom Imports
import { REMOVE_NOTIFICATION } from './NotificationProvider';
//Context Imports
import { ThemeContext } from '../../../pages/_app';

const Notification = (props) => {
    const [width, setWidth] = useState(0);
    const [intervalID, setIntervalID] = useState(null);

    const { theme } = useContext(ThemeContext);

    const startTimerHandler = () => {
        const id = setInterval(() => {
            setWidth((prev) => {
                if (prev < 100) {
                    return prev + 1;
                }
                clearInterval(intervalID);
                return prev;
            });
        }, 20);

        setIntervalID(id);
    };

    const pauseTimerHandler = () => {
        clearInterval(intervalID);
    };

    const closeNotificationHandler = () => {
        pauseTimerHandler();
        props.dispatch({
            type: REMOVE_NOTIFICATION,
            id: props.id,
        });
    };

    useEffect(() => {
        if (width >= 100) {
            closeNotificationHandler();
        }
    }, [width]);

    useEffect(() => {
        startTimerHandler();
    }, []);

    const animation = {
        initial: {
            opacity: 0,
            x: 200,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                opacity: {
                    durration: 0.2,
                },
                x: {
                    durration: 0.2,
                },
            },
        },
        exit: {
            opacity: 0,
        },
    };

    return (
        <motion.div
            variants={animation}
            initial="initial"
            animate="visible"
            exit="exit"
            onMouseEnter={pauseTimerHandler}
            onMouseLeave={startTimerHandler}
        >
            <div className="wrapper">
                <div className="alert">
                    {props.icon}
                    <div className="info">
                        <p>{props.message}</p>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .wrapper {
                        position: absolute;
                        transform: translateX(-100%);
                        min-width: 10rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .alert {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 1rem;
                        width: auto;
                        max-width: 60rem;
                        padding: 1rem;
                        background-color: ${theme.MainColor};
                        border-radius: ${theme.BorderRadius};
                        border: 0.2rem solid ${theme.TextColor};
                        color: ${theme.TextColor};
                        fill: ${theme.ActionColor};
                        overflow: hidden;
                    }

                    .info p {
                        font-size: 1.5rem;
                        white-space: nowrap;
                        font-weight: 600;
                    }
                `}
            </style>
        </motion.div>
    );
};

export default Notification;
