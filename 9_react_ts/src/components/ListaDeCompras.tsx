import { useState } from "react";

export const ListaDeCompras = () => {
  type Item = {
    id: number;
    nome: string;
  };

  const [itens, setItens] = useState<Item[]>([]);
  const [novoItem, setNovoItem] = useState<string>("");

  const adicionarItem = () => {
    const item: Item = {
      id: itens.length + 1,
      nome: novoItem,
    };
    setItens([...itens, item]);
    setNovoItem("");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Item adicionado com sucesso!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="itens">Informe o item </label>
        <input
          type="text"
          value={novoItem}
          id="itens"
          onChange={(e) => setNovoItem(e.target.value)}
        />
        <button onClick={adicionarItem}>Adicionar</button>
        <ul>
          {itens.map((item) => (
            <li key={item.id}>{item.nome}</li>
          ))}
        </ul>
      </div>
    </form>
  );
};
