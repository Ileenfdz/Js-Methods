//Gives all the nums that do the thing that we are looking for
export function filter(){
    const array = [1,4,2,5,3,8,9,25,83];
    let filteredArray = array.filter(item => item > 10);
    console.log(filteredArray);
}