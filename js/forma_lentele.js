const firstName = document.querySelector('#firstName');
const secondName = document.querySelector('#secondName');
const birthday = document.querySelector('#birthday');
const button = document.querySelector('.button');
const table = document.querySelector('table');

const tableBody = document.querySelector('tbody');
const errorVardas = document.querySelector('.errorVardas');
const errorPavarde = document.querySelector('.errorPavarde');
const errorGimimoData = document.querySelector('.errorGimimoData');

let counter = 0;

button.addEventListener('click', getResult);//gaudau paspaudima ir einam i funkcija

function getResult(){
    errorVardas.innerHTML = ''; //cia kai uzpildo ir senas issitrina uzrasas
    errorPavarde.innerHTML = '';

    if(firstName.value == '' && secondName.value == '' && birthday.value == ''){
        alert('kur duomenys?');
        return false;
    }
    if(firstName.value == ''){
        errorVardas.innerHTML = 'trūksta vardo';
        return false;
    }
    if(secondName.value == ''){
        errorPavarde.innerHTML = 'trūksta pavardės';
        return false;
    }
    if(birthday.value == ''){
        alert('kur gimimo data');
        return false;
    }
    showTable();

    counter ++;
   // console.log('funkcija veikia');
    const vardas = firstName.value;
    const pavarde = secondName.value;
    const gimimoData = birthday.value;
    console.log(vardas, pavarde);

    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML = counter;
    cell2.innerHTML = vardas;
    cell3.innerHTML = pavarde;
    cell4.innerHTML = calculateAge(birthday.value) + " m. ";
    cell5.insertAdjacentHTML(
        'afterbegin',
        `<div class='del' onclick="removeline(this)">del</div`
    );

    firstName.value = ''; //naikina uzpildytus laukelius
    secondName.value = '';
    birthday.value = '';
}
//skaiciuoja amziu
const calculateAge = (birthday) => {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age;
}
function showTable(){
    //counter = 0;
    table.classList.remove('hide');
}
function removeline(del){
    const row = del.parentElement.parentElement;
    tableBody.removeChild(row);
    changeCounter();
}
function changeCounter(){
    const row = tableBody.querySelectorAll('tr');
    if(row.length == 0){
        table.classList.add('hide');
    }
    counter = 0;
    row.forEach((element, index) => {
        counter++;
        const cells = element.querySelectorAll('td');
        cells[0].innerHTML = counter;
    });
}