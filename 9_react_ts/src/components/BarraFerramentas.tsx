import { useContext } from "react";
import { TemaContext } from "../contexts/TemaContext";

export const BarraFerramentas = () => {
  const contextoTema = useContext(TemaContext);

  if (!contextoTema) {
    throw new Error("BarraFerramentas deve estar dentro do TemaProvier");
  }

  return (
    <div
      style={{
        background: contextoTema.tema === "claro" ? "white" : "black",
        color: contextoTema.tema === "claro" ? "black" : "white",
      }}
    >
      <button onClick={contextoTema.alternarTema}>Alternar tema</button>
    </div>
  );
};
