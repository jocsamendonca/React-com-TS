import "./App.css";
import CalculoPesado from "./components/CalculoPesado";
import ComponentFilho from "./components/ComponentFilho";
import Contador from "./components/Contador";
import ContadorCallback from "./components/ContadorCallback";
import Conteiner from "./components/Conteiner";
import DisplayWindowSize from "./components/DisplayWindowSize";
import Exercises from "./components/Excercises";
import ExemploUseEffect from "./components/ExemploUseEffect";
import PerfilDeUsuario from "./components/PerfilDeUsuario";
import Timer from "./components/Timer";
import ValorDoContexto from "./components/ValorDoContexto";
import { MeuContextoProvider } from "./contexts/MeuContextoProvider";

function App() {
  return (
    <>
      {/* 8.1 - useEffect */}
      <ExemploUseEffect />
      <Timer />
      {/* 8.2 - useContext */}
      {/* aplicações de pequeno e médio porte, que precisam transferir o estado entre componentes */}
      <MeuContextoProvider>
        <ComponentFilho />
        <ValorDoContexto />
      </MeuContextoProvider>
      {/* 8.3 - useReducer */}
      {/* estados mais complexos */}
      <Contador />
      {/* 8.4 - Custom hook */}
      <DisplayWindowSize />
      {/* 8.5 - Slots e children props */}
      <Conteiner>
        <h1>Título da seção</h1>
        <p>Este é meu subtítulo</p>
        <Contador />
      </Conteiner>
      {/* 8.6 - Sicronizar o estado com props */}
      {/* prop => componente => chamda de API => resulta em um dado */}
      <PerfilDeUsuario usuarioId={1} />
      <PerfilDeUsuario usuarioId={2} />
      {/* 8.7 - useMemo e useCallback */}
      <CalculoPesado numero={5} />
      <ContadorCallback />
      {/* Exercícios */}
      <Exercises />
    </>
  );
}

export default App;
