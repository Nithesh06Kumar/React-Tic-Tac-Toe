import React from "react";
const ADDITIONALS = [1, 3, 5];
const Logs = ({ turn }) => {
  return (
    <ol id="log">
      {turn?.map((ele) => (
        <li key={`${ele?.position?.rowIndex}${ele?.position?.colIndex}`}>
          {ele?.playerSymbol} selected box{" "}
          {ele?.position?.rowIndex +
            ele?.position?.colIndex +
            ADDITIONALS[ele?.position?.rowIndex]}
        </li>
      ))}
    </ol>
  );
};

export default Logs;
