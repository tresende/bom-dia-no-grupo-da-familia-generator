fetch('/number')
    .then(response => response.text())
    .then(id => {
        const img = document.createElement("img");
        img.src = `/images/${id}.png`;
        const src = document.getElementById("image-container");
        src.appendChild(img);
    });
