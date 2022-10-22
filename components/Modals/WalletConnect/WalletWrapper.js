// React Imports
import React, { useContext } from "react";
import Image from "next/image";
// Context Imports
import { ThemeContext } from "../../../pages/_app";

const WalletWrapper = (props) => {
  const { theme, dark } = useContext(ThemeContext);
  return (
    <main onClick={props.function}>
      <div className="walletLogo">
        <Image height={props.height} width={props.width} src={props.img} />
      </div>
      <h3>{props.name}</h3>
      <style jsx>
        {`
          main {
            width: 13rem;
            height: 12rem;
            display: flex;
            gap: 2rem;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: ${theme.MainColor2};
            border-radius: ${theme.BorderRadius};
            cursor: pointer;
            transition: 0.2s;
          }

          main:hover {
            background-color: ${theme.ActionColor};
            color: ${theme.MainColor2};
          }

          main:hover .walletLogo {
            filter: ${dark == "True" ? "invert(85%)" : "invert(0%)"};
          }
          main > h3 {
            margin: 0;
            padding: 0;
            font-size: ${theme.FontSize};
          }

          .walletLogo {
            transition: 0.2s;
            position: relative;
            z-index: 100;
            filter: ${dark == "True" ? 0 : "invert(85%)"};
          }
        `}
      </style>
    </main>
  );
};

export default WalletWrapper;
