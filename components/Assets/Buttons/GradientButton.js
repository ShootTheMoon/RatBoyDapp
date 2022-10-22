//React Imports
import Link from "next/link";
import { useContext } from "react";
//Context Imports
import { ThemeContext } from "../../../pages/_app";

const GradientButton = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {props.link ? (
        <Link href={props.link}>
          <button onClick={() => props.function} onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave} style={{ height: props.buttonHeight, width: props.buttonWidth }}>
            {props.children}
          </button>
        </Link>
      ) : (
        <button onClick={props.function} onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave} style={{ height: props.buttonHeight, width: props.buttonWidth }}>
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
          color: ${theme.MainColor};
          background: -moz-linear-gradient(90deg, ${theme.ActionColor} 0%, rgba(71, 255, 160, 1) 100%);
          background: -webkit-linear-gradient(90deg, ${theme.ActionColor} 0%, rgba(71, 255, 160, 1) 100%);
          background: linear-gradient(90deg, ${theme.ActionColor} 0%, rgba(71, 255, 160, 1) 100%);
          font-weight: 600;
          font-size: ${theme.FontSize};
          cursor: pointer;
          transition: 0.4s;
        }

        button:hover {
          box-shadow: 0rem 0rem 2rem 0rem hsla(116, 75%, 67%, 0.3);
        }
      `}</style>
    </>
  );
};

export default GradientButton;
