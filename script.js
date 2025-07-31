function allowDrop(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("src", ev.target.src); }

function drop(ev) {
    ev.preventDefault();
    let src = ev.dataTransfer.getData("src");
    let img = document.createElement("img");
    img.src = src;
    img.className = "item";
    img.style.top = (ev.offsetY - 60) + "px";
    img.style.left = (ev.offsetX - 60) + "px";
    document.querySelector(".doll-area").appendChild(img);
}

function resetLook() {
    document.querySelectorAll(".item").forEach(e => e.remove());
}

function saveLook() {
    html2canvas(document.getElementById("capture")).then(canvas => {
        let link = document.createElement("a");
        link.download = "meu-look.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}
