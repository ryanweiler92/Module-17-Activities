// TODO: Complete the 'counter' function below.
function counter() {
    let count = 0;
    return {
        function(){
            return count++
        }
    }
}

const increment = counter()

increment();

// Displays an interactive list of the properties of the specified JavaScript object
console.dir(counter);

module.exports = counter;
