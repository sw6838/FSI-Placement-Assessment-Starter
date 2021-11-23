let yourName = "Shabnam"
let gb = 0;
let cc = 0;
let sugar = 0;



document.getElementById('credit').textContent = 'Created by ${Shabnam}'

document.getElementById('add-gb').addEventListener('click', function(){
gb = gb + 1;
document.querySelector("#qty-gb").textContent = gb;
localStorage.setItem('gb', gb);
document.querySelector("#qty-total").textContent = gb + cc + sugar;
})

    
document.getElementById('minus-gb').addEventListener('click', function(){
gb = gb -1;
document.querySelector("#qty-gb").textContent = gb;
localStorage.setItem('gb', gb);
document.querySelector("#qty-total").textContent = gb - cc - sugar;
})

    document.getElementById('add-cc').addEventListener('click', function(){
    cc = cc + 1;
    document.querySelector("#qty-cc").textContent = cc;
    localStorage.setItem('cc', cc);
    document.querySelector("#qty-total").textContent = gb + cc + sugar;
    })
    
        
    document.getElementById('minus-cc').addEventListener('click', function(){
    cc = cc -1;
    document.querySelector("#qty-cc").textContent = cc;
    localStorage.setItem('cc', cc);
    document.querySelector("#qty-total").textContent = gb - cc - sugar;
    })




        document.getElementById('add-sugar').addEventListener('click', function(){
        sugar = sugar + 1;
        document.querySelector("#qty-sugar").textContent = sugar;
        localStorage.setItem('sugar', sugar);
        document.querySelector("#qty-total").textContent = gb + cc + sugar;
        })
        
            
        document.getElementById('minus-sugar').addEventListener('click', function(){
        sugar = sugar -1;
        document.querySelector("#qty-sugar").textContent = gb;
        localStorage.setItem('sugar', sugar);
        document.querySelector("#qty-total").textContent = gb - cc - sugar;
        })