//This method goes through an array and makes another one with it's changes
//From array to array
export function map(){
    let array = [1, 2, 3];
    const dogs = [
        { name: 'Luna', race: 'Labrador', color: 'Blonde' },
        { name: 'Edgar', race: 'Husky', color: 'Grey and white' },
        { name: 'Lena', race: 'Terrier', color: 'Black' },
        { name: 'Sybil', race: 'Shiba', color: 'White' },
    ];

    console.log(array.map( multiply => multiply * 3 ));//This will multiply every number in the array and give [3, 6, 9]
    console.log(dogs.map( getName => getName.name ));//Will give all the dogs names ['Luna', 'Edgar', 'Lena', 'Sybil']
}