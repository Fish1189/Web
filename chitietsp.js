let count = 0;
const value = document.querySelector("#value");
const btnDecrease = document.querySelector("#btn-decrease");
const btnIncrease = document.querySelector("#btn-increase");
            
btnDecrease.addEventListener("click", function() 
{
    count--;
    if (count < 0 )
    {
        value.textContent = 0;
        count=0;
    }
    else
        value.textContent = count;
});
            
    btnIncrease.addEventListener("click", function() {
    count++;
    value.textContent = count;
});