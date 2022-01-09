//It's a for method
//From array to whatev
export function forEach(){
    const array1 = ['a', 'b', 'c'];

    array1.forEach(element => console.log(element));
    [2, 5, 9].forEach(logArrayElements);
}

function logArrayElements(element, index) {
    console.log("a[" + index + "] = " + element);
}