const track = document.querySelector(".middle-inner-box");
const boxes = document.querySelectorAll(".actual-review-box");
const leftBtn = document.querySelector(".scroller-left");
const rightBtn = document.querySelector(".scroller-right");
const right_arrow = document.getElementById("right-arrow")
const left_arrow = document.getElementById("left-arrow")
let currentIndex = 0;

function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateArrows();
}

function updateArrows() {
    if (currentIndex === 0) {
        left_arrow.style.color = "grey";
    } else {
        left_arrow.style.color = "black";
    }

    if (currentIndex === boxes.length - 1 ) {
        right_arrow.style.color = "grey";
    } else {
        right_arrow.style.color = "black";
    }
}

right_arrow.addEventListener("click", () => {
    if (currentIndex < boxes.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

left_arrow.addEventListener("click", () => {
    if (currentIndex > 0) {
        
        currentIndex--;
        updateSlider();
    }
});

updateArrows();