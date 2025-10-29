
const array = [1, 3, 4, 6, 2, 5, 7];
alert(array)
function removeElement (array, item) {
    const i = array.indexOf(item);
    if(i !== -1) array.splice(i, 1);
}

removeElement(array,3)
alert (array)

