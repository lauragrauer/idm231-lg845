//
//
// 


// STORE HTML OBJECTS INTO JS VARIABLES/OJECTS
const HarpyEagleObj = document.getElementById("HarpyEagle");
const MuteSwanObj = document.getElementById("MuteSwan");
const BaltimoreOrioleObj = document.getElementById("BaltimoreOriole");

// DISPLAY OBJECTS
const zNameObj = document.getElementById("zName");
const zImageObj = document.getElementById("zImage");
const zDateRangeObj = document.getElementById("zDateRange");
const zDescriptionObj = document.getElementById("zDescription");

// CLOSE MODE
const DisplayAreaObj = document.getElementById("DisplayArea");
const CloseBtnObj = document.getElementById("CloseBtn");

// GET ALL BUTTONS TO CALL ONE CENTRAL FUNCTION
HarpyEagleObj.addEventListener('click', function() {
    displayZodInfo('HarpyEagle');
});

MuteSwanObj.addEventListener('click', function() {
    displayZodInfo('MuteSwan');
});

BaltimoreOrioleObj.addEventListener('click', function() {
  displayZodInfo('BaltimoreOriole');
});

// DISPLAY ZOD INFO FUNCTION
function displayZodInfo(whichOne) {
    // console.log('displayZodInfo called ' + whichOne);
    zNameObj.innerHTML = whichOne;
    switch (whichOne) {
        case 'HarpyEagle':
            zImageObj.src = 'images/harpy-eagle.gif';
            zDateRangeObj.innerHTML = 'December 22 .. January 19th';
            zDescriptionObj.innerHTML = 'lelele';
            DisplayAreaObj.classList.remove("hideMe");
            // PLAY AUDIO FOR THIS CHARACTER
            playAudio('bloop');
            break;
        case 'MuteSwan':
            zImageObj.src = 'images/mute-swan.gif';
            zDateRangeObj.innerHTML = 'October 24 .. November 21th';
            zDescriptionObj.innerHTML = 'lelele';
            DisplayAreaObj.classList.remove("hideMe");
            // PLAY AUDIO FOR THIS CHARACTER
            playAudio('crack');
            break;
        case 'BaltimoreOriole':
            zImageObj.src = 'images/baltimoreorielle.gif';
            zDateRangeObj.innerHTML = 'October 24 .. November 21th';
            zDescriptionObj.innerHTML = 'lelele';
            DisplayAreaObj.classList.remove("hideMe");
            // PLAY AUDIO FOR THIS CHARACTER
            playAudio('crack');
            break;
        default:
            console.log('ERROR WRONG ONE!');
    }
}

CloseBtnObj.addEventListener('click', function() {
    DisplayAreaObj.classList.add('hideMe');
});

// PLAY AUDIO FUNCTION
const allAudios = document.querySelectorAll('audio');
function playAudio(whichSound) {
    allAudios.forEach(thisAudio => {
        thisAudio.pause();
        thisAudio.currentTime = 0; //THIS IS AN ALT TO RESET SOUND BACK TO THE START
    })
    document.getElementById(whichSound).play();
}

// INPUT DATE AND SUBMIT CODE BELOW
const submitOBJ = document.getElementById("zSubmit");

submitOBJ.addEventListener('click', function() {
    console.log('Submit button clicked on!');
// STEP 01 CAPTURE USER INPUT DATE
    const birthDateObj = document.getElementById('zBirthday').valueAsDate;
    console.log('zBirthday is: = ' + birthDateObj );
// MAKE SURE THE DATE IS VALID
if (birthDateObj) {
    const tzOffSet = birthDateObj.getTimezoneOffset() * 60 * 1000;
    console.log('tzOffSet is: ' + tzOffSet);
    const birthDateEST = new Date(birthDateObj.getTime() + tzOffSet);
    console.log('birthDateEST is: ' + birthDateEST);
    // EXTRACT MONTH
    const month = birthDateEST.getMonth() + 1;
    // EXTRACT DAY OF MONTH
    const day = birthDateEST.getDate();
    console.log(' month is ' + month + ' day is: ' + day);
    // CONVERT DATA TO ZODIAC SIGN
    if ((month === 1 && day >= 1) || (month === 1 && day <= 31)) {
      astrological_sign = 'HarpyEagle';  // January 1-31
  } else if ((month === 2 && day >= 1) || (month === 2 && day <= 28)) {
      astrological_sign = 'MuteSwan';   // February 1-28
  } else if ((month === 3 && day >= 1) || (month === 3 && day <= 31)) {
      astrological_sign = 'BaltimoreOriole'; // March 1-31
  } else if ((month === 4 && day >= 1) || (month === 4 && day <= 30)) {
      astrological_sign = 'StellersJay'; // April 1-30
  } else if ((month === 5 && day >= 1) || (month === 5 && day <= 31)) {
      astrological_sign = 'RedCrestedCardinal'; // May 1-31
  } else if ((month === 6 && day >= 1) || (month === 6 && day <= 30)) {
      astrological_sign = 'Roadrunner'; // June 1-30
  } else if ((month === 7 && day >= 1) || (month === 7 && day <= 31)) {
      astrological_sign = 'Seagull'; // July 1-31
  } else if ((month === 8 && day >= 1) || (month === 8 && day <= 31)) {
      astrological_sign = 'AcornWoodpecker'; // August 1-31
  } else if ((month === 9 && day >= 1) || (month === 9 && day <= 30)) {
      astrological_sign = 'GreatBlueHeron'; // September 1-30
  } else if ((month === 10 && day >= 1) || (month === 10 && day <= 31)) {
      astrological_sign = 'CanadaGoose'; // October 1-31
  } else if ((month === 11 && day >= 1) || (month === 11 && day <= 30)) {
      astrological_sign = 'CarolinaChickadee'; // November 1-30
  } else if ((month === 12 && day >= 1) || (month === 12 && day <= 31)) {
      astrological_sign = 'SnowyOwl'; // December 1-31
  }
      displayZodInfo(astrological_sign);
} else {
  alert('Please enter a valid date');
}
// DISPLAY THE ZODIAC SIGN INFO IN POPUP
});