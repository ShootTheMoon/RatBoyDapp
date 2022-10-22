//React Imports
import Link from "next/link";
import { useContext } from "react";
//Context Imports
import { ThemeContext } from "../../../pages/_app";

const PlainButton = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {props.link ? (
        <Link href={props.link}>
          <button
            onClick={props.function}
            onMouseEnter={props.mouseEnter}
            onMouseLeave={props.mouseLeave}
            style={{ height: props.buttonHeight, width: props.buttonWidth }}
          >
            {props.children}
          </button>
        </Link>
      ) : (
        <button
          onClick={props.function}
          onMouseEnter={props.mouseEnter}
          onMouseLeave={props.mouseLeave}
          style={{ height: props.buttonHeight, width: props.buttonWidth }}
        >
          {props.children}
        </button>
      )}

      <style jsx>{`
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.4rem 0.8rem;
          border-radius: ${theme.BorderRadius};
          border: none;
          font-weight: ${theme.FontWeight};
          font-size: ${theme.FontSize};
          cursor: pointer;
          border: 0.2rem solid ${theme.TextColor};
          background-color: #ffffff00;
          color: ${theme.TextColor};
          transition: 0.4s;
        }

        button:hover {
          background-color: ${theme.TextColor};
          color: ${theme.MainColor};
        }
      `}</style>
    </>
  );
};

export default PlainButton;
