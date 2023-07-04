let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge(){
    let birthDate = new Date(userInput.value);

    let dayOne = birthDate.getDate();
    let monthOne = birthDate.getMonth() + 1;
    let yearOne = birthDate.getFullYear();

    let today = new Date();

    let dayTwo = today.getDate();
    let monthTwo = today.getMonth() + 1;
    let yearTwo = today.getFullYear();

    let dayThree, monthThree, yearThree;

    yearThree = yearTwo - yearOne;

    if(monthTwo >= monthOne){
        monthThree = monthTwo - monthOne;
    }else{
        yearThree--;
        monthThree = 12 + monthTwo - monthOne;
    }
    if(dayTwo >= dayOne){
        dayThree = dayTwo - dayOne;
    }else{
        monthThree--;
        dayThree = getDaysInMonth(yearOne, monthOne) + dayTwo - dayOne;
    }
    if(monthThree < 0){
        monthThree = 11;
        yearThree--;
    }
    result.innerHTML = `You are <span> ${yearThree} </span> years, <span>${monthThree} </span> months and <span>${dayThree} </span> days old!`;
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}