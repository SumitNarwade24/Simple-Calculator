let input = document.querySelector('#dis');
let decimal=document.querySelector('input[value="."]')
let operator=['+','-','*','/'];
function deleteLast(){
    input.value=input.value.slice(0,-1);
    
}
//Mistakes 
//Onclick and Remove last element is both fun but onclick adding operator before checking element.

// function byDefaults(){
//     if(input.value='.'){
//         input.value='0.';
//     }
// }
decimal.addEventListener('click',() =>{
    if(input.value===''){
        input.value+='0.';
    }else{
        input.value+='.';
    }
});

function AddToDisplay(value){
    // let lastEle=input.value.slice(-1);
    // let ele=document.querySelector('.top-row');
    // if(operator.includes(lastEle) && operator.includes(value)){
    //     return;
    // }
    // input.value+=value;
    let lastChar = input.value.slice(-1); // Get last entered character

    // Prevent multiple consecutive operators
    if (operator.includes(lastChar) && operator.includes(value)) {//operators instead of operator
        return;
    }

    input.value += value;
   
}
// document.querySelector('.top-row').forEach(element => {
//     let lastelement=input.value.slice(0,-1);
//     if(element == lastelement){
//         input.value=input.value.slice(0,-1);
//         input.value+=element;
//     }
// });
