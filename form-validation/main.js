// maak een referentie naar gebruikersnaam / melding
const username = document.getElementById("username");
const usernameMsg = document.getElementById("usernameMsg");

// test
console.log(username);
console.log(usernameMsg);

// maak een referentie naar wachtwoord / melding
const password = document.getElementById("password");
const passwordMsg = document.getElementById("passwordMsg");

// test
console.log(password);
console.log(passwordMsg);

// event-listener gebruikersnaam
username.addEventListener("input", validateUsername);

// functie voor validatie username
function validateUsername() {
    // test
    // console.log(username.value.toString());
    // console.log(username.value.toString().includes('@'));
    if (username.value.toString().includes('@')) {
        usernameMsg.style.display = "block";
        username.style.border = "2px solid red";
    } else {
        usernameMsg.style.display = "none";
        username.style.border = "2px solid rebeccapurple";
    }
}

// event-listener password
password.addEventListener("input", validatePassword);

// functie voor validatie password
function validatePassword() {
    // test
    // console.log(password.value.length);
    if (password.value.length < 6) {
        passwordMsg.style.display = "block";
        password.style.border = "2px solid red";
    } else  {
        passwordMsg.style.display = "none";
        password.style.border = "2px solid rebeccapurple";
    }
}