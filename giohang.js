let count = 1;
                const value = document.querySelector("#value");
                const btnDecrease = document.querySelector("#btn-decrease");
                const btnIncrease = document.querySelector("#btn-increase");
            
                btnDecrease.addEventListener("click", function() {
                    count--;
                    if (count < 1 )
                    {
                        value.textContent = 1;
                        count=1;
                    }
                    else
                        value.textContent = count;
                });
            
                btnIncrease.addEventListener("click", function() {
                    count++;
                    value.textContent = count;
                });
                