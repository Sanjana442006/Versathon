


function calculateBudget() {
    let budget = parseFloat(document.getElementById("budgetAmount").value);
    let spending = parseFloat(document.getElementById("currentSpending").value);

    if (!budget || !spending) {
        alert("Please enter valid values");
        return;}
    

    let percentage = (spending / budget) * 100;
    let resultText = "";

    if (spending > budget) {
        resultText = "You have exceeded your budget!";
    } else {
        resultText = "You are within budget.";}
    

    document.getElementById("budgetResult").innerText = resultText;

    let progress = document.getElementById("budgetProgress");
    progress.style.width = percentage + "%";
    progress.style.backgroundColor = spending > budget ? "red" : "green";




}

function calculateGoal() {
    let goal = parseFloat(document.getElementById("goalAmount").value);
    let saved = parseFloat(document.getElementById("savedAmount").value);

    if (!goal || !saved) {
        alert("Please enter valid values");
        return;   }
    

    let percentage = (saved / goal) * 100;
    document.getElementById("goalResult").innerText =
        "You have achieved " + percentage.toFixed(2) + "% of your goal.";

    let progress = document.getElementById("goalProgress");
    progress.style.width = percentage + "%";
    progress.style.backgroundColor = "#3498db";
}
