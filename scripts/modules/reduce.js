//This method takes an array at firts and then returns a string that unify it
//From array[number(only for the +)/str] to number
export function reduce(){
    const array = [1, 2, 3]
    //The reducer makes the difference in this method, it determines what it does
    //In this first case we see a sum
    const reducerSum = (prevValue, nextValue) =>prevValue + nextValue;
    //And in this one we see a rest
    const reducerRest = (prevValue, nextValue) =>prevValue - nextValue;

    console.log(array.reduce(reducerSum));
    console.log(array.reduce(reducerRest));

    //for a more cleaner version
    console.log(array.reduce((a, b) => a + b));
    console.log(array.reduce((a, b) => a - b));
}