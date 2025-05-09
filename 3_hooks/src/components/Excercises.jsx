import { useEffect, useMemo } from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";

// Exercício 1
const UserInfo = ({ userInfo }) => {
  useEffect(() => {
    document.title = `${userInfo.name} - ${userInfo.jobTitle}`;
  }, [userInfo]);

  return (
    <div>
      <h1>Nome: {userInfo.name}</h1>
      <p>Profissão: {userInfo.jobTitle}</p>
    </div>
  );
};

// Exercício 2
const CalculoFibonacci = ({ numero }) => {
  const resultadoFibonacci = useMemo(() => {
    return fibonacci(numero);
  }, [numero]);

  return (
    <div>
      Fibonacci de: {numero} é: {resultadoFibonacci}
    </div>
  );
};

//Recursivo
const fibonacci = (num) => {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

// Exercício 3
const OnlineStatus = () => {
  const isOnline = useOnlineStatus();

  return <div>Status: {isOnline ? "Online" : "Offline"}</div>;
};

// Componente Pai
const Exercises = () => {
  const userInfo = { name: "Jocsã", jobTitle: "Desenvolvedor" };

  return (
    <div>
      <h2>Exercício 1</h2>
      <UserInfo userInfo={userInfo} />
      <h2>Exercício 2</h2>
      <CalculoFibonacci numero={40} />
      <h2>Exercício 3</h2>
      <OnlineStatus />
    </div>
  );
};

export default Exercises;
