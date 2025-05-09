import "./App.css";
import { BarraFerramentas } from "./components/BarraFerramentas";
import Contador from "./components/Contador";
import ContadorInterval from "./components/ContadorInterval";
import Counter from "./components/Counter";
import ExibirPostagens from "./components/ExibirPostagens";
import FormularioLogin from "./components/FormularioLogin";
import Greeting from "./components/Greeting";
import { ListaDeCompras } from "./components/ListaDeCompras";
import { TextInput } from "./components/TextInput";
import { TemaProvider } from "./contexts/TemaContext";

function App() {
  return (
    <>
      <h1>React com TS</h1>
      {/* 1 - componente funcional com TS */}
      <Greeting name="Jocsã" />
      {/* 2 - Hooks com tipos */}
      <Counter />
      {/* 3 - Manipulação de eventos com tipos */}
      <TextInput />
      {/* 4 - Custom hooks com TS */}
      <ContadorInterval />
      {/* Exercícios */}
      <FormularioLogin />
      <ListaDeCompras />
      {/* 6 - useReducer com TS */}
      <Contador />
      {/* 7 - Context API com TS */}
      <TemaProvider>
        <div>
          <BarraFerramentas />
        </div>
      </TemaProvider>
      {/* 8 - Requisição de APIs com Axios e TS */}
      <ExibirPostagens />
    </>
  );
}

export default App;
