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
        
        const selectedRatingButton = document.querySelector(".number.selected");
        if (selectedRatingButton) {
            const selectedRating = selectedRatingButton.value;
            console.log(`Se envió la calificación ${selectedRating} al servidor`);
            ratingButtons.forEach(btn => {
                btn.classList.remove("selected");
            });
        } else {
            console.log("Por favor, selecciona una calificación antes de enviar.");
        }
    });
}

