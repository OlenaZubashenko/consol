

let rowsOfAllTables = Array.from(document.getElementsByClassName('zA yo'));

let getThirdElementForDelete = rowsOfAllTables.filter(function(_,i){  
    if(i != 0 && i % 3===0){
        return i;
    };
});

let deletedElementsInTable = function(getThirdElementForDelete){
    for(let i=0; i<getThirdElementForDelete.length; i++){
        getThirdElementForDelete[i].style.display='none';
    }
};

deletedElementsInTable(getThirdElementForDelete);


