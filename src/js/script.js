const mudaMenu = () => {
    // if (
    //     imagem.src ===
    //     "https://raw.githubusercontent.com/isgabriel/rachi-lp__frontend/0224147903a47834fd6470629f6543119ec112dd/src/assets/menu-hamburguer.svg"
    // ) {
    criaMenu();
    //     imagem.src =
    //         "https://raw.githubusercontent.com/isgabriel/rachi-lp__frontend/269621e38d75b7f3327192461a1be385498ea411/src/assets/fechar-menu-icon.svg";
    //     imagem.className = "some-header-botao";
    // } else if (
    //     imagem.src ===
    //     "https://raw.githubusercontent.com/isgabriel/rachi-lp__frontend/269621e38d75b7f3327192461a1be385498ea411/src/assets/fechar-menu-icon.svg"
    // ) {
    //     desmontaMenu();
    //     imagem.src =
    //         "https://raw.githubusercontent.com/isgabriel/rachi-lp__frontend/0224147903a47834fd6470629f6543119ec112dd/src/assets/menu-hamburguer.svg";
    // }
};

const criaMenu = () => {
    const body = document.querySelector("body");

    const menu = document.createElement("menu");
    menu.classList.add("menu");
    menu.insertAdjacentHTML(
        "beforeend",
        `
        <div class="div-menu">
            <button class="fecha-menu-btn">
                <img src="https://raw.githubusercontent.com/isgabriel/rachi-lp__frontend/269621e38d75b7f3327192461a1be385498ea411/src/assets/fechar-menu-icon.svg" alt="fecha-menu" class="img-fecha-menu" />
            </button>
            <nav class="nav-menu">
                <a href="#funcionalidades" class="menu-options">Funcionalidades</a>
                <a href="#app" class="menu-options">App</a>
                <a href="#planos" class="menu-options">Planos</a>
                <a href="#contato" class="menu-options">Contato</a>
            </nav>
            <button class="button-logo">
                <img
                    src="https://raw.githubusercontent.com/isgabriel/rachi-lp__frontend/269621e38d75b7f3327192461a1be385498ea411/src/assets/logo.svg"
                    alt="logo"
                    aria-label="Logo Rachi" 
                />
            </button>
        </div>
    `
    );

    body.appendChild(menu);

    const fechaMenu = document.querySelector(".fecha-menu-btn");
    fechaMenu.addEventListener("click", desmontaMenu);

    const opcoesMenu = document.querySelectorAll(".menu-options");
    opcoesMenu.forEach((opcao) => {
        opcao.addEventListener("click", desmontaMenu);
    });

    const logoMenu = document.querySelector(".button-logo");
    logoMenu.addEventListener("click", () => {
        desmontaMenu();
        window.scrollTo(0, 0);
    });
};

const desmontaMenu = () => {
    const body = document.querySelector("body");
    const menu = document.querySelector("menu");

    body.removeChild(menu);
};

const imagem = document.getElementById("menu-imagem");
imagem.addEventListener("click", mudaMenu);
