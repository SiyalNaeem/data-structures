//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

let array = [2,3,4,5];

function recurringCharacter(arr: any[]){
    let obj: any = {};

    for(let i = 0; i < arr.length; i++){
        
        let idx = 0;
        idx = Object.keys(obj).findIndex(b => b == arr[i]);
        if(idx > -1){
            return Object.keys(obj)[idx];
        }
    
        obj[arr[i]] = true;

    }
}

function recurringCharacter2(arr: any[]){
    let obj: any = {};

    for(let i = 0; i < arr.length; i++){
        
        if(obj[arr[i]] != undefined){
            return arr[i];
        }
    
        obj[arr[i]] = arr[i];

    }
}

console.log(recurringCharacter2(array))