import { useEffect, useState } from "react";

const ExemploUseEffect = () => {
  const [contador, setContador] = useState(0);

  //executar algo, baseado em algo
  // a mudança de um valor, carregamento da página
  useEffect(() => {
    document.title = `Você clicou ${contador} vezes`;
  });
  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
    </div>
  );
};

export default ExemploUseEffect;
