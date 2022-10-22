// React Imports
import { useContext, useEffect } from "react";
import Link from "next/link";
// Context Imports
import { ThemeContext } from "../../../pages/_app";
// List Imports
import menuList from "./MenuList";

const SideMenu = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="sideMenuWrapper">
      <header className="menuHeader">
        <div className="logoWrapper">
          <Link href="/">
            <svg
              id="Layer_1"
              x={0}
              y={0}
              height={28}
              style={{
                enableBackground: "new 0 0 2400 1800",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="531.89 727.33 1657.01 260.09"
            >
              <style>{"     .st0{fill:#5cdb5c}.st1{fill:#f4f4f4}   "}</style>
              <path
                className="st0"
                d="M1378.16 812.928c0 15.08-4.79 27.15-14.66 36.88-9.93 9.79-22.13 14.56-37.3 14.56-15.52 0-27.88-4.76-37.81-14.56-6.3-6.21-10.54-13.38-12.77-21.68 21.31-.42 34.41-15.43 55.78-24.49 5.41-2.31 11.35-4.21 18.1-5.4 7.76-1.38 16.67-1.8 26.78-.42 1.27 4.67 1.88 9.69 1.88 15.11Z"
                transform="translate(-250 79.412)"
              />
              <g transform="translate(-250 73.53)">
                <circle className="st0" cx={1243.83} cy={719.71} r={16.14} />
                <circle className="st0" cx={1213.52} cy={690.08} r={11.73} />
                <circle className="st0" cx={1242.74} cy={663.18} r={9.38} />
              </g>
              <path
                className="st1"
                style={{
                  fill: `${theme.TextColor}`,
                }}
                d="m952.97 719.888-71.91 122.85-72.91-122.85h-26.26v186.08h31.29v-121.19l59.6 99.41h15.58l59.62-100.15.23 121.93h31.29l-.27-186.08zm157.98-2.04c-28.28 0-52.08 9.11-70.74 27.07-18.7 18-28.19 40.88-28.19 68.01 0 27.13 9.48 50.02 28.19 68.01 18.67 17.97 42.47 27.07 70.74 27.07 28.1 0 51.77-9.11 70.36-27.08 18.61-18 28.05-40.88 28.05-68.01 0-27.13-9.44-50.01-28.06-68.01-18.58-17.95-42.25-27.06-70.35-27.06Zm0 160.67c-19.16 0-35.22-6.27-47.75-18.64-12.52-12.36-18.87-28.15-18.87-46.95 0-18.8 6.35-34.6 18.87-46.95 12.53-12.37 28.6-18.64 47.75-18.64 18.81 0 34.71 6.27 47.24 18.64 12.52 12.36 18.87 28.16 18.87 46.95 0 18.79-6.35 34.59-18.87 46.95-12.54 12.37-28.43 18.64-47.24 18.64Zm285.63-133.59c-18.59-17.97-42.27-27.1-70.37-27.1-15.8 0-30.2 2.84-43.09 8.49l16.73 25.69c7.97-3.11 16.78-4.68 26.36-4.68 18.82 0 34.7 6.27 47.24 18.64 12.52 12.37 18.87 28.16 18.87 46.95 0 18.8-6.35 34.6-18.87 46.95-12.54 12.37-28.42 18.64-47.24 18.64-19.16 0-35.22-6.27-47.75-18.64-12.52-12.35-18.87-28.15-18.87-46.95 0-12.27 2.71-23.27 8.07-32.86l-18.52-28.47c-14.51 16.87-21.86 37.46-21.86 61.33 0 27.15 9.49 50.03 28.2 68.01 18.67 17.97 42.46 27.08 70.74 27.08 28.1 0 51.78-9.11 70.37-27.08 18.6-18 28.05-40.88 28.05-68.01-.01-27.12-9.46-50-28.06-67.99Zm189.22-25.04v127.63l-102.69-127.63h-25.96v186.08h32.31v-127.63l102.69 127.63h25.96v-186.08z"
                transform="translate(-250 79.412)"
              />
              <path
                className="st1"
                style={{
                  fill: `${theme.TextColor}`,
                }}
                d="M1715.359 666.904h-32.31v186.07h129.44v-28.98h-97.13zm190.98 0-84.26 186.08h33.76l19.73-44.85h90.97l19.73 44.85h34.28l-84.53-186.08h-29.68Zm-18.86 114.04 33.58-76.26 33.57 76.26h-67.15Zm283.24-25.09c12.9-8.69 19.43-21.86 19.43-39.22 0-15.58-6.11-27.95-18.15-36.78-11.72-8.59-28.38-12.95-49.51-12.95h-83.81v186.08h88.94c22.99 0 40.85-4.44 53.07-13.18 12.58-9 18.95-21.98 18.95-38.6 0-12.33-3.26-22.72-9.68-30.9-4.99-6.31-11.43-11.15-19.24-14.45Zm-12.89-36.15c0 8.3-3 14.4-9.18 18.64-6.49 4.46-16.07 6.72-28.48 6.72h-49.19v-50.72h49.19c12.4 0 21.98 2.26 28.47 6.72 6.19 4.25 9.19 10.34 9.19 18.64Zm-86.85 52.81h55.6c27.24 0 40.48 8.71 40.48 26.64 0 17.75-13.24 26.38-40.48 26.38h-55.6v-53.02Zm281.33.25c-5.75-7.48-13.01-12.89-21.6-16.09-8.08-3.01-16.96-5.88-26.4-8.54-9.37-2.64-18.21-4.94-26.29-6.83-7.49-1.75-13.81-4.68-18.77-8.7-4.6-3.72-6.83-8.36-6.83-14.19 0-7.31 3.11-13.13 9.52-17.8 6.64-4.85 16.97-7.3 30.7-7.3 16.86 0 32.81 4.74 47.4 14.08l3.37 2.16 11.01-26.7-2.22-1.53c-15.87-10.93-35.91-16.48-59.56-16.48-23.07 0-40.99 5.13-53.25 15.24-12.45 10.27-18.77 23.51-18.77 39.35 0 9.65 2.2 18.05 6.53 24.97 4.31 6.88 9.99 12.23 16.89 15.91 6.56 3.5 13.87 6.51 21.72 8.95 7.7 2.4 15.54 4.53 23.3 6.34 7.54 1.76 14.55 3.72 20.84 5.81 5.88 1.96 10.7 4.79 14.33 8.42 3.39 3.4 5.04 7.45 5.04 12.37 0 7.27-3.13 12.94-9.57 17.36-6.74 4.63-17.32 6.97-31.42 6.97-10.84 0-21.54-1.87-31.8-5.57-10.22-3.68-18.69-8.5-25.16-14.33l-3.33-3-12.46 26.26 1.8 1.67c7.5 6.96 17.87 12.68 30.82 17 12.84 4.28 26.34 6.45 40.14 6.45 23.23 0 41.32-5.12 53.75-15.23 12.64-10.27 19.04-23.43 19.04-39.11-.01-10.94-2.95-20.33-8.77-27.91Z"
                transform="translate(-172.176 132.353)"
              />
            </svg>
          </Link>
        </div>
      </header>
      <div className="sideMenu">
        <h3>Moon Lock</h3>
        {menuList.map((item, i) => {
          if (item.category === "lock") {
            return <MenuItem link={item.link} key={i} name={item.name} icon={item.icon} />;
          }
        })}
        <h3>Moon Stake</h3>
        {menuList.map((item, i) => {
          if (item.category === "stake") {
            return <MenuItem link={item.link} key={i} name={item.name} icon={item.icon} />;
          }
        })}
        <h3>NFT</h3>
        {menuList.map((item, i) => {
          if (item.category === "nft") {
            return <MenuItem link={item.link} key={i} name={item.name} icon={item.icon} />;
          }
        })}
      </div>
      <style jsx>
        {`
          .sideMenuWrapper {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            width: 22rem;
            top: 0;
            left: 0;
            backdrop-filter: blur(10px);
            background-color: ${theme.MainColor2};
          }

          .sideMenu {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
          }

          .sideMenu h3 {
            padding: 3rem 0rem 1rem 2rem;
            width: 100%;
            font-size: 1.6rem;
            color: ${theme.TextColor};
          }

          .menuHeader {
            position: relative;
            height: 6rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
          }

          .logoWrapper {
            overflow: clip;
            margin-left: 2rem;
            position: absolute;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

const MenuItem = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Link href={`/${props.link}`}>
      <main>
        <div className="border" />
        <div className="itemIcon">{props.icon}</div>
        <div className="itemName">{props.name}</div>
        <style jsx>
          {`
            main {
              width: 100%;
              height: 6rem;
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
              font-size: 1.6rem;
              gap: 0.6rem;
              color: ${theme.TextColor2};
              transition: 0.2s;
              cursor: pointer;
            }

            .itemIcon {
              padding-left: 1rem;
              display: flex;
              align-self: center;
              justify-self: center;
              fill: ${theme.TextColor};
            }
            .itemName {
              align-self: center;
              justify-self: center;
            }

            main:hover {
              background-color: ${theme.MainColor};
            }

            main:hover .border {
              width: 1rem;
              background-color: ${theme.ActionColor};
            }

            .border {
              transition: 0.2s;
              width: 0rem;
              height: 100%;
              background-color: ${theme.MainColor2};
              border-top-right-radius: ${theme.BorderRadius};
              border-bottom-right-radius: ${theme.BorderRadius};
            }
          `}
        </style>
      </main>
    </Link>
  );
};

export default SideMenu;
