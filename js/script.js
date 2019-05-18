;(function () {

//     var arr = [];
//     for( var f = 0;; f++) {
//          arr[f] = prompt('Enter the number: ');
//         if (arr[f] === null) {
//             alert('Cancel');
//         } else if (isNaN(arr[f]) || arr[f] === '') {
//             alert('Enter the rigth number: ');
//             arr[f] = prompt('Enter the number: ');
//         } 
       
    
// }
//     var number = arr; 
//             for (var i = 0; i < number.length; i++) {
//             number[i] *= number[i];
//         }
//          document.write(number);



function map(fn, array) {
    var numberLength = array.length;
    var numberArr = [];
    for (var i = 0; i < numberlength; i++) {
        numberArr[i] = fn(array[i]);
    }
    return numberArr;
}


        
})();