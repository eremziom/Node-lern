const fs = require('fs');
const randomName = require('node-random-name');
const randomAge = require('random-age');

const people = []

const randChoice = () => {
  return (
  Math.random()
  )
}

const randomAges = (number) => {
  return(
  Math.floor(number*100)
  )
}

function timer(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function load () {
  for(let a = 0; a<20; a++) {
    const fullName = randomName();
    const splitNames = fullName.split(' ', 2);
    const object = {}
    const number = randChoice();

    if(number < 0.5){
      object.gender = "F";
    } else {
      object.gender = "M";
    };

    object.firstName = splitNames[0];
    object.lastName = splitNames[1];
    //object.age = randomAges(number);
    object.age = randomAge({type: 'adult'});

    people.push(object);

    await timer(5);
  }

  const parsedPeople = JSON.stringify(people);

  fs.writeFile('people.json', parsedPeople, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}
load();


