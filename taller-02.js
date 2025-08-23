function findMax(list){
    let max = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}

function includes(list, num){
    for (let i = 0; i < list.length; i++) {
        if (list[i] === num) {
            return true;
        }
    }
    return false;
}


function sum(list){
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i];
    }
    return total;
}

function missingNumbers(list){
    let min = list[0];
    let max = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i];
        }
        if (list[i] > max) {
            max = list[i];
        }
    }
    let missing = [];
    for (let i = min; i <= max; i++) {
        let found = false;
        for (let j = 0; j < list.length; j++) {
            if (list[j] === i) {
                found = true;
                break;
            }
        }
        if (!found) {
            missing.push(i);
        }
    }
    return missing;
}

// Prueba
console.log(findMax([3, 17, -1, 4, -19])); // 17
console.log(includes([3, 17, -1, 4, -19], 2)); // false
console.log(includes([3, 17, -1, 4, -19], 4)); // true
console.log(sum([3, 17, -1, 4, -19])); // 4
console.log(missingNumbers([7, 2, 4, 6, 3, 9])); // [5, 8]