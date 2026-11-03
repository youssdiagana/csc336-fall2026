
function sayHello() {
    console.log("Hello");
}

let renamedSayHello = sayHello;
//renamedSayHello();


function calledRepeatTooManyTimes(howManyTimes) {
    console.log("Called repeat too many times:" + howManyTimes);
}

let repeatedCount = 0;
function repeat(fn, count, error_fn) {
    for (let i = 0; i < count; i++){
        if (repeatedCount >= 8) {
            error_fn(repeatedCount);
            return;
        }
        fn();
        repeatedCount++;
    }
}
repeat(renamedSayHello, 3, calledRepeatTooManyTimes);
repeat(renamedSayHello, 3, calledRepeatTooManyTimes);
repeat(renamedSayHello, 3, calledRepeatTooManyTimes);