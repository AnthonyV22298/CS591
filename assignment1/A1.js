/*
Assignment 1 CS591
Anthony Vargas
anthonyv@bu.edu
U58026559
 */

//Problem one

const p1 = str => ((str.split('')).sort()).join('');

console.log(`supercalifragilisticexpialidocious: ${p1("supercalifragilisticexpialidocious")}`);



//Problem 2

const evaluate = str => {
    const [left, operator, right] = str.split('');

    switch (operator) {
        case '+':
            let plus = (left, right) => left + right;
            return plus(parseInt(left), parseInt(right));
        case '-':
            let minus = (left, right) => left - right;
            return minus(left, right);
        case '*':
            let multiply = (left, right) => left * right;
            return multiply(left, right);
        case '/':
            let divide = (left, right) => left / right;
            return divide(left, right);

    }
};



const exp1 = '4+2';
const exp2 = '5*7';
const exp3 = '6-1';
const exp4 = '9/2';

console.log(`${exp1} = ${evaluate(exp1)}`);
console.log(`${exp2} = ${evaluate(exp2)}`);
console.log(`${exp3} = ${evaluate(exp3)}`);
console.log(`${exp4} = ${evaluate(exp4)}`);


//Problem 3

const p3 = (str, cb) => cb(str);

splitAtC = p3(`supercalifragilisticexpialidocious`, str => {
    let lst = [];
    let tempStr = '';

    for (let x = 0; x < str.length; x++){
        if(str.charAt(x) === 'c'){
            lst.push(tempStr);
            tempStr = 'c';
        }
        else{
            tempStr = tempStr + str.charAt(x);
        }
    }
    lst.push(tempStr);
    return lst;
});

console.log(splitAtC);

replaceA = p3(`supercalifragilisticexpialidocious`, str => {
    let newWord = `supercalifragilisticexpialidocious`;
    let count = 0;
    for (let x = 0; x < str.length; x++){
        if(str.charAt(x) === 'a'){
            newWord = newWord.replace('a','A');
            count++;
        }
    }

    return {
        originalString : str,
        modifiedString : newWord,
        numberReplaced : count,
        length : str.length
    }
});

console.log(replaceA);

