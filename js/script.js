'use strict';

const userYearOfBirth = prompt('Введи свой год рождения:', '');

if (userYearOfBirth == null || !isNaN(+userYearOfBirth)){
    alert('Жаль, что Вы не захотели ввести свой год рождения');
}
let userAge = new Date().getFullYear() - userYearOfBirth;

const userCity = prompt('Введи город в котором ты живешь:', '');

if (userCity == null){
    alert('Жаль, что Вы не захотели ввести свой город');
}

let userCityResult = null;
if (userCity == 'Киев'){
    userCityResult = 'Ты живешь в столице Украины';
} else if (userCity == 'Берлин'){
    userCityResult = 'Ты живешь в столице Германии';
} else if (userCity == 'Париж'){
    userCityResult = 'Ты живешь в столице Франции';
} else if (userCity == ''){
    userCityResult = 'Где ты вообще живёшь';
} else {
    userCityResult = `Ты живешь в городе ${userCity}`;
}
const userFavouriteSport = prompt('Введи свой любимый спорт:', '');
let userFavouriteSportResult = null;
if (userFavouriteSport == 'Футбол'){
    userFavouriteSportResult = 'Круто! Хочешь стать как Месси';
} else if (userFavouriteSport == 'Баскетбол'){
    userFavouriteSportResult = 'Круто! Хочешь стать как Джордан';
} else if (userFavouriteSport == 'Теннис'){
    userFavouriteSportResult = 'Круто! Хочешь стать как Надаь';
} else {
    userFavouriteSportResult = 'Интересно! Не слышал о таком виде спорта';
}

if (Number.isNaN(userFavouriteSport) || userFavouriteSport == null){
    alert('Жаль, что Вы не захотели ввести свой любимый спорт');
} else {
    alert('Твой возраст: ' + userAge + '\n' + userCityResult + '\n' + userFavouriteSportResult );
}
