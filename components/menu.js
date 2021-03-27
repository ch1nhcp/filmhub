const $template = document.createElement('template');
$template.innerHTML = /*html*/`
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<div class="container-fluid">
<div class="row bg-dark">
    <div class="d-inline-flex justify-content-left">
        <nav class="navbar navbar-expand-sm mt-2">
            <a class="navbar-brand text-danger" href="#">Filmhub</a>
        </nav>
    </div>
    <div class="d-inline-flex justify-content-end col mt-3">
        <a class="navbar-brand text-white" href="#">Contact</a>
        <a class="navbar-brand text-white" href="./signIn/signUpsignIn.html">Đăng kí</a>
        <a class="navbar-brand text-white" href="./signIn/signUpsignIn.html">Đăng nhập</a>
    </div>
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