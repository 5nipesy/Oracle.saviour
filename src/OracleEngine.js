let GE1 = 0.5;
let GE2 = 0.5;
let GE3 = 0.5;
let GE4 = 0.5;

// start 
var AknowledgmentOfChallenge = ['Though the road ahead may be filled with challenges, ',
'Despite the obstacles that may stand in your way ',
'Even though the journey may be difficult at times, ',
'While the path may not always be easy, ','Although there may be bumps in the road,',
'Though you may face adversity along the way,',
'Despite the trials and tribulations that may come,','Even though the future may hold uncertainty,',
'While there may be hurdles to overcome, ',
'Although the going may get tough, ',  
"Amidst the labyrinth of life, you may encounter challenges,",
"As you navigate the river of time, challenges may arise, ",
"In the realm of destiny, challenges are but stepping stones, ",
"Within the tapestry of fate, challenges are woven into your story, ",
"Like mountains on the horizon, challenges may loom before you, ",
"In the mosaic of existence, challenges shape the masterpiece of you, ",
"Along the threads of fate, challenges add depth to your journey, ",
"In the symphony of life, challenges compose a unique melody for you, ",
"Through the seasons of life, challenges bring growth and wisdom, ",
"In the dance of destiny, challenges are partners in your transformation, "]



var AknowledgmentOfOpportunities = [
    "The road ahead is filled with opportunities, ",
    "The future holds many positive possibilities for you, ",
    "There are countless chances for growth and success, ",
    "The path before you is ripe with potential, ",
    "Endless prospects await you on your journey, ",
    "The horizon is bright with promise, ",
    "A world of opportunity lies at your feet, ",
    "The future is yours for the taking, ",
    "There are no limits to what you can achieve, ",
    "The possibilities are endless and the sky's the limit, ",
    "The universe unfolds a tapestry of opportunities before you, ",
  "Like stars in the night sky, opportunities are countless for you, ",
  "Each step you take unveils new opportunities to embrace, ",
  "The winds of destiny carry whispers of opportunities your way, ",
  "Embrace the mosaic of opportunities that life presents to you, ",
  "In every corner of your journey, opportunities await your discovery, ",
  "Life's canvas is painted with opportunities for you to explore, ",
  "The tapestry of fate is woven with threads of golden opportunities, ",
  "Opportunities bloom like flowers along the path you tread, ",
  "The symphony of life harmonizes with a chorus of boundless opportunities, "
  ];
//  dictates probabilty of the challenge use 
  const probabilityofchallenge = GE1;

// transtions 
  var Transition = [
    "and with your determination, ",
    "and with your hard work, ",
    "and with your perseverance, ",
    "and with your unwavering spirit, ",
    "and with your positive attitude, ",
    "and with your courage, ",
    "and with your strength, ",
    "and with your resilience, ",
    "and with your tenacity, ",
    "and with your steadfastness, ",  "and guided by your determination, ",
    "and driven by your hard work, ",
    "and fueled by your perseverance, ",
    "and empowered by your unwavering spirit, ",
    "and empowered by your positive attitude, ",
    "and emboldened by your courage, ",
    "and supported by your strength, ",
    "and fortified by your resilience, ",
    "and driven by your tenacity, ",
    "and inspired by your steadfastness, "
  ];
var NTransitions = [
    "Though the road ahead may be filled with challenges, ",
    "Amidst the gathering storm, ",
    "As the shadows deepen, ",
    "In the face of adversity, ",
    "When the tides of fate turn against you, ",
    "As the stars lose their guiding light, ",
    "When destiny weaves a tale of woe, ",
    "In the grip of uncertainty, ",
    "When the path grows treacherous, ",
    "As the threads of fortune unravel, ",
    "When the echoes of challenge resound, ",
    "In the midst of a somber dusk, ",
    "As the specter of difficulty emerges, ",
    "When the tempest of hardship rages, ",
    "As the veil of uncertainty descends, ",
    "Amidst the shadowy whispers of tribulation, ",
    "When the path ahead is obscured by adversity, ",
    "As the threads of fate twist into knots, ",
    "In the darkness where doubts linger, ",
    "When the tapestry of destiny frays, "
  ];

const probOfTransGood = GE2; 

//   attributes 
  var PossitiveAttribute =  [
    "your unwavering resolve, ",
    "the beacon of your courage, ",
    "the strength within your heart, ",
    "the brilliance of your spirit, ",
    "your boundless determination, ",
    "the fire of your ambition, ",
    "the light of your hope, ",
    "the power of your perseverance, ",
    "the depth of your faith, ",
    "the spark of your resilience, ",
    "your unbreakable spirit, ",
  "the fortress of your confidence, ",
  "the foundation of your optimism, ",
  "the wellspring of your energy, ",
  "your unwavering dedication, ",
  "the North Star of your determination, ",
  "the lighthouse of your positivity, ",
  "the anchor of your patience, ",
  "the essence of your belief, ",
  "the heartbeat of your endurance, "
  ];
var NegativeAttribute = [
    "the weight of uncertainty,",
    "the grip of doubt, ",
    "the shadow of fear, ",
    "the echoing whispers of despair, ",
    "the burden of challenges, ",
    "the shroud of darkness, ",
    "the stormclouds of adversity, ",
    "the haunting specter of failure, ",
    "the chill of hesitation, ",
    "the void of lost hope, ",
    "the suffocating embrace of uncertainty, ",
    "the relentless tug of doubt, ",
    "the looming presence of fear, ",
    "the persistent echoes of despair, ",
    "the heavy weight of challenges, ",
    "the engulfing darkness of obstacles, ",
    "the thunderous clouds of adversity, ",
    "the haunting shadow of failure, ",
    "the freezing grip of hesitation, ",
    "the abyss of vanishing hope, "
  ];

  const ProbAttr = GE3;

  //outcomes
var PositiveOutcome =  [
    "will guide you to triumph.",
    "will illuminate your path to success.",
    "will empower you to achieve greatness.",
    "will lead you to a future of abundance.",
    "will ensure your victory.",
    "will shape a tale of accomplishment.",
    "will weave a story of joy and fulfillment.",
    "will be your beacon of prosperity.",
    "will accompany you to a time of celebration.",
    "will manifest as a well-earned reward.",
    "will unfold the pages of your triumph.",
    "will pave the way to your resounding success.",
    "will be the catalyst for your soaring achievements.",
    "will be the gateway to a realm of plenty and success.",
    "will secure your rightful place as a victor.",
    "will script a narrative of triumphant accomplishment.",
    "will compose a vibrant saga of joy and fulfillment.",
    "will be the guiding star to your prosperity.",
    "will lead you to a moment of jubilant celebration.",
    "will materialize as the crown jewel of your efforts."
  ];

var NegativeOutcome = [
    "may lead to a bitter end.",
    "may cast a pall of defeat.",
    "could result in a tale of sorrow.",
    "might steer toward a path of loss.",
    "may culminate in disappointment.",
    "could unfold as a tale of misfortune.",
    "might leave you in the shadows.",
    "may paint a picture of adversity.",
    "could usher in a time of tribulation.",
    "might conclude in despair.",
    "may unveil a lamentable conclusion.",
    "may shroud you in the cloak of defeat.",
    "could engrave a tale of woe upon your story.",
    "might guide you down a path of unfortunate loss.",
    "may etch the canvas of your journey with disappointment.",
    "could sketch a portrait of misfortune in your fate.",
    "might cast you into the depths of shadow.",
    "may paint a somber landscape of adversity.",
    "could bring forth a season of arduous tribulations.",
    "might carve the final chapter in the stone of despair."
  ];
  
  const ProbOutcomes = GE4;



 function OracleEngineBuilder () {
    for (let i = 0; i < 250; i++) {
        setTimeout(function() {
    // dice roller 1 (ak start)
    const DicerollerCO = Math.random() < probabilityofchallenge ? AknowledgmentOfChallenge[Math.floor(Math.random() * AknowledgmentOfChallenge.length)] : AknowledgmentOfOpportunities[Math.floor(Math.random() * AknowledgmentOfOpportunities.length)];
    // dice roller 2 (transitions)
    const DicerollerTrans = Math.random() < probOfTransGood ? Transition[Math.floor(Math.random() * Transition.length)] : NTransitions[Math.floor(Math.random() * NTransitions.length)];
    // dice roller 3 (attributes)
    const DicerollerA = Math.random() < ProbAttr ? PossitiveAttribute[Math.floor(Math.random() * PossitiveAttribute.length)] : NegativeAttribute[Math.floor(Math.random() * NegativeAttribute.length)];
    //outcomes
    const DicerollerO = Math.random() < ProbOutcomes ? PositiveOutcome[Math.floor(Math.random() * PositiveOutcome.length)] : NegativeOutcome[Math.floor(Math.random() * NegativeOutcome.length)];
    
    let DiceRollerOutCome = '"' + DicerollerCO + DicerollerTrans + DicerollerA + DicerollerO+'"'; 
    console.log(DiceRollerOutCome)
    // if you are wondering what happend to simple i admit to me this looked simple 
    // if you are also wondering how many potential outcomes there are last night while losing my mind it was calculated to be 25,600,000,000 possible combinations 
    const pElement = document.querySelector('p');
    
    pElement.innerHTML = DiceRollerOutCome;
}, i * 5); // Delay of i seconds

 
    }
    
 }

 let count = 0;

 // Select the h2 element within a specific section
const h2Element = document.querySelector('#fortune h2');
// Define a function that increments the count and checks if it reaches 10
function OracleCounter() {
  // Increase the count by 1
  count++;
  // Log the current count
  console.log("Count: " + count);
  // If the count is 10, display a message
  if (count == 10) {
    StageRight()
  }
}

let margin = document.getElementById('death') 
var marginprocent = 7

function StageRight () {
setTimeout (
  Dialog(), 1000
) 

for (let i = 0; i < 84; i++) {
setTimeout (function() {
  marginprocent--
  margin.style.marginRight = marginprocent+'%'
}, i * 5 ) 
}

setTimeout (
  function() {
  resetDialog()
  },
  3000
)

}



const Yourh2 = document.getElementById('your')
const Messenger = document.getElementById('messaenger')
 function hidemessage () {
  Messenger.style.display = ('none')
 }
 hidemessage()

function Dialog () {
  pElement.style.display = ('none')
  Yourh2.style.display = ('none')
  button.style.display = ('none')
  Messenger.style.display = ('block')
}

function resetDialog () {
  Yourh2.style.display = ('block')
  button.style.display = ('inline-block')
  Messenger.style.display = ('none')
  pElement.style.display = ('block')
}

function StageRightMotion (){

}
 

function Buttonclicky (){
  OracleCounter();
  OracleEngineBuilder();
}

// Create a new div element
const div = document.createElement('div');

// Create a new p element
const p = document.createElement('p');
p.id = 'intro';
p.textContent = 'Greetings, mortal. I am an Death, with the power to see beyond the veil of time and predict the future. With my scythe in hand and my cloak billowing behind me, I stand at the crossroads of fate, ready to guide you on your journey. But remember, the future is not set in stone. It is shaped by the choices you make and the actions you take. So choose wisely, for the path you take will determine your destiny. Do you have a question for me, mortal? Ask, and I shall reveal what lies ahead. But be warned, for the truth can be a heavy burden to bear. Are you ready to face your future? Click "your fortune" to find out';

// Append the p element to the div element
div.appendChild(p);



// Insert the div element after the h2 element
h2Element.insertAdjacentElement('afterend', div);

// Select the p element in the fortune section
const pElement = document.querySelector('#fortune p');

const button = document.createElement('button');
button.textContent = 'See your fortune';
// the font i chose doesnt really work with our danish supiror charecters 

// Add a class to the button
button.classList.add('btn-home');



// Insert the button after the p element
pElement.insertAdjacentElement('afterend', button);

// Add an event listener to the button
button.addEventListener('click', Buttonclicky);

// okay so the original plan was to just do an array and call it a day however, i came up with a better and way more confusing and funny alternative 
// i thought lots of little arrays that build the oracle statments would be not only funny but motivational for my productivity 
// so i broke down the problem origanily i thought of a coin toss idea, where the dice rollers would flip a coin and pick the array that the coin landed on 
// however this ended tragically as once the coin flips had been done they wouldnt select the array but just print the entire array into the next stage, this sucked after some head scratching 
// i realised that the best way to go was to break it down a little further, intsead of going this diceroller = xyz and then using xyz in a random array value generator i would just, 
// go from xyz and the finishish it simplifying the output of each diceroller 
// going along the line it creates a static variable calls diceroller X 
// im using the ? if else shorthand 
// = generates random number between 0 and 1 if its < less than the probabilty number (0.6) it picks option A if not it picks B say: 0.5 < 0.6 ? A : B = A , and each A and B does a random in there array so the variable is already to go when it picks a or b 
// now heres the fun bit after i made this whole system i realizes, shit, show all of them there a 25,600,000,000 potential combinations, so it quickly cycles 250 loops with a 000.5 second delay so you can see them in the h2 very fast
// but it also prints out to the console so you can have fun and actually read them 
// on the flip side it looks cool 
// sorry its a bit cahotic after the Engine i kind made the engine and had to go back alot to make sure it made all the things you asked for like divs and stuffs
