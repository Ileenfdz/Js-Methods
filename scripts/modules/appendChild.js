//Makes it into the html, being a child element
export function appendChild(){
    //Parent element
    const myList = document.getElementById("myList");
    //Create the first child
    let newListItem = document.createElement('li');
    newListItem.textContent = 'Apple';
    //ApendChild to put it in the html
    myList.appendChild(newListItem);
}