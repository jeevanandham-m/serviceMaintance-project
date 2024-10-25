document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginform").addEventListener("submit", function (event) {
        event.preventDefault();

        let userName = document.getElementById("user_name").value.trim();
        const password = document.getElementById("password_1").value.trim();
        const userType = document.getElementById("user-select").value;

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        if (userType === "admin") {
            window.location.href = "user.html";
        } 
        else if (userType === "HOD") {
            window.location.href = "hod.html";
        } 
        else if (userType === "principal") {
            window.location.href = "principal.html";
        } 
        else {
            alert("Invalid user type selected!");
        }
    });
});


function userName(){

    document

}