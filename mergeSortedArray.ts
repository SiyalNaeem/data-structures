
function mergeSortedArray(arr1: number[], arr2: number[]){
    if(arr1.length == 0){
        return arr2;
    }

    if(arr2.length == 0){
        return arr1;
    }

    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i: number = 1;
    let j: number = 1;
    let result: number[] = [];
    while(array1Item || array2Item){
        if(!array2Item || array1Item < array2Item){
            result.push(array1Item);
            array1Item = arr1[i];
            i++;
        }else{
            result.push(array2Item);
            array2Item = arr2[j];
            j++;
        }
    }
    return result;

}


let res = mergeSortedArray([1,2,3,20,40], [6,7,8,15,18]);
console.log(res);
