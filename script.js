'use strict'

const ratingStateDiv = document.getElementById("rating-state-container");
const ratingButtons = document.querySelectorAll(".rating-btns");
const submitButton = document.getElementById("submit-btn");
const thankYouStateDiv = document.getElementById("thank-you-state-container");
const rating = document.getElementById("rating");

let selectedRating = 0;

ratingButtons.forEach(ratingButton => {
  ratingButton.addEventListener("click", function() {
     // Remove "rating-btn-selected" class from all rating buttons
    ratingButtons.forEach(ratingButton => {
      ratingButton.classList.remove("rating-btn-selected");
    })
    // Add "rating-btn-selected" class to the clicked rating button
    ratingButton.classList.add("rating-btn-selected");

    selectedRating = Number(ratingButton.textContent);
  })
})