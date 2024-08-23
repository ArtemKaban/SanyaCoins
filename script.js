var san = document.getElementById('san');
var p = document.getElementById('s');
var counter = 0;
san.addEventListener("click",function()
{
    counter++;
    p.textContent = counter;
});