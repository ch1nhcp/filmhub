const $template = document.createElement('template');
$template.innerHTML = /*html*/`
<link rel="stylesheet" href="../filmstation/components/menu.css">
<!-- Component -->
<div class="navbar-component">
<!-- Class area is a container -->
<div class="navbar area">
  <!-- Logo -->
  <a href="#" class="brand">Filmstation</a>
  <!-- List of links -->
  <nav role="navigation" id="navigation" class="list">
    <a href="#" class="item -link">Sign in</a>
    <a href="#" class="item -link">Sign up</a>
    <a href="#" class="item -link">Book</a>
    <a href="#" class="item -link">About us</a>
    <span class="item"><i class="fa fa-search"></i></span>
  </nav>
  <!-- Button to toggle the display menu  -->
  <button data-collapse data-target="#navigation" class="toggle">
    <!-- Hamburger icon -->
    <span class="icon"></span>
  </button>
</div>
</div>
`;

export default class MenuFilm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('menu-film', MenuFilm);