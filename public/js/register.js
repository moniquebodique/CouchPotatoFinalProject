$("#register-btn").on("click", function(event) {
    // on click go this this location main.html, i dont know if the routing is correct. 
    location.href = "../main.html"
    event.preventDefault();
    res.sendFile("../../view/main.html");

    var newUser = {
        firstName: $("#firstName").val().trim(),
        lastName: $("#lastName").val().trim(),
        userName: $("#userName").val().trim(),
        birthDate: $("#birthDate").val().trim(),
        password: $("#password").val().trim(),
        repeatPassword: $("#repeatPassword").val().trim()
    };

    // send an AJAX POST-request with jQuery
    $.post("/api/new", newUser)
        // on success, run this callback
        .then(function(data) {
            // log the data we found
            console.log(data);
            // tell the user we're adding a character with an alert window
            alert("Adding user...");
        });

    // empty each input box by replacing the value with an empty string
    $("#firstName").val("");
    $("#lastName").val("");
    $("#userName").val("");
    $("#birthDate").val("");
    $("#password").val("");
    $("#repeatPassword").val("");


});