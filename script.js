var num1 = 0;
var num2 = 1;
var store;
var x = 0;

function fibonacci(num) {
    
        for (i = 0; i < num; i++) {
            store = num1 + num2;
            
            num1 = num2;
            num2 = store;


            console.log(store)
            
        }
    return num2;
}

document.write("Fibonacci(20): " + fibonacci(20) + "<br>");

