const bodyDOM = document.querySelector("body");
const btnDOM = document.querySelector(".generate");
const hexDOM = document.querySelector(".hex");

const generateHexColor = () => {
    const randomColor = Math.random().toString(16).slice(2, 8)

    hexDOM.textContent = `#${randomColor}`;
    bodyDOM.style.backgroundColor = `#${randomColor}`
    console.log(randomColor);

}


btnDOM.addEventListener("click", generateHexColor)
body.addEventListener("mousewheel", generateHexColor)