import React from "react";

const NumberList = ({ numbers }) => {
  // métodos de array - filter, map, reduce, ...

  // chaves - key
  // um identificador único para cada elemento
  return (
    <ul>
      {numbers.map(
        (
          number,
          index //em JS "padrão" seria (number) => {}, em React usa () em vez de {}
        ) => (
          <li key={index}>{number}</li>
        )
      )}
    </ul>
  );
};

export default NumberList;
