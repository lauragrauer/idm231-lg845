//
//
// 


// STORE HTML OBJECTS INTO JS VARIABLES/OJECTS
const KuromiObj = document.getElementById("Kuromi");
const PompompurinObj = document.getElementById("Pompompurin");
const PochaccoObj = document.getElementById("Pochacco");

// DISPLAY OBJECTS
const zNameObj = document.getElementById("zName");
const zImageObj = document.getElementById("zImage");
const zDateRangeObj = document.getElementById("zDateRange");
const zDescriptionObj = document.getElementById("zDescription");

// CLOSE MODE
const DisplayAreaObj = document.getElementById("DisplayArea");
const CloseBtnObj = document.getElementById("CloseBtn");

// GET ALL BUTTONS TO CALL ONE CENTRAL FUNCTION
KuromiObj.addEventListener('click', function() {
    displayZodInfo('Kuromi');
});

PompompurinObj.addEventListener('click', function() {
    displayZodInfo('Pompompurin');
});

PochaccoObj.addEventListener('click', function() {
    displayZodInfo('Pochacco');
});

// DISPLAY ZOD INFO FUNCTION
function displayZodInfo(whichOne) {
    // console.log('displayZodInfo called ' + whichOne);
    zNameObj.innerHTML = whichOne;
    switch (whichOne) {
        case 'Kuromi':
            zImageObj.src = 'media/Kuromi.png';
            zDateRangeObj.innerHTML = 'December 22 .. January 19th';
            zDescriptionObj.innerHTML = 'Kuromi, Pochacco, Pompompurin';
            DisplayAreaObj.classList.remove("hideMe");
            // PLAY AUDIO FOR THIS CHARACTER
            playAudio('bloop');
            break;
        case 'Pochacco':
            zImageObj.src = 'media/Pochacco.png';
            zDateRangeObj.innerHTML = 'November 22 .. December 21th';
            zDescriptionObj.innerHTML = 'Kuromi, Pochacco, Pompompurin';
            DisplayAreaObj.classList.remove("hideMe");
            // PLAY AUDIO FOR THIS CHARACTER
            playAudio('chimes');
            break;
        case 'Pompompurin':
            zImageObj.src = 'media/Pompompurin.png';
            zDateRangeObj.innerHTML = 'October 24 .. November 21th';
            zDescriptionObj.innerHTML = 'Kuromi, Pochacco, Pompompurin';
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
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        astrological_sign = 'Kuromi'
      } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        astrological_sign = 'Pochacco'
      } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        astrological_sign = 'Pompompurin'
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        astrological_sign = 'Libra'
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        astrological_sign = 'Virgo'
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        astrological_sign = 'Leo'
      } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        astrological_sign = 'Cancer'
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        astrological_sign = 'Gemini'
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        astrological_sign = 'Taurus'
      } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        astrological_sign = 'Aries'
      } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        astrological_sign = 'Pisces'
      } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        astrological_sign = 'Aquarius'
      }
      displayZodInfo(astrological_sign);
} else {
  alert('Please enter a valid date');
}
// DISPLAY THE ZODIAC SIGN INFO IN POPUP
});