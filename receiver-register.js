const form = document.getElementById("receiverForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const receiverInfo = {
        name: document.getElementById("receiverName").value,
        phone: document.getElementById("receiverPhone").value,
        address: document.getElementById("receiverAddress").value,
        ngo: document.getElementById("ngoName").value
    };

    sessionStorage.setItem("receiver", JSON.stringify(receiverInfo));

    // Redirect to donation listing
    window.location.href = "receiver.html";
});
