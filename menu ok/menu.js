const $template = document.createElement('template');
$template.innerHTML = /*html*/`
<link rel="stylesheet" href="styles.css" />
<link
      href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
    />
    <link rel="stylesheet" href="css/style.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- Navbar -->
<nav class="navbar">
<div class="inner-width">
  <a href="/" class="logo"></a>
  <button class="menu-toggler">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <div class="navbar-menu">
    <a href="#">Trending</a>
    <a href="#">Book tickets</a>
    <a href="#">About Us</a>
    <a href="#">Sign In</a>
  </div>
</div>
</nav>

<section style="margin-top: 120px;">
<h1 style="text-align: center;">Nội dung trong này</h1>

</section>
`;

export default class MenuFilm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('menu-film', MenuFilm);