// Booking form
document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let age = document.getElementById("age").value;
    // let images = document.getElementById("images").files;

    //email error
    const emailInput = document.getElementById("email")
    const emailError = document.getElementById("emailError")

    emailInput.addEventListener("input", function () {
        if(emailInput.validity.typeMismatch || emailInput.value.trim() === "") {
            emailError.classList.remove("d-none");
        }
        else {
            emailError.classList.add("d-none");
        }
    });

    //age validation
    if (age === "no") {
        alert("Unfortunately, you must be at least 18 years old to get a tattoo. We cannot process this booking.");
        return;
    }

    //image validation
    let img1 = document.getElementById("image1").files.length;
    let img2 = document.getElementById("image2").files.length;
    let img3 = document.getElementById("image3").files.length;

    if (img1 === 0 ||img2 === 0 || img3 === 0) {
        alert("Please upload all 3 images before submitting.");
        return;
    }


    //success
    alert("Thank you for choosing Hellbound Honey for your next tattoo! We look forward to working with you!");

    //reset
    document.getElementById("bookingForm").reset();
});


// newsletter
function subscribeNewsletter() {
    const email = document.getElementById('newsletter-email').value;

    alert("Thank you for subscribing with" + email + "!");

    document.getElementById('newsletter-email').value = "";

    return false;
}


