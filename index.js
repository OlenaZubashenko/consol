
    <table>
    <tr class="zA yo" id="one">block</tr>
    <tr class="zA yo">2</tr>
    <tr class="zA yo">3</tr>
    <tr class="zA yo" id="res">4</tr>
    <tr class="zA yo">5</tr>
    <tr class="zA yo">6</tr>
    <tr class="zA yo">7</tr>
    <tr class="zA yo">8</tr>
</table>


let arr = Array.from(document.getElementsByClassName('zA yo'));

console.log(arr);


let result = arr.filter(function(_,i){
  
if(i != 0 && i % 3===0){
    return i;
};

});

console.log(result);

let none = function(){
  return result.style.display='none';
          }
          none();






