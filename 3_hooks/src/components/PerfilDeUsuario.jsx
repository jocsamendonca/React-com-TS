import { useState, useEffect } from "react";

const PerfilDeUsuario = ({ usuarioId }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Função para buscar dados
    const buscarUsuario = async () => {
      // Resposta assícrona
      const resposta = await fetch(
        `https://jsonplaceholder.typicode.com/users/${usuarioId}`
      );

      const dadosUsuario = await resposta.json();

      setUsuario(dadosUsuario);
    };

    if (usuarioId) {
      buscarUsuario();
    }
  }, [usuarioId]);

  return (
    <div>
      {usuario ? (
        <div>
          <h1>{usuario.name}</h1>
          <p>{usuario.email}</p>
        </div>
      ) : (
        <p>Carregando perfil do usuário...</p>
      )}
    </div>
  );
};

export default PerfilDeUsuario;
