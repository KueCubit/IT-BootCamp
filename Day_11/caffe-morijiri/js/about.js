const descriptions = document.querySelectorAll(".description");

descriptions.forEach((description) => {
    const toggleAction = () => {
        description.classList.toggle("show-text");
    }

    const button = description.querySelector(".description-btn");

    button.addEventListener("click", toggleAction);
})

const container = document.getElementById('container');

const input =document.createElement('input');

input.value = "ITBootCamp"

container.appendChild(input);
