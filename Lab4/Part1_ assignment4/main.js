// Find the input field for custom name
const customName = document.getElementById('customname');

// Find the button for randomizing the story
const randomize = document.querySelector('.randomize');

// Find the container for the story text
const story = document.querySelector('.story');


// Function to get a random value from an array
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


// Initial story text
var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz: Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

// Arrays for possible replacements in the story
var insertX =  ["Willy the Goblin","Big Daddy", "Father Christmas"]
var insertY = ["the soup kitchen","Disneyland","the White House"]
var insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"]


// Event listener for the randomize button
randomize.addEventListener('click', result);

// Function to generate the randomized story
function result() {
    var newStory = storyText
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

 newStory = newStory.replace(':insertx:',xItem)
 newStory = newStory.replace(':insertx:',xItem)
 newStory= newStory.replace(':inserty:',yItem)
 newStory = newStory.replace(':insertz:',zItem)

  // Replace custom name if provided
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name)
  }

  // If UK option is selected, convert weight and temperature units
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);
    newStory = newStory.replace("300pound", weight)
    newStory= newStory.replace("94 fahrenheit", temperature)
  }

  // Display the generated story
  story.textContent = newStory ;
  story.style.visibility = 'visible';
}





