function getDayInfo (dateIn) {
    // проверка на формат данных
    if (typeof dateIn !== 'string') {
        return 'Invalid Date'
    }
   let dateArr = dateIn.split(".");
   // проверка на корректность ввода номера месяца 
    if (dateArr[1]> "12" || dateArr[0]>"31") {
        return 'Invalid Date'
    }

    if ('04 06 09 11'.indexOf(dateArr[1])>-1 && (dateArr[0]>"30"))  {
    return 'Invalid Date'
    }
    // проверка на високосный год
    const outYear = parseInt(dateArr[2])
    const leapYear = outYear %4===0 && (outYear % 100 !==0 || outYear % 400 === 0)


    
    if (leapYear && dateArr[1]=== "02" && dateArr[0]>"29") {
        return 'Invalid Date'
    }

    if (!leapYear && dateArr[1]=== "02" && dateArr[0]>"28") {
        return 'Invalid Date'
    }


   // проверка на валидность введенной даты 
     const dateOut = new Date(parseInt(dateArr[2]),parseInt(dateArr[1]-1),parseInt(dateArr[0]))
     if (dateOut.toString()==='Invalid Date' ) {
        
         return 'Invalid Date'
     }

  
    let days = [ 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
    let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    // расчет для получения номера недели внутри месяца
    let oneJan = new Date(dateOut.getFullYear(),dateOut.getMonth(),1);
    let numberOfDays = Math.floor((dateOut - oneJan) / (24 * 60 * 60 * 1000));
    let week = Math.ceil((dateOut.getDay() + 1 + numberOfDays) / 7);


    return `${days[dateOut.getDay()-1]} , ${week} неделя ${months[dateOut.getMonth()]} ${dateOut.getFullYear()} года `
    
}

// тесты
console.log(getDayInfo("01.01.2022"));
console.log(getDayInfo("15.12.2021"));
console.log(getDayInfo("29.02.2020")); 
// тесты на валидность
console.log(getDayInfo("99.99.2021"))
console.log(getDayInfo(0));
console.log(getDayInfo("2022"))
console.log(getDayInfo("29.02.2021")); 
console.log(getDayInfo("31.04.2021"));


