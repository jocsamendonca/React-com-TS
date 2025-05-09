import { useMemo } from "react";

const CalculoPesado = ({ numero }) => {
  const resultadoCalculoPesado = useMemo(() => {
    return operacaoPesada(numero);
  }, [numero]);
  //   const resultadoCalculoPesado = 5000;

  return <div>Resultado: {resultadoCalculoPesado}</div>;
};

const operacaoPesada = (num) => {
  console.log("Realizando operação pesada");
  return num * 1000;
};

export default CalculoPesado;
