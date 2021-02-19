"use strict"

const container = document.querySelector(".pixel-art-container");
let targetColor = null;

// Prepare an area for drawing
function createPixel() {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("click", (ev) => {
        let pix = ev.target;
        pix.style.background = targetColor ?? "#555";
    });
    container.appendChild(pixel);
}

for (let i = 0; i < 32; i++)
{
    for (let j = 0; j < 32; j++)
    {
        createPixel();
    }
}

// Add palette of colours 
const paletteColors = document.querySelectorAll(".palette-color");
paletteColors.forEach(addRandomColor);

function addRandomColor(element, insex, array) {
    let color = randColor();
    element.style.setProperty("background", color);
    element.addEventListener("click", (ev) => {
        let tableCell = ev.target;
        targetColor = tableCell.style.background;
    });
}

// Rand a value of colours for pixel palette
function randColor() {
    let letters = '0123456789ABCDEF'.split('');
    let col = '#';
    for (var i = 0; i < 6; i++ ) {
        col += letters[Math.floor(Math.random() * 16)];
    }
    return col;
}

// prepare buttons
const changePaletteBtn = document.getElementById("change-palette");
const printBtn = document.getElementById("print-btn");
const clearBtn = document.getElementById("clear-btn");

changePaletteBtn.addEventListener("click", changePalette);

function changePalette() {
    paletteColors.forEach(addRandomColor);
}

clearBtn.addEventListener("click", clearWorkArea);

function clearWorkArea() {
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach(clear);

    function clear(element) {
        element.style.background = "#555";
    }
}

printBtn.addEventListener("click", () => {
    window.print();
});




