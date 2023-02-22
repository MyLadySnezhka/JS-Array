
//const elName = document.querySelector('p[class=nameUser]');
const elNameDiv = document.querySelector('.name');
const elNameInput = document.querySelector('input[name=input_name]');
const elBtnOk = document.querySelector('button[name=btnOk]');
const elBtnClr = document.querySelector('button[name=btnClr');
const elSexDiv = document.querySelector('.sex');
const elSelectSex = document.querySelector('select[name=sex_select]');
const elNameList = document.querySelector('.nameList');

//формуємо масив зі списком гендерів та передачу даних з нього 
//сам масив даних
const gender = [
    'male',
    'female',
    'noname'
]

//додали html, зформували новий масив
const selectArr = gender.map((item) => {
    const _html = `<option value="${item}">${item}</option>`;
    return _html;
})

//зклеїли разом, роздільник пробіл
const htmlSelect = selectArr.join(' ');

elSelectSex.innerHTML = htmlSelect;

//функції для обробки тексту з інпуту

//зробити першу літеру заглавною
const upFirst = (str) => {
    str = str.toLowerCase();  // зробити всі літери маленькими
    str = `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
    return str;   
};

//заборонити вводити щось, крім літер
elNameInput.addEventListener('keyup', () => {
    elNameInput.value = elNameInput.value.replace(/[^a-zA-Zа-яА-ЯёЁ ]/g, '');
})


elBtnOk.addEventListener('click', () => {
    let nameUs = elNameInput.value;
        if (nameUs != '') nameUs = upFirst(nameUs)
        else return;
    elNameList.innerHTML = nameUs; 
});

elBtnClr.addEventListener('click', () => {
    elNameInput.value = '';
    elNameList.innerHTML = '';
});

