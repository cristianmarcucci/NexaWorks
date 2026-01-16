const USERS_KEY = "users";
const SESSION_KEY = "session";

// --- USERS ---

function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

function setUsers(users) {
    return localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function addTestUsers() {
    const users = getUsers();
    if (users.length > 0) return;

    const testUsers = Array.from({length: 5}, (_, i) => ({
        id: Date.now() + i,
        name: `Android n ${i}`,
        email: `exemple${i}@exemple.com`,
        password: `${i}${i}${i}${i}`
    }));

    setUsers(testUsers);
}

// --- SESSION ---

export function getSession() {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
}

export function setSession(user){
    return localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function logout() {
    localStorage.removeItem(SESSION_KEY);
    window.location.href = "login.html";
}

// --- AUTH ---

export function login(email, password){
    const users = getUsers();

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if(!user) {
        alert("Invalid email or password");
        return;
    }

    setSession({
        id: user.id,
        name: user.name,
        email: user.email
    });

    window.location.href = "index.html";

}

// --- ROUTE GUARD ---

export function requireAuth(){
    const session = getSession();
    if(!session){
        window.location.href = "login.html";
    }
}
 
