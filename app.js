function calculate(num, option){
    if ( option === "Farhenheit"){
        return num = (num-32) * 5/9 
        }
    else if ( option === "Celcius" ){
        return num = (num*9/5) + 32 
    }
}
document.getElementById("convert").addEventListener("click" , ()=>{
    var numb = document.getElementById("num").value
    var opt = document.getElementById("option").value
    document.getElementById("result").innerText = calculate(numb,opt).toFixed(2)
})