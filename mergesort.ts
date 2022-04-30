const a = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array: number[]): number[] {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
    const result = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}

console.log(mergeSort(a));