const ratingContainer = document.querySelector(".card__numbers");
const rateSubmit = document.querySelector(".main-content");
const thanksCard = document.querySelector(".thanks");
const thanksSelection = document.querySelector(".thanks__selection");

showRating();
let selectedRate;

function showRating() {
  for (let i = 1; i <= 5; i++) {
    const spanRating = document.createElement("span");
    spanRating.classList.add("card__number");
    spanRating.classList.add("circle");

    spanRating.addEventListener("click", toggleActiveClass);
    spanRating.innerText = i;

    ratingContainer.appendChild(spanRating);
  }
}

function toggleActiveClass(e) {
    const respuestaSeleccionada = e.target;
    let rates = Array.from(ratingContainer.childNodes)
    
    rates.shift();
    rates.forEach(el => {
        el.classList.remove("active");
    });
    
  respuestaSeleccionada.classList.toggle("active");

  selectedRate = respuestaSeleccionada.innerText;
  console.log(selectedRate);
}

function submitRate() {
  if (selectedRate) {
    rateSubmit.classList.toggle("d-none");
    thanksCard.classList.toggle("d-none");
    thanksSelection.innerHTML = `You selected ${selectedRate} out of 5`;
  } else { 
    alert("Please!! Select a value");
  }
}
