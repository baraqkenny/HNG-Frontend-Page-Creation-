
function currentDay() {
    // Get the days of the week
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
    

    // Display the current day on the browser
    const currentDayOfWeekContent = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDayOfWeekContent.innerHTML = currentDayOfWeek;
}
currentDay();

currentUTC();

   function currentUTC(){
     const presentDate = new Date();
    const currentUTCTimeInMilliseconds = presentDate.getTime();
     

//  DIsplay the current UTC Time on the browser
    const currentUTCTimeContent = document.querySelector('[data-testid="currentUTCTime"]');
    currentUTCTimeContent.innerHTML = currentUTCTimeInMilliseconds;


}