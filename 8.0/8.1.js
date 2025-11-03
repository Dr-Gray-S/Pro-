
function creatSum(){
    let a = 0;
    return function (b){
        a = a + b;
        return a;
    };
}

const sum = creatSum();

