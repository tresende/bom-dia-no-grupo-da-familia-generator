//bad bad gulp
// fetch('/number')
//     .then(response => response.text())
//     .then(id => {
//         const img = document.createElement("img");
//         img.src = `/images/${id}.png`;
//         const src = document.getElementById("image-container");
//         src.appendChild(img);
//     });
var xhr = new XMLHttpRequest();
xhr.open('GET', '/number');
xhr.responseType = 'json';
xhr.send();
xhr.onload = function () {
    if (xhr.status == 200) {
        var id = xhr.response;
        var img = document.createElement("img");
        img.src = '/images/' + id + '.png';
        var src = document.getElementById("image-container");
        src.appendChild(img);
    }
};