import { require, validateEmail } from "../utils.js";

let $wrapper = this.shadowRoot.getElementById('wrapper');
let $email = this.shadowRoot.getElementById('email');
let $pass = this.shadowRoot.getElementById('pass');
let $repass = this.shadowRoot.getElementById('repass');

function connectedCallback() {
        this.$registerForm.onsubmit = (event) => {
            event.preventDefault();

            let email = this.$email.value;
            let password = this.$pass.value;



            function confirmPassword(value) {
                return value == password;
            }

            let isPassed =
                (
                    this.$email.validate(require, "Input your email") &&
                    this.$email.validate(validateEmail, "Wrong email format")
                ) &
                this.$password.validate(require, "Input your password") &
                (
                    this.$passwordConfirmation.validate(require, "Input your password confirmation") &&
                    this.$passwordConfirmation.validate(confirmPassword, "Password confirmation is not match")
                );

            if (isPassed) {
                register(email, password);
            }

        }
    }
