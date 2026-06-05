
// FAQ

const faqButtons =
document.querySelectorAll(".faq-btn");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer =
        button.nextElementSibling;

        if(answer.style.display === "block"){
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });

});

// Waitlist Form

const form =
document.getElementById("waitlistForm");

const message =
document.getElementById("message");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    message.textContent =
    "Thanks for joining the waitlist!";

    form.reset();

});
