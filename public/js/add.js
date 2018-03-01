$(document).ready(function ()
{
    // When the button to add a user is pressed
    $(".add-user").on("click", function (event)
    {
        console.log("Creating user...");

        // Make a newUser object
        var newUser =
        {
            userData:
            {
                // Grab values from the page and store them in variables
                first_name: $("#first-name").val().trim(),
                last_name: $("#last-name").val().trim(),
                email: $("#email").val().trim(),
                password: $("#password").val().trim(),
                date_of_birth: $("#date-of-birth").val().trim(),
                gender: $("#gender").val().trim(),
                telephone: $("#telephone").val().trim(),
                house_number: $("#house-number").val().trim(),
                street_name: $("#street-name").val().trim(),
                city: $("#city").val().trim(),
                state: $("#state").val().trim(),
                country: $("#country").val().trim(),
                zipcode: $("#zip-code").val().trim()
            }
        };
        console.log("User object created...");

        console.log(newUser);

        // Send an AJAX post request
        $.post("/api/members", newUser)
            // on success, run this callback
            .then(function (data) {
                alert("User added!");
                // log the data we found
                console.log(data);
            });

        // Clear the forms when done
        $("#first-name").val("");
        $("#last-name").val("");
        $("#email").val("");
        $("#password").val("");
        $("#date-of-birth").val("");
        $("#gender").val("");
        $("#telephone").val("");
        $("#house-number").val("");
        $("#street-name").val("");
        $("#city").val("");
        $("#state").val("");
        $("#country").val("");
        $("#zip-code").val("");
    });

});