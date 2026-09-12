function generateQR() {
    const input = document.getElementById("textInput").value;
    const qrContainer = document.getElementById("qrcode");
    const downloadBtn = document.getElementById("downloadBtn");

    if (input.trim() === "") {
        alert("Please enter some text or a URL.");
        return;
    }

    qrContainer.innerHTML = "";
    qrContainer.style.display = "block";
    downloadBtn.style.display = "block";

    new QRCode(qrContainer, {
        text: input,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

function downloadQR() {
    const qrCanvas = document.querySelector("#qrcode canvas");

    if (!qrCanvas) return;

    const link = document.createElement("a");
    link.download = "quickqr.png";
    link.href = qrCanvas.toDataURL("image/png");
    link.click();
}