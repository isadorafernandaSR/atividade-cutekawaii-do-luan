import "./Header.css";

function Header() {
  return (
    <header class="cabecalho">
      <span class="logo">Studio Alfa</span>
      <nav>
        <ul class="menu">
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a class="botao-contato" href="#">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
