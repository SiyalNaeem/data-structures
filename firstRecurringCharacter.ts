//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input: number[]) {
    let time1 = performance.now();
    for(let i=0; i < input.length; i++){
        for(let j=i+1; j < input.length; j++){
            if(input[i] == input[j]){
                return input[i];
            }
        }
    }

    let time2 = performance.now();
    console.log(time2 - time1);
}

function firstRecurringCharacter2(input: number[]) {
    const obj: any = {};
    let time1 = performance.now();
    for(let i=0; i < input.length; i++){
        if(input[i] in obj){
            return input[i];
        }
        obj[input[i]] = true;
    }
    let time2 = performance.now();
    console.log(time2 - time1);
}


console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]))
console.log(firstRecurringCharacter2([2,5,5,2,3,5,1,2,4]))
// firstRecurringCharacter2([2,5,5,2,3,5,1,2,4])
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2