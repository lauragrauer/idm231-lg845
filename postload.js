// STORE HTML OBJECTS INTO JS VARIABLES/OJECTS
const HarpyEagleObj = document.getElementById("HarpyEagle");
const MuteSwanObj = document.getElementById("MuteSwan");
const BaltimoreOrioleObj = document.getElementById("BaltimoreOriole");
const StellersJayObj = document.getElementById("StellersJay");
const RedCrestedCardinalObj = document.getElementById("RedCrestedCardinal");
const RoadrunnerObj = document.getElementById("Roadrunner");
const SeagullObj = document.getElementById("Seagull");
const AcornWoodpeckerObj = document.getElementById("AcornWoodpecker");
const GreatBlueHeronObj = document.getElementById("GreatBlueHeron");
const CanadaGooseObj = document.getElementById("CanadaGoose");
const CarolinaChickadeeObj = document.getElementById("CarolinaChickadee");
const SnowyOwlObj = document.getElementById("SnowyOwl");
const questionObj = document.getElementById("Question");


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

StellersJayObj.addEventListener('click', function() {
  displayZodInfo('StellersJay');
});

RedCrestedCardinalObj.addEventListener('click', function() {
  displayZodInfo('RedCrestedCardinal');
});

RoadrunnerObj.addEventListener('click', function() {
  displayZodInfo('Roadrunner');
});

SeagullObj.addEventListener('click', function() {
  displayZodInfo('Seagull');
});

AcornWoodpeckerObj.addEventListener('click', function() {
  displayZodInfo('AcornWoodpecker');
});

GreatBlueHeronObj.addEventListener('click', function() {
  displayZodInfo('GreatBlueHeron');
});

CanadaGooseObj.addEventListener('click', function() {
  displayZodInfo('CanadaGoose');
});

CarolinaChickadeeObj.addEventListener('click', function() {
  displayZodInfo('CarolinaChickadee');
});

SnowyOwlObj.addEventListener('click', function() {
  displayZodInfo('SnowyOwl');
});

questionObj.addEventListener('click', function() {
    displayZodInfo('Question');
  });

// DISPLAY ZOD INFO FUNCTION
function displayZodInfo(whichOne) {
    // console.log('displayZodInfo called ' + whichOne);
    zNameObj.innerHTML = whichOne;
    switch (whichOne) {
        case 'HarpyEagle':
            zImageObj.src = 'images/harpy-eagle.gif';
            zDateRangeObj.innerHTML = 'January 1-31';
            zDescriptionObj.innerHTML = 'The Harpy Eagle…a proud and stealthy hunter, well regarded as one of the more independent creatures in the birds of prey category. With a commanding presence, the Harley Eagle reflects a self sufficient personality with those born in this time period.  Just as the apex predator focuses on its prey with precision, these guys are equally driven to achieve their goals. Natural leaders with a clear direction can often become rather solitary in their pursuit of success, but are heavily committed to their values, ensuring they stand out as an accomplishment.';
            DisplayAreaObj.classList.remove("hideMe");
            // PLAY AUDIO FOR THIS CHARACTER
            playAudio('bloop');
            break;
        case 'MuteSwan':
            zImageObj.src = 'images/mute-swan.gif';
            zDateRangeObj.innerHTML = 'February 1-28';
            zDescriptionObj.innerHTML = 'Known for love! The swan embodies the romantic and thoughtful nature of February. Similar to those born in this month, swans possess a deep sense of loyalty in an elegant manner, often seen as symbols of love and partnership. However, similar to the months climate itself, February can bring a mix of cold and unpredictable moments, bringing out the swans more guarded, sensitive side; this can cause them to become a bit assertive and overly sentimental. Despite these occasional challenges, the swans ability to love deeply and remain devoted to their partner makes them a beautiful representation of a heartfelt connection.';
            DisplayAreaObj.classList.remove("hideMe");
            // PLAY AUDIO FOR THIS CHARACTER
            playAudio('crack');
            break;
        case 'BaltimoreOriole':
            zImageObj.src = 'images/baltimoreorielle.gif';
            zDateRangeObj.innerHTML = 'March 1-31';
            zDescriptionObj.innerHTML = 'Natural artists at heart, brimming with creativity and imagination! With its vibrant plumage, they bring a unique and refreshing energy to everything they do, leaving a lasting impression wherever they go. They offer a sense of renewal, much like their migratory arrival in the spring. Though they thrive in a lively setting, they also value quiet moments of introspection. Sometimes a small break of solitude to recharge aligns with the refinement of their vision. While they may appear reserved at times, their potential for artistic expression and personal growth knows no bounds.';
            DisplayAreaObj.classList.remove("hideMe");
            // PLAY AUDIO FOR THIS CHARACTER
            playAudio('crack');
            break;
        case 'StellersJay':
            zImageObj.src = 'images/stellarjay.gif';
            zDateRangeObj.innerHTML = 'April 1-30';
            zDescriptionObj.innerHTML = 'With its unique blue plumage and bold crest, the Stellers Jay stands out in the western regions due to its distinctive appearance. Much like those born in April, it embodies a sense of curiosity and enthusiasm, constantly seeking out new experiences. However, dont be fooled by this vibrant exterior for long. The Stellers Jay is known for its impulsive and mischievous nature, often diving into adventures that dont always go as planned. Despite these moments of unpredictability, these birds are highly loyal and form long lasting bonds with a small group of companions, showing that beneath the playful demeanor lies a dependable commitment to those they care about.';
            DisplayAreaObj.classList.remove("hideMe");
            // PLAY AUDIO FOR THIS CHARACTER
            playAudio('crack');
            break;
        case 'RedCrestedCardinal':
            zImageObj.src = 'images/redcreastedcardinal.gif';
            zDateRangeObj.innerHTML = 'May 1-31';
            zDescriptionObj.innerHTML = 'Be careful… youll pull others like a magnet! The Red Crested Cardinals are often a charismatic bunch, full with energy to go alongside. The lively red colored crest mirrors the cardinals vibrant personality, often attracting attention in social situations. Known for their striking appearance, these aviaries also carry a sharp mindset and zest for life, easily able to captivate others with their talent and enthusiasm. While they may struggle with the occasional indecision, their confident song and presence exemplifies the Red Crested Cardinals knack for adapting to seasonal changes and inspiring thought around them with their innate charm.';
            DisplayAreaObj.classList.remove("hideMe");
            // PLAY AUDIO FOR THIS CHARACTER
            playAudio('crack');
            break;
        case 'Roadrunner':
            zImageObj.src = 'images/roadrunner.gif';
            zDateRangeObj.innerHTML = 'June 1-30';
            zDescriptionObj.innerHTML = 'People born in June often possess a unique combination of sensitivity and resourcefulness, much like the Road Runner. This bird is known for its quickness, cleverness, and ability to adapt in difficult situations. Like the Road Runner, June-borns are perceptive individuals who can read the emotions of others and know when to act swiftly, but they often prefer to take time to recharge in solitude. Their sensitive and introspective sides make them empathetic, but they also have an energetic and adventurous spirit that drives them to seek new experiences and challenges. Despite their emotional depth, they sometimes avoid confrontation and prefer to keep things lighthearted, much like the playful nature of the Road Runner.';
            DisplayAreaObj.classList.remove("hideMe");
            // PLAY AUDIO FOR THIS CHARACTER
            playAudio('crack');
            break;
        case 'Seagull':
            zImageObj.src = 'images/gull.gif';
            zDateRangeObj.innerHTML = 'July 1-31';
            zDescriptionObj.innerHTML = 'July-born individuals are typically adventurous and independent, with a strong desire for personal freedom, much like the Seagull. These birds are often seen roaming coastal areas, highly self-sufficient, and not afraid to assert their territory. Similarly, July-borns are often self-reliant, yet they can be moody and temperamental at times… Especially when they feel their autonomy is threatened. Much like the gull, they have a sharp wit and a sense of resilience, always able to weather challenges and keep moving forward. However, like the gulls loud, sharp calls, July-borns can sometimes express their emotions with intensity, especially when confronted with adversity.';
            DisplayAreaObj.classList.remove("hideMe");
            // PLAY AUDIO FOR THIS CHARACTER
            playAudio('crack');
            break;
        case 'AcornWoodpecker':
            zImageObj.src = 'images/acornwoodpecker.gif';
            zDateRangeObj.innerHTML = 'August 1-31';
            zDescriptionObj.innerHTML = 'The Acorn Woodpecker is a true embodiment of generosity and community, traits that reflect the essence of those born in August. August-borns are known for their hardworking and philanthropic nature, just as the Acorn Woodpecker works tirelessly to store acorns and support its community. They are very self-motivated, always striving for the betterment of their loved ones, and have an innate sense of loyalty. Like the woodpecker, August-born individuals are grounded and dependable, with a strong focus on their family and close-knit relationships. They may appear serious or intense in their efforts, but their commitment to others makes them incredibly compassionate and giving.';
            DisplayAreaObj.classList.remove("hideMe");
            // PLAY AUDIO FOR THIS CHARACTER
            playAudio('crack');
            break;
        case 'GreatBlueHeron':
            zImageObj.src = 'images/greatbluehearon.gif';
            zDateRangeObj.innerHTML = 'September 1-30';
            zDescriptionObj.innerHTML = 'People born in September are often intelligent, spiritual, and reflective, much like the Great Blue Heron. Known for its composed and patient demeanor, the heron mirrors the calm, introspective nature of September-borns who often seek clarity and wisdom in their pursuits. Similar to the herons deliberate hunting style, these individuals tend to take their time in making decisions, weighing their options carefully before acting. The herons solitary nature also aligns with September-borns introspective tendencies, as they often prefer quiet spaces for deep reflection and contemplation, making them both thoughtful and empathetic.';
            DisplayAreaObj.classList.remove("hideMe");
            // PLAY AUDIO FOR THIS CHARACTER
            playAudio('crack');
            break;
        case 'CanadaGoose':
            zImageObj.src = 'images/goose.gif';
            zDateRangeObj.innerHTML = 'October 1-31';
            zDescriptionObj.innerHTML = 'The Canada Goose is an ideal representation of October-born individuals, as it symbolizes loyalty and determination. These individuals are known for their resilience and strength, as well as their ability to build strong connections with those they deeply care for. Their migratory nature also reflects the October-borns ability to adapt to new circumstances and overcome challenges. Much like the birds constant need for companionship during migration, October-borns thrive in close communities, relying on their strong sense of loyalty and authenticity to guide them through challenges. They value their relationships and make powerful bonds that last through time, similar to a Canada Gooses enduring partnerships within flocks.';
            DisplayAreaObj.classList.remove("hideMe");
            // PLAY AUDIO FOR THIS CHARACTER
            playAudio('crack');
            break;
        case 'CarolinaChickadee':
            zImageObj.src = 'images/carolinachickadee.gif';
            zDateRangeObj.innerHTML = 'November 1-30';
            zDescriptionObj.innerHTML = 'The Carolina Chickadee embodies the personality of those born in November, with its sharp, perceptive nature and empathy. Known for its curiosity and generosity, the chickadee is a social bird that thrives on strong relationships within its community, much like the November-born who excel at motivating and supporting their loved ones. These individuals tend to be very perceptive, noticing details that others may miss, and have a natural ability to inspire and encourage those around them. Like the chickadees ability to adapt to changes in its environment, November-borns are resilient and driven. Regardless, they also prefer to avoid unnecessary praise and spotlight, much like the humble and understated nature of the Carolina Chickadee.';
            DisplayAreaObj.classList.remove("hideMe");
            // PLAY AUDIO FOR THIS CHARACTER
            playAudio('crack');
            break;
        case 'SnowyOwl':
            zImageObj.src = 'images/snowowl.gif';
            zDateRangeObj.innerHTML = 'December 1-31';
            zDescriptionObj.innerHTML = 'The Snowy Owl symbolizes wisdom, independence, and clarity of thought. Much like the owl, December-born individuals possess a quiet strength and are often patient when it comes to making decisions. They are very independent, with a deep sense of personal responsibility. The Snowy Owl, often associated with winters stark beauty, reflects the December-borns preference for solitude, where they can focus on their goals without distraction. However, just as the owl’s keen vision allows it to see clearly in the dark, December-borns are able to navigate through life with a unique insight, often making decisions that others may not immediately understand but that prove to be grounded and wise in the long run.';
            DisplayAreaObj.classList.remove("hideMe");
            // PLAY AUDIO FOR THIS CHARACTER
            playAudio('crack');
            break;
        case 'Question':
            zImageObj.src = 'images/questionmark1.png';
            zDateRangeObj.innerHTML = 'So...';
            zDescriptionObj.innerHTML = 'Enter your birthday to discover the bird that best represents your special day! Each bird is carefully chosen to align with the traits and symbolism associated with the month you were born. Lets find out which bird connects with you!';
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
