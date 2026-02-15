function calculateTax() {
    let income = parseFloat(document.getElementById("annualIncome").value);
    let deduction = parseFloat(document.getElementById("deductions").value);

    if (!income) {
        alert("Please enter valid income");
        return;
    }

    let taxableIncome = income - (deduction || 0);
    let tax = 0;

    // Simple demo tax slab logic
    if (taxableIncome <= 250000) {
        tax = 0;
    } else if (taxableIncome <= 500000) {
        tax = taxableIncome * 0.05;
    } else if (taxableIncome <= 1000000) {
        tax = taxableIncome * 0.1;
    } else {
        tax = taxableIncome * 0.2;
    }

    document.getElementById("taxResult").innerText =
        "Estimated Tax Payable: ₹ " + tax.toFixed(2);
}
