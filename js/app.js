import {addTestUser, login} from "./auth.js";

addTestUser();

const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginSubmit = document.getElementById("loginForm");

loginSubmit.addEventListener("submit", (event)=>{
    event.preventDefault();
    login(emailInput.value, passwordInput.value);
});
