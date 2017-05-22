'use strict';

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const characters = [
    'Willy the Goblin',
    'Northwestern the Mutual',
    'Ray the Sexy Saxman',
]

const locations = [
    'Jamaica',
    'Saudi Arabia',
    'Israel',
    'Vatican',
    'Sicily'
]

const weirdEvents = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'
]

function grabRandomArrayItem(array){
    var index = Math.floor(Math.random() * array.length);
    return array[index];
}

function handleButtonClick(){
    let nameValue = customName.value;

    if (nameValue === ''){
        nameValue = 'Bob';
    }

    story.innerText = buildStory(nameValue);
    story.style.visibility = 'visible';
}

function buildStory(customName){
    const character = grabRandomArrayItem(characters);
    const location = grabRandomArrayItem(locations);
    const event = grabRandomArrayItem(weirdEvents);
    let temperature =  Math.floor(Math.random() * 94);
    let tempUnit = 'fahrenheit';
    let weight =  Math.floor(Math.random() * 300);
    let weightUnit = 'pounds';

    if(document.getElementById("uk").checked) {
        temperature = Math.round((temperature - 32) * 5 / 9);
        tempUnit = 'centrigrade';
        weight = Math.round(weight / 2.2);
        weightUnit = 'kilos';
    }

    return `It was ${temperature} ${tempUnit} outside, so ${character} went for a walk. When they got to ${location}, they stared in horror for a few moments, then ${event}. ${customName} saw the whole thing, but he was not surprised — ${character} weighs ${weight} ${weightUnit}, and it was a hot day.`
}

randomize.addEventListener('click', handleButtonClick);