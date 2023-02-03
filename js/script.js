'use strict';

const userYearOfBirth = prompt('Введи свой год рождения:', '');
console.log(userYearOfBirth);
if (userYearOfBirth !== null && !isNaN(+userYearOfBirth) && userYearOfBirth != '')

    let userAge = new Date().getFullYear() - userYearOfBirth;

    const userCity = prompt('Введи город в котором ты живешь:', '');
    if (userCity !== null && userCity.trim().length){

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
        if (userFavouriteSport !== null && userFavouriteSport.trim().length){
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
            alert('Твой возраст: ' + userAge + '\n' + userCityResult + '\n' + userFavouriteSportResult );
        } else {
            alert('Жаль, что Вы не захотели ввести свой любимый спорт');
        }
    } else{
        alert('Жаль, что Вы не захотели ввести свой город');
    }
} else{
    alert('Жаль, что Вы не захотели ввести свой год рождения');
}