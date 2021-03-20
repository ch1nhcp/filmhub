const $template = document.createElement('template');
$template.innerHTML = /*html*/`
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<div class="row container-fluid">
    <div class="d-inline-flex justify-content-left">
        <nav class="navbar navbar-expand-sm mt-2">
            <a class="navbar-brand" href="#">Filmhub</a>
        </nav>
    </div>
    <div class="d-inline-flex justify-content-end col mt-3">
        <a class="navbar-brand" href="#">Contact</a>
        <a class="navbar-brand" href="#">Đăng kí</a>
        <a class="navbar-brand" href="#">Đăng nhập</a>
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