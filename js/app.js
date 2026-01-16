import { addTestUsers, login, logout, requireAuth, getSession } from "./auth.js";

addTestUsers();
requireAuth();

// Login ---

const loginForm = document.getElementById("loginForm");

if(loginForm){
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        login(
            document.getElementById("emailInput").value,
            document.getElementById("passwordInput").value
        );
    });
}

// Logout ---

const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){
    logoutBtn.addEventListener("click", logout)
};

