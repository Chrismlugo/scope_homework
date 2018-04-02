var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// name is declared as a global variable which can then be used in the printName() function expression.
// the expression uses concatination to output the string "My name is Keith".

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// The function expression uses a local variable score which is prioritised over the global variable outside the function.
// the output is 3.

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// the variable listAnimals contains an anonymous function.
// the function loops through all the elements within the local array myAnimals.
// for each animal in the array, the index number is outputted along with the string of the animal using concatenation.



var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// The code outputs  two strings, one the result of calling allSuspects(). This variable is assigned a function which contains a local variable for suspectThree.
// when allSuspects() is called, the concatenated string outputs the global variables suspectOne,suspectTwo and suspectFour, but outputs the local variable suspectThree as it exists inside the function and is prioritised over the global variable.
// The second string outputs the global variable suspectThree.

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

//In this piece of code, an Object variable is created called detective. the object has a name property and a pet property.
// The next piece of code, variable printName() is assigned a function that takes in a detective object and outputs the name of the detective passed in.
// The last piece of code, variable detectiveInfo(), is assigned a function which changes the name value of the detective object and returns printName().
 // console.log(detectiveInfo()); outputs the name value of detective which in the function has been changed to Poirot.

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// In this piece of code, murderer is declared a globalVariable at the top.
// We then have an outerFunction() which has it's own local murderer variable.
// outerFunction also contains the innerFunction() variable which doesn't declare a local variable murderer, but if reached will re-assign the outerFunction  murderer Variable to 'Valerie'.
// the string being logged out will print out the globalVariable 'rick'. the other two murderer variables only exist within the outer and inner functions.
//

var suspect1 = {
  name: 'colonel Mustard',
  murderWeapon: 'rolling pin',
  location: 'Library'
};

var suspect2 = {
  name: 'Professor Plum',
  murderWeapon: 'Garden Hose',
  location: 'Drawing Room'
};

suspect2.name = 'Miss Scarlet';

var murdererInfo = function(suspect){
  console.log(`the murderer was ${suspect.name}, in the ${suspect.location} with the ${suspect.murderWeapon}`)

}

murdererInfo(suspect1);
murdererInfo(suspect2);
