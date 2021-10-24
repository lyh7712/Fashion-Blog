function printString(callbackParam) {
    console.log(callbackParam);
}

// callBack function
function callHello(callback) {
    let value;

    console.log("Wait 3 sec...");
    console.log("Waiting...");   

    setTimeout(function() {
        value = "hello";
        console.log("done");
        callback(value);
    }, 3000);
    
}

callHello(printString);
