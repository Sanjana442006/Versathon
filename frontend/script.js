let income=0;
let expense=0;

const context = document.getElementById('chart').getContext('2d');
const chart=new Chart( context, {
    type: 'bar',
    data: {
        labels: ['income','expense'],
        datasets: [{
            label: 'Financial overview', 
            data:[income,expense] ,
            backgroundColor:['#2ecc71','#e74c3c']
        }]
    }

});

function addTrans()
{
    let type=document.getElementById("type").value;
    let amt=parseFloat(document.getElementById('amt').value);
    let category = document.getElementById("catg").value;

if(type === "expense" && category === ""){
    alert("Please select a category");
    return;
}

    if(!amt || amt<=0){
        alert("Enter valid amount");
    return ;
    }
    if(type === "income"){
       income+=amt;
    }  
    else
    {
        expense+=amt;
    }
    updateDashboard();

}
function updateDashboard()
{
   

    let bal=income-expense;
    document.getElementById('income').innerText="₹"+income;
    document.getElementById('expense').innerText="₹"+expense;
    document.getElementById('balance').innerText="₹"+bal;
    
    chart.data.datasets[0].data=[income,expense];
    chart.update();
}