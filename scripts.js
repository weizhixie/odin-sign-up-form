const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const matchPassword = document.querySelector("#match");

confirmPassword.addEventListener("blur", (e) => {
    const value = e.target.value;

    if (value.length && value != password.value || password.value === "" || confirmPassword.value === "") {
        matchPassword.classList.remove("hidden");
    } else {
        matchPassword.classList.add("hidden");
    }
});

function checkEmptyPassword() {
    if (password.value === "" || confirmPassword.value === "") {
        matchPassword.classList.remove("hidden");
    } else {
        matchPassword.classList.add("hidden");
        
    }
}

checkEmptyPassword();
