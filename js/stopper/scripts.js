

function GetCurrentDateandTime() {

    const CurrentlyDate = new Date();
    console.log(CurrentlyDate);

    //Year
    currentlyYear = CurrentlyDate.getFullYear();
    //console.log(currentlyYear);
    const year = document.getElementById('year');
    year.innerHTML = currentlyYear;

    //Month
    currentlyMonth = CurrentlyDate.getMonth();
    //console.log(currentlyMonth);

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec'];

    const months = monthNames[currentlyMonth]

    //console.log(months);

    const month = document.getElementById('month');
    month.innerHTML = months;

    //Day
    const currentlyDay = CurrentlyDate.getDate();
    //console.log(currentlyDay);

    const day = document.getElementById('day');
    day.innerHTML = currentlyDay;

    //Hour
    const currentlyHour = CurrentlyDate.getHours()
    console.log(currentlyHour)

    const hour = document.getElementById('hour')
    hour.innerHTML = currentlyHour;

     //Minute
     const currentlyMinute = CurrentlyDate.getMinutes()
     console.log(currentlyMinute)
 
     const minute = document.getElementById('minute')
     minute.innerHTML = currentlyMinute;

     if(currentlyMinute < 10){
        minute.innerHTML = '0'+ currentlyMinute;
        console.log('0'+ currentlyMinute)
     }else{
        minute.innerHTML = currentlyMinute;
     }

     //Sec
    const currentlySec = CurrentlyDate.getSeconds()
 
     const sec = document.getElementById('sec')

     if(currentlySec < 10){
        sec.innerHTML = '0' + currentlySec;
        console.log('0'+ currentlySec)
     }else{
        sec.innerHTML = currentlySec;
        console.log(currentlySec)
     }

     setTimeout(GetCurrentDateandTime,1000)
}
GetCurrentDateandTime()


