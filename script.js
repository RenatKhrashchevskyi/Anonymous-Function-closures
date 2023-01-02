window.onload = function () {
    let button = document.getElementById('bake');
    button.onclick = function() {
        console.log('Time to bake the cookies.');
        cookies.bake(2500)
    };

};


let cookies = {
    instruction: 'Preheat oven to 350...',
    bake: function(time) {
        console.log('Baking the cookies.');
        setTimeout(done, time);
    }
};



function done() {
    alert('Cookies are ready, take them out to cool.');
    console.log('Cooling the cookies.');

setTimeout (function() { alert('Cookies are cool, time to eat!');
 }, 1000);

}


// administer(patioent, function(dosage) {
//     if (dosage > 0) {
//         inject(dosage);
//     }
// }, time);


let secret = '007';

function getSecret() {
    let secret = '008';
    return getSecret;
}

console.log(getSecret())



let justAVar = 'I`m a global variable';

function whereAreYou() {
    let justAVar = 'I`m a local variable';
         function inner() {
            return justAVar;
         }
         return inner();
}

console.log(whereAreYou());



function makeCounter() {
let count = 0;

function counter() {
    count++;
    return count;
}
return counter;
}
let tt = makeCounter()
console.log(tt())
console.log(tt())
console.log(tt())
console.log(tt())

