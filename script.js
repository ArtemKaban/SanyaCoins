var san = document.getElementById('san');
var p = document.getElementById('s');
var counter = 0;
var p2 = document.getElementById('p2');


san.addEventListener("click",function()
{
    counter++;
    p.textContent = counter;
    console.log(counter);
    if(counter == 100){
        san.src = "img/krutoisan.png";
        p2.textContent = 'Крутой Саня';
    }
    if(counter == 250){
        san.src = "img/adultsan.png";
        p2.textContent = 'подросток саня';
    }
    if(counter == 500){
        san.src = "img/Shava.png";
        p2.textContent = 'саня с шавухой';
    }
    if(counter == 750){
        san.src = "img/pila.png";
        p2.textContent = 'саня гробовщик';
    }
    if(counter == 1000){
        san.src = "img/viduha.png";
        p2.textContent = 'саня с видюхой';
    }
});

