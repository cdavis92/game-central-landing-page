// when scrolling on the browser, run the function
window.onscroll = function() {
    navbarSticky()
};

// variables for id of navbar, background-image and sticky;
var navbar = document.getElementById("nav-bar");
var bgImageHeight = document.getElementById("background-image");
var sticky = navbar.offsetTop;

// function to run sticky nav bar
function navbarSticky() {

    // if navbar reaches the top of screen and is viewed at 768 width or more, run JS code and add class
    // else, remove JS code and remove class
    if (window.pageYOffset >= sticky && window.innerWidth >= 768) {
        navbar.classList.add("sticky");
        bgImageHeight.classList.add("bg-image-height");
    } else {
        navbar.classList.remove("sticky");
        bgImageHeight.classList.remove("bg-image-height");
    }

}

function Validate(event) {

    // value of input field
    var email = document.getElementById("email").value;

    // regex for email
    var emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // empty array for validation error message
    var errors = [];

    // function to change the style of the element with the corrosponding id
    function errorStyle(id, symbolA, symbolB) {
        var el = document.getElementById(id);
        var incSymbol = document.getElementById(symbolA);
        var corSymbol = document.getElementById(symbolB);
        el.style.borderColor = "red";
        el.style.backgroundColor = "#ffece6";

        // styles for the incorrect symbol
        incSymbol.style.color = "red";
        incSymbol.style.fontSize = "40px";

        // styles for the correct symbol - this is to ensure it remains grey and 1px when input is incorrect
        corSymbol.style.color = "#f5f5f5";
        corSymbol.style.fontSize = "0px";
    }

    // function to change the style of the element with the corrosponding id
    function passStyle(id, symbolA, symbolB) {
        var el = document.getElementById(id);
        var incSymbol = document.getElementById(symbolA);
        var corSymbol = document.getElementById(symbolB);
        el.style.borderColor = "green";
        el.style.backgroundColor = "#d6f5d6";

        // styles for the incorrect symbol - this is to ensure it remains grey and 1px when input is correct
        incSymbol.style.color = "#f5f5f5";
        incSymbol.style.fontSize = "0px";

        // styles for the correct symbol
        corSymbol.style.color = "green";
        corSymbol.style.fontSize = "40px";
    }

    // function for email validation
    // the variable element, error message text, the document id to style the error, the document id to style the label text/tag, and variable of regex type to test
    function requiredValidation(element, incsymbol, corrsymbol, errorText, error, regex) {
        if (element == "" || element == null || !element || element === [] || !regex.test(element)) {
            errors.push(errorText);
            errorStyle(error, incsymbol, corrsymbol);
        } else {
            passStyle(error, incsymbol, corrsymbol);
        }
    }

    // function declaration
    requiredValidation(email, "incorrect_symbol", "correct_symbol", "Your email is required, please enter a valid email address.", "email", emailRegExp);

    // if any errors, alert them in an alert window and return false.
    // add 2 new lines in the alert window with \n\n
    if (errors.length) {
            event.preventDefault();
            alert(errors.join("\n\n"));
            return false;
        } else {
            alert ("Thank you for completing this form.");
            return true;
    }
}