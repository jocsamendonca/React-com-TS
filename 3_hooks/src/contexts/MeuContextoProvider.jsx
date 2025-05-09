import { useState } from "react";
import { MeuContexto } from "./MeuContexto";

export const MeuContextoProvider = ({ children }) => {
  const [mensagem, setMensagem] = useState("Mensagem inicial!");

  const valorDoContexto = {
    mensagem,
    setMensagem,
  };

  return (
    <MeuContexto.Provider value={valorDoContexto}>
      {children}
    </MeuContexto.Provider>
  );
};
