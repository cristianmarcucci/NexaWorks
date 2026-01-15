let users = getLoggedUser();

function updateUsersState(newUsers){
    users = newUsers;
    setLoggedUser(newUsers);
}

export function addTestUser() {

    if(users.length === 0){
        let newUsers = [];
        for (let index = 0; index < 5; index++) {
            const testUser = {
            id: Date.now() + index,
            name: `Android n ${index}`,
            email: `exemple${index}@exemple.com`,
            password: `${index}${index}${index}${index}`,
            isAuthenticated: false
            }

            newUsers.push(testUser)      
        } 
        updateUsersState(newUsers);
        redirectLogged(users);
    }
}

function getLoggedUser() {
    const loggedUser = localStorage.getItem("loggedUser");
    return loggedUser ? JSON.parse(loggedUser) : [];
}

function setLoggedUser(users) {
    localStorage.setItem("loggedUser", JSON.stringify(users));
}

export function login(email, password) {

    const emailCheck = users.some(user => user.email === email);

    if(emailCheck){
        const checkPassword =  users.map(user => {
        if(user.email === email && user.password !== String(password)){
            alert("Incorrect password.");
        }});
    } else {
            alert("Email not registred");
    }
          
    const updateUser = users.map(user => {
        if(user.email === email && user.password === String(password)){
            return {...user, isAuthenticated: true};
        }         
            return user; 
    })
    setLoggedUser(updateUser);   
    redirectLogged(updateUser);
}

function logout(){
    const updateUser = users.map(user => ({...user, isAuthenticated: false}));
    updateUsersState(updateUser);          
    redirectLogged(updateUser);
    divider.innerHTML = "";
}

function redirectLogged(u) {

    console.log(u);

    if(u.find(user => user.isAuthenticated)) {
        console.log(`welcome, ${u.find(user => user.isAuthenticated).name}!`);
        const divider = document.getElementById("divider");
        divider.innerHTML = '<button class="btn-login" id="logoutBtn">Logout</button>';
        const logoutBtn = document.getElementById("logoutBtn");
        logoutBtn.addEventListener("click", () => logout());
        //window.location.href = './index.html';
    } else {
        if (window.location.hash !== '#') {
            window.location.href = '#';        }
    }
    
}

redirectLogged(users);
