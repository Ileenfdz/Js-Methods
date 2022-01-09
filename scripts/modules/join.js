//This method will change an array into a str, with the changes you want (with or without spaces for example)
//From array to str
export function join(){
    let array = ['Hello', 'World', '!'];
    let whithoutSpace = array.join('');//This will join the array into a str, without spaces in between
    let withSpace = array.join(' ');//This will join the array into a str, with spaces in between

    console.log(whithoutSpace);
    console.log(withSpace);
}