//Gives the first num that does the thing that we are looking for
export function find(){
    const array = [1,4,2,5,3,8,9,25,83];
    let foundNum = array.find(num => num > 5);
    console.log(foundNum);
}