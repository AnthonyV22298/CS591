/*
Anthony Vargas (anthonyv@bu.edu)
U58026559
CS591 Assignment 2
 */

//Problem 1
function* fibs (x=0){
    let [val1, val2] = [x,1];
    while(true){
        let res = val1+val2;
        val1 = val2;
        val2 = res;
        yield res;

    }
}

//First generator
myFibs = fibs();
let fibList = [];
let gen1 = myFibs.next();
while(gen1.value < 1000){
    fibList.push(gen1.value);
    gen1 = myFibs.next();
}

//Second generator
function* evenFibs(list){
    yield* list
}

evens = evenFibs(fibList);
let gen2 = evens.next();
while(gen2.done === false){
    if (gen2.value % 2 === 0){console.log(gen2.value)}
    gen2 = evens.next();
}





//Problem 2

function* p2(str){
    yield* str.split(" ");
}

const gen = p2("All I know is something like a bird within her sang");
let flag = gen.next();

while(flag.done === false){
    console.log(flag.value);
    flag = gen.next();
}

//Problem 3

const cube = n => console.log(n**3);

[1,2,3,4,5,6,7].map(cube);