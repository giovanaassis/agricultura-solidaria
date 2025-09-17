import { mostrarPerfilMenu } from "./mostrarPerfilMenu.js";

const header = document.querySelector("header");

header.innerHTML = `
  <img src="img/logotipo.png" alt="Logo do Projeto" class="logo" />
  <nav>
    <ul class="menu-lista">
      <li class="menu-item"><a href="index.html">Início</a></li>
      <div class="barra"></div>
      <li class="menu-item"><a href="produtos.html">Produtos</a></li>
      <div class="barra"></div>
      <li class="menu-item"><a href="suporte.html">Suporte</a></li>
    </ul>
  </nav>
  <div class="icone-login">
    <a><i class="fa-solid fa-user"></i></a>
    <div class="perfil">
      <ul>
        <li><a href="alimentos.html">Seus alimentos</a></li>
        <li><a href="doacoes.html">Suas doações</a></li>
        <li>Doar</li>
        <li>Sair</li>
      </ul>
    </div>
  </div>
`;

mostrarPerfilMenu();

const links = header.querySelectorAll(".menu-lista a");

if (links.length === 0) alert("não tem links");

const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  if(link.getAttribute("href") === currentPage) {
    link.classList.add("actived-link");
  }
});
