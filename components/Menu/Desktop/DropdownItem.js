//React Imports
import Link from "next/link";
import { useContext } from "react";
//Context Imports
import { ThemeContext } from "../../../pages/_app";

const DropdownItem = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {props.category ? (
        <div onClick={(e) => e.stopPropagation()} className="category">
          {props.name}
        </div>
      ) : props.link ? (
        <Link href={props.link}>
          <main>
            {props.item}
            {props.name}
          </main>
        </Link>
      ) : (
        <main onClick={props.function}>
          {props.item}
          {props.name}
        </main>
      )}

      <style jsx>
        {`
          main {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 1rem;
            width: 100%;
            font-size: ${theme.FontSize};
            color: ${theme.TextColor};
            transition: 0.2s;
            gap: 1rem;
            cursor: pointer;
          }

          .category {
            padding: 0.4rem 1rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: ${theme.FontSize};
            color: ${theme.TextColor};
          }

          main:hover {
            background-color: ${theme.HoverColor};
            color: ${theme.TextColor2};
          }
        `}
      </style>
    </>
  );
};

export default DropdownItem;
