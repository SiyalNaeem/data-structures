const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array: number[]) {

    for(let i=1; i<array.length; i++){
        let currentItem = array[i];
        let j = i-1;
        while(j <= 0 && array[j] > currentItem){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = currentItem;
    }

}

insertionSort(array);
console.log(array);