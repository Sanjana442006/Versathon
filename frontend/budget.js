function calculateBudget() {
    let budget = parseFloat(document.getElementById("budgetamt").value);
    let spending = parseFloat(document.getElementById("current").value);

    if (!budget || budget <= 0 || !spending || spending < 0) {
        alert("Please enter valid values");
        return;
    }

    let percentage = (spending / budget) * 100;
    let resultText = "";

    if (spending > budget) {
        resultText = "You have exceeded your budget!";
    } else {
        resultText = "You are within budget.";
    }

    document.getElementById("budgetres").innerText = resultText;

    let progress = document.getElementById("budgetprog");
    progress.style.width = Math.min(percentage, 100) + "%";
    progress.style.backgroundColor = spending > budget ? "red" : "green";
}

function calculategoal() {
    let goal = parseFloat(document.getElementById("goalamt").value);
    let saved = parseFloat(document.getElementById("savedamt").value);

    if (!goal || goal <= 0 || !saved || saved < 0) {
        alert("Please enter valid values");
        return;
    }

    let percentage = (saved / goal) * 100;

    document.getElementById("goalres").innerText =
        "You have achieved " + percentage.toFixed(2) + "% of your goal.";

    let progress = document.getElementById("goalprog");
    progress.style.width = Math.min(percentage, 100) + "%";
    progress.style.backgroundColor = "#3498db";
}
