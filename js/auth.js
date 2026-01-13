let users = [];

export function addTestUser() {

    for (let index = 0; index < 5; index++) {
        const testUser = {
        id: Date.now(),
        name: "Jack Black",
        email: `exemple${index}@exemple.com`,
        password: `${index}${index}${index}${index}`,
        isAuthenticated: false
    }

        users = [...users, testUser];        
    } 

    console.log(users);
}

function getLoggedUser() {
    const logged = localStorage.getItem("user");
    return logged ? JSON.parse(logged) : {};
}

function setLoggedUser() {
    localStorage.setItem("user", JSON.stringify(user));
}

export function login(email, password) {
          
    const updateUser = users.map(user => {
        if(user.email === email && user.password === String(password)){
            return {...user, isAuthenticated: true};
        }
        
        return user;
    })

    checkAuthentication(updateUser);
}

function checkAuthentication(user) {
    if(user.find(user => user.isAuthenticated)) {
        window.location.href = './index.html';
    } else {
        console.log(user, users.find(user => user.isAuthenticated));
    }
    
}