function formulario() {
    const ratingButtons = document.querySelectorAll(".number");
    
    ratingButtons.forEach(button => {
        button.addEventListener("click", function() {
            ratingButtons.forEach(btn => {
                btn.classList.remove("selected");
            });
            this.classList.add("selected");
        });
    });
    
    const submitButton = document.querySelector(".button");
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        console.log(submitButton)
        const selectedRatingButton = document.querySelector(".number.selected");
        if (selectedRatingButton) {
            const selectedRating = selectedRatingButton.value;
            console.log(`Se envió la calificación ${selectedRating} al servidor`);
            console.log(selectedRating)
            const congratulationBox = document.getElementById("congratulations");
            congratulationBox.style.display = "flex";

            const formContainer = document.querySelector(".container");
            formContainer.style.display = "none";

            const congratulationmessage = congratulationBox.querySelector(".part1 p");
            congratulationmessage.textContent=`You selected ${selectedRating} out of 5`
        
            ratingButtons.forEach(btn => {
                btn.classList.remove("selected");
            });
        } else {
            console.log("Por favor, selecciona una calificación antes de enviar.");
        }
        
    });
}

document.addEventListener("DOMContentLoaded", function() {
    formulario();
});