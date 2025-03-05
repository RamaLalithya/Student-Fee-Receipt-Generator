function generateReceipt() {
    document.getElementById("r_name").textContent = document.getElementById("name").value;
    document.getElementById("r_course").textContent = document.getElementById("course").value;
    document.getElementById("r_amount").textContent = document.getElementById("amount").value;
    document.getElementById("r_payment").textContent = document.getElementById("payment").value;
    document.getElementById("r_date").textContent = document.getElementById("date").value;
    document.getElementById("r_month").textContent = document.getElementById("month").value;

    document.getElementById("receipt").classList.remove("hidden");
}

function printReceipt() {
    window.print();
}
