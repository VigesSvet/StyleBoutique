let vLogin = document.getElementById("login");
let vPassword = document.getElementById("password");
let vShowPassword = document.getElementById("show_password");
let vCreateProfile = document.getElementById("create_profile");

vShowPassword.addEventListener("click", function() {
    (vShowPassword.checked ? vPassword.type = "text" : vPassword.type = "password");
});

setInterval(() => {
    if (vLogin.value.length > 0
        && vPassword.value.length > 0)
            vCreateProfile.disabled = false;
    else
        vCreateProfile.disabled = true;
}, 25);