//It lets you replace something/s in a string, making a new one
//Form str to str
export function replace(){
    let str = "Hello World!, how's going in World";
    let array = ['Hello', 'World', 'World'];
    
    console.log(str.replace('World', 'Javascipt'));
    //The first one is what you want to change and the second is what you want

    console.log(array.map( i => i.replace('World', 'Javascipt')))
    //To change more than one, and also, an array, we can use it with the method map like in this example
}