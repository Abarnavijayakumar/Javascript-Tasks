let input = document.querySelector('input')

function addValue(elementValue){
input.value += elementValue
}
function clearVal(){
    input.value = ""
}
function deleteCharacter(){
    input.value = input.value.slice(0,input.value.length-1) // why slice bcz its slicing one by one value so..
}
function evaluateval(){
    input.value = eval (input.value)
}