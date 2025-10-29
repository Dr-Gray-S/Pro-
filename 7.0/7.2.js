function getNumber (){
    const elements = [0,1,2,3,'g','r',4,'d',5,'k','l',6,7];
    alert (elements);
    const onlyNumbers = elements.filter(v => typeof v === 'number' && Number.isFinite(v));
    alert (onlyNumbers);
    let sum = 0;
    for (i=0; i < onlyNumbers.length; i++){
        sum += onlyNumbers[i];
    }
    const average = sum / onlyNumbers.length;
    alert(`Среднее арифметическое ${average}`);
}

getNumber();