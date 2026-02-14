let income=0;
let exp=0;

const context = document.grtelementById('chart').getContext('2d');
const chart=new chart( context, {
    type: 'bar',
    data: {
        labels: ['income','expense'],
        datasets: [{
            label: 'Financial overview', 
            data:['income','expense'] ,
            backgroundcolor:['#2ecc71','#e74c3c']
        }]
    }

});

function addTrans()
{
    let type=document.getElementById("type").value;
    let amt=parseFloat(document.getElementById('amt').value);

    if(!amt || amt<=0){
        alert("Enter valid amount");
    return ;
    }
    if(type === amt){
       income+=amt;
    }  
    else
    {
        expense+=amount;
    }
    updateDashboard();

}
function updateDashboard()
{
    let bal=income-expense;
    document.getElementById('income').innerText="₹"+income;
    document.getElementById('expense').innerText="₹"+expense;
    document.getElementById('balance').innerText="₹"+balance;
    
    chart.data.datasets[0].data=[income,expense];
    chart.update();
}