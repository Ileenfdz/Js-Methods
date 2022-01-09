//Gets the index(position) of the thing you´re looking for
export function indexOf(){
    let array = ['a', 'b', 'c'];
    let str = 'The dog was tired';
    let newArray = ['a', 'b', 'c', 'b'];

    console.log(array.indexOf('c'));// This will give 2, the position of 'c' in the array
    console.log(str.indexOf('tired'));//This will give 12 because is the first pos of what we're looking for
    console.log(newArray.indexOf('b'));//This will give 1, just gets the first one
}