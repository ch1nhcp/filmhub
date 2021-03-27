// import { require, validateEmail } from "../utils.js";


// export function signUp() {
// let $wrapper = this.shadowRoot.getElementById('wrapper');
// let $email = this.shadowRoot.getElementById('email');
// let $pass = this.shadowRoot.getElementById('pass');
// let $repass = this.shadowRoot.getElementById('repass');
// let $button = this.shadowRoot.getElementById('button');
//         this.$button.onsubmit = (event) => {
//             event.preventDefault();

//             let email = this.$email.value;
//             let password = this.$pass.value;



//             function confirmPassword(value) {
//                 return value == password;
//             }

//             let isPassed =
//                 (
//                     this.$email.validate(require, "Input your email") &&
//                     this.$email.validate(validateEmail, "Wrong email format")
//                 ) &
//                 this.$password.validate(require, "Input your password") &
//                 (
//                     this.$repass.validate(require, "Input your password confirmation") &&
//                     this.$repass.validate(confirmPassword, "Password confirmation is not match")
//                 );

//             if (isPassed) {
//                 register(email, password);
//             }

//         }
//     }


import { require, validateEmail } from "../utils.js";

const $template = document.createElement('template');
$template.innerHTML = /*html*/ `
<link rel="stylesheet" href="styles.css">
<h1 style="margin-left: 50px;">Filmstation</h1>
<form>
  <input checked id="signin" name="action" type="radio" value="signin" />
  <label for="signin">Sign in</label>
  <input id="signup" name="action" type="radio" value="signup" />
  <label for="signup">Sign up</label>
  <input id="reset" name="action" type="radio" value="reset" />
  <label for="reset">Reset</label>
  <div id="wrapper">
    <div id="arrow"></div>
    <input id="email" placeholder="Email" type="text" />
    <input id="pass" placeholder="Password" type="password" />
    <input id="repass" placeholder="Repeat password" type="password" />
  </div>
  <button id="btn" type="submit">
    <span>
      Reset password
      <br />
      Sign in
      <br />
      Sign up
    </span>
  </button>
</form>
<div id="hint">Made by Filmstation Team</div>
`;

export default class signUp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$button = this.shadowRoot.getElementById('btn');
        this.$wrapper = this.shadowRoot.getElementById('wrapper');
        this.$email = this.shadowRoot.getElementById('email');
        this.$pass = this.shadowRoot.getElementById('pass');
        this.$repass = this.shadowRoot.getElementById('repass');
    }

    connectedCallback() {
        this.$button.onsubmit = (event) => {
            event.preventDefault();

            let email = this.$email.value;
            let password = this.$password.value;



            function confirmPassword(value) {
                return value == password;
            }

            let isPassed = 
                (
                    this.$email.validate(require, "Input your email") &&
                    this.$email.validate(validateEmail, "Wrong email format")
                ) &
                this.$pass.validate(require, "Input your password") &
                (
                    this.$repass.validate(require, "Input your password confirmation") &&
                    this.$repass.validate(confirmPassword, "Password confirmation is not match")
                );

            if (isPassed) {
                register(email, password);
            }

        }
    }
}

window.customElements.define('register-form', signUp);