function postreview() {
    const parent = document.getElementById("parent");
    const nameInput = document.getElementById("review-input-name");
    const reviewInput = document.getElementById("review-input-review");

    const name = nameInput.value.trim();
    const review = reviewInput.value.trim();

    if (name === "" || review === "") {
        alert("Please enter both name and review");
        return;
    }

    const child = document.createElement("div");
    child.classList.add("review-card");

    child.innerHTML = `
        <h3>${name}</h3>
        <p>${review}</p>
    `;

    parent.prepend(child);

    nameInput.value = "";
    reviewInput.value = "";

    parent.scrollTo({
        left: 0,
        behavior: "smooth"
    });
}
function scrollReviews(direction) {
    const parent = document.getElementById("parent");
    const amount = 320;

    if (direction === "left") {
        parent.scrollBy({ left: -amount, behavior: "smooth" });
    } else {
        parent.scrollBy({ left: amount, behavior: "smooth" });
    }
}