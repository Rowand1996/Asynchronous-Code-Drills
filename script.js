
// function sayMessage(message){
//     console.log(message);
// }

// sayMessage("Hello World!");

// setTimeout(function(){ sayMessage("Hello Buddy"); }, 3000);

// function getWords(){
//     console.log("Whats");
//     setTimeout(function(){ console.log("Up Buddy"); }, 3000);
//     setTimeout(function(){ sayMessage(" up dude"); }, 2000);
//     setTimeout(function(){ sayMessage("up man"); }, 1000);
// }

// getWords();

function countDown(num, callback) {
    console.log("countDown:" + num);
    if (num === 1) {
        callback();
    }
    else {
        setTimeout(function () { countDown(num - 1, callback); }, 1000);
    }
}

function done() {
    console.log("Jobs Done!");
}

countDown(5, done);

//PROMISES!

let lunchTime = true;

const orderMeSomeFood = () =>  {
    return new Promise((resolve, reject) => {
        if (lunchTime) {
            let myLunch = {
                lunch: "your favorite lunch",
                drink: "your favorite beverage"
            }
            resolve(myLunch);
        }
        else {
            let error = new Error("Its not lunchtime!");
            reject(error);
        }
    });
}

orderMeSomeFood()
    .then(response => console.log(response))
    .catch(error => console.log(error));