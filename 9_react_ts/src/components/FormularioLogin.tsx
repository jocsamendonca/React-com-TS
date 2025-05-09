import { useState } from "react";

const FormularioLogin = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log(`Formulário enviado. Login: ${login}, senha: ${password}`);
    alert(`Usuário: ${login} - Senha: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Informe o login e senha</h2>
      <p>Login</p>
      <input type="text" value={login} onChange={handleChangeLogin} />
      <p>Senha</p>
      <input type="password" value={password} onChange={handleChangePassword} />
      <br />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default FormularioLogin;
