function copyFee() {
    const total = document.getElementById('regTotalDisplay').innerText;
    const text = "Total Fee: ₹" + total;
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
}

document.getElementById("regTotalDisplay").innerText = 1000;
