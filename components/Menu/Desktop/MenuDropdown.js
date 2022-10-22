//React Imports
import { useContext } from "react";
//Context Imports
import { ThemeContext } from "../../../pages/_app";

const MenuDropdown = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <DropDown width={props.width} theme={theme}>
        {props.children}
      </DropDown>
      <style jsx>
        {`
          main {
            position: absolute;
            z-index: 20;
            transform: translateX(${props.left}px) translateY(${props.down}px);
            cursor: initial;
          }
        `}
      </style>
    </main>
  );
};

const DropDown = (props) => {
  return (
    <main>
      {props.children}
      <style jsx>
        {`
          main {
            width: 14.8rem;
            background-color: ${props.theme.MainColor};
            border-radius: ${props.theme.BorderRadius};
            box-shadow: 0.1rem 0.2rem 0.6rem rgba(0, 0, 0, 0.735);
            backdrop-filter: blur(10px);
            overflow: hidden;
          }
        `}
      </style>
    </main>
  );
};

export default MenuDropdown;
