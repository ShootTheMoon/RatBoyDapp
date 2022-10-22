// React Imports
import { useContext, useEffect, useState } from "react";
//Component Imports

// Lib Imports

// Asset Imports
import timeLeftOnLock from "../../Utils/timeLeftOnLock";
// Context Imports
import { ThemeContext } from "../../../pages/_app";

const StandardLock = (props) => {
  const [tokenName, setTokenName] = useState("Loading...");
  const [tokenAddress, setTokenAddress] = useState(null);
  const [creatorAddress, setCreatorAddress] = useState(null);
  const [withdrawAddress, setWithdrawAddress] = useState(null);
  const [standardLock, setStandardLock] = useState(false);
  const [lockDate, setLockDate] = useState(1665190112);
  const [endDate, setEndDate] = useState(1665248520);
  const [startDate, setStartDate] = useState(1665247520);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setCreatorAddress("0x6912D75fA1027dAB6DD433885F6f0cdb5F2bE474");
    setWithdrawAddress("0x6912D75fA1027dAB6DD433885F6f0cdb5F2bE474");
    setTokenAddress("0x6912D75fA1027dAB6DD433885F6f0cdb5F2bE474");
    setTokenName("Shit Brick");
    setInterval(() => {
      setTimeLeft(timeLeftOnLock(endDate));
    }, 1000);
  }, []);

  const { theme } = useContext(ThemeContext);
  return (
    <main>
      <div className="lockWrapper">
        <div className="headerWrapper">
          <div className="header">
            <h2>{tokenName}</h2>
            <div className="infoWrapper">
              <div>Lock Creator</div>
              <Address address={creatorAddress} />
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M17.5 16.3h13v-4.65q0-2.75-1.9-4.7Q26.7 5 24 5q-2.7 0-4.6 1.95-1.9 1.95-1.9 4.7Zm20.15 29.4q-4.05 0-6.85-2.8T28 36.05q0-4.05 2.8-6.85t6.85-2.8q4.05 0 6.85 2.8t2.8 6.85q0 4.05-2.8 6.85t-6.85 2.8Zm-9.8-1.7H11q-1.25 0-2.125-.875T8 41V19.3q0-1.25.875-2.125T11 16.3h3.5v-4.65q0-4 2.775-6.825T24 2q3.95 0 6.725 2.825Q33.5 7.65 33.5 11.65v4.65H37q1.25 0 2.125.875T40 19.3v4.35q-.75-.2-1.5-.25-.75-.05-1.5 0-5.1.2-8.55 3.875Q25 30.95 25 36.05q0 2.2.75 4.225.75 2.025 2.1 3.725Zm9.8-8.45q1.4 0 2.375-.975Q41 33.6 41 32.2t-.975-2.35q-.975-.95-2.375-.95-1.35 0-2.325.975-.975.975-.975 2.325 0 1.4.975 2.375.975.975 2.325.975Zm0 6.65q1.65 0 3.1-.775 1.45-.775 2.35-2.125-1.3-.7-2.65-1.125-1.35-.425-2.8-.425-1.45 0-2.8.425-1.35.425-2.65 1.125.9 1.35 2.35 2.125 1.45.775 3.1.775Z" />
          </svg>
        </div>
        <div className="divider" />
        {standardLock ? (
          <div className="lockTimeWrapper">
            <div className="lockTimeHeader">
              <h3>Lock Type</h3>
              <h4>Standard</h4>
            </div>
            <div className="lockTime">
              <LockTime time={lockDate} name="Lock Date" />
              <LockTime time={endDate} name="Unlock Date" />
            </div>
            <div className="timeLeftWrapper">
              <h3>Time Left</h3>
              <h4>{timeLeft}</h4>
            </div>
          </div>
        ) : (
          <div className="lockTimeWrapper">
            <div className="lockTimeHeader">
              <h3>Lock Type</h3>
              <h4>Linear</h4>
            </div>
            <div className="lockTime">
              <LockTime time={lockDate} name="Lock Date" />
              <LockTime time={startDate} name="Start Unlock" />
              <LockTime time={endDate} name="Complete Unlock" />
            </div>
            <div className="timeLeftWrapper">
              <h3>Time Left</h3>
              <h4>{timeLeft}</h4>
            </div>
          </div>
        )}

        <div className="divider" />
        <div className="bodyWrapper">
          <div className="infoWrapper">
            <div>Token Address</div>
            <Address address={tokenAddress} />
          </div>
          <div className="infoWrapper">
            <div>Withdraw Address</div>
            <Address address={withdrawAddress} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .lockWrapper {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            width: 30rem;
            background-color: ${theme.MainColor2};
            border-radius: ${theme.BorderRadius};
            border: 0.1rem solid ${theme.MainColor};
            font-size: ${theme.FontSize};
            color: ${theme.TextColor};
          }

          .headerWrapper {
            padding: 1rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-direction: row;
          }

          .headerWrapper svg {
            fill: ${theme.TextColor2};
          }

          .header h2 {
            font-size: 2rem;
            padding-bottom: 0.5rem;
          }

          .header {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }

          .lockTimeWrapper {
            width: 100%;
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-direction: column;
            gap: 1.5rem;
          }

          .lockTimeHeader {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          .lockTimeHeader h3 {
            color: ${theme.TextColor2};
            font-size: ${theme.FontSize};
          }

          .lockTimeHeader h4 {
            text-decoration: underline;
            font-weight: 600;
            cursor: pointer;
          }

          .timeLeftWrapper {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }

          .timeLeftWrapper h3 {
            color: ${theme.TextColor2};
            font-size: ${theme.FontSize};
          }

          .timeLeftWrapper h4 {
            font-weight: 600;
          }

          .lockTime {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
            flex-direction: column;
            gap: 1.5rem;
          }

          .bodyWrapper {
            padding: 1rem;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            gap: 1.2rem;
            width: 100%;
            height: 100%;
          }

          .infoWrapper {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            gap: 0.2rem;
          }

          .divider {
            height: 0.1rem;
            width: 100%;
            background-color: ${theme.MainColor};
          }
        `}
      </style>
    </main>
  );
};

const LockTime = (props) => {
  const { theme } = useContext(ThemeContext);
  const [hour, setHour] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    const date = new Date(props.time * 1000); // The 0 there is the key, which sets the date to the epoch
    setDate(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);
    setHour(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  }, []);

  return (
    <main>
      <div className="lockTitle">{props.name}</div>
      <div className="lockTimeHour">
        {hour}, {date}
      </div>
      {/* <div className="lockTimeDate">{date}</div> */}
      <style jsx>{`
        main {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
          gap: 0.2rem;
        }

        .lockTitle {
          color: ${theme.TextColor2};
        }

        .lockTimeDate {
          color: ${theme.TextColor};
          font-weight: 600;
        }

        .lockTimeHour {
          color: ${theme.TextColor};
          font-weight: 600;
        }
      `}</style>
    </main>
  );
};

const LoaderBar = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <main>
      <div className="loaderBar">
        <div className="loaderBarLoaded">
          <div>30%</div>
        </div>
      </div>
      <style jsx>{`
        main {
        }

        .loaderBar {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          height: 2rem;
          width: 20rem;
          background-color: ${theme.MainColor2};
          border-radius: ${theme.BorderRadius};
        }

        .loaderBarLoaded {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          height: 2rem;
          width: 30%;
          background-color: ${theme.ActionColor};
          border-radius: ${theme.BorderRadius};
          color: ${theme.MainColor2};
          transition: 0.2s;
        }
      `}</style>
    </main>
  );
};

const Address = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <main>
      {props.address ? `${props.address.slice(0, 4)}...${props.address.slice(-6, -1)}` : "Loading..."}
      {props.address && (
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20">
          <path d="M3.75 17.5q-.5 0-.875-.375T2.5 16.25v-4.375h1.25v4.375h12.5V3.708H3.75v4.417H2.5V3.708q0-.5.375-.875t.875-.375h12.5q.5 0 .875.375t.375.875V16.25q0 .5-.375.875t-.875.375Zm4.854-3.479-.937-.938 2.458-2.458H2.5v-1.25h7.625L7.667 6.917l.938-.938L12.625 10Z" />
        </svg>
      )}

      <style jsx>{`
        main {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: row;
          gap: 0.6rem;
          color: ${theme.ActionColor};
          font-weight: 900;
        }

        svg {
          fill: ${theme.TextColor};
          cursor: pointer;
        }
      `}</style>
    </main>
  );
};

export default StandardLock;
