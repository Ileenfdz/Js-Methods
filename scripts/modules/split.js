//Splits a str without the thing it says, into a new array 
//From str to array
export function splitStr(){
    let str = "Hola, buenos días";
    //It splits the str into a new array cutting all a's (in this example) "Hol", "buenos dí", "s"
    console.log(str.split("a"));
    //It splits the str into a new array cutting all " " (in this example) "Hola," "buenos" "días"
    console.log(str.split(" "));
}