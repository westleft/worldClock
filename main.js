let city = document.querySelector('.city')

const localData = [
    {
        name: 'NEW YORK',
        timeZone: 'America/New_York',
    }, {
        name: 'LONDON',
        timeZone: 'Europe/London',
    }, {
        name: 'BANGKOK',
        timeZone: 'Asia/Bangkok',
    }, {
        name: 'TAIWAN',
        timeZone: 'Asia/Taipei',
    }, {
        name: 'SYDNEY',
        timeZone: 'Australia/Sydney',
    }
]

var options = {
    day: 'numeric',    //(e.g., 1)
    month: 'short',    //(e.g., Oct)
    year: 'numeric',   //(e.g., 2019)
    hour: '2-digit',   //(e.g., 02)
    minute: '2-digit', //(e.g., 02)          
    hour12: false,     // 24 小時制
    timeZone: 'America/New_York' // 美國/紐約
};

let date = new Date()

function change(counteyDay){
    let str = counteyDay.split(',')
    let month = str[0].split(' ')
    
    let result = month[1] + ' ' + month[0] + '.' + str[1];
    return result
}

localData.forEach(function (item, index) {
    let counteyDay = date.toLocaleString('en-US', {day: 'numeric',month: 'short',year: 'numeric',timeZone: localData[index].timeZone}); // "Oct 11, 2019, 05:00"

    city.innerHTML += `
    <div class="line${index + 1}">
        <div class="countey">
            <h2>${localData[index].name}</h2>
            <p>${change(counteyDay)}</p>
        </div>
        <p class="localTime">${date.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: localData[index].timeZone })}</p>
    </div>
`
})