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

function ejecutar(){
    return 'Taller 2 ejecutado correctamente';
}

module.exports = { findMax, includes, sum, missingNumbers, ejecutar };
