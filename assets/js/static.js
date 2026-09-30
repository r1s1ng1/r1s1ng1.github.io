const canvas = document.getElementById("static");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = Math.ceil(window.innerWidth / 4);
    canvas.height = Math.ceil(window.innerHeight / 4);
}

function noise() {
    const image = ctx.createImageData(canvas.width, canvas.height);
    const data = image.data;

    for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;

        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 255;
    }

    ctx.putImageData(image, 0, 0);
}

resize();

window.addEventListener("resize", resize);

setInterval(noise, 50);