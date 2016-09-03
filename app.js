var triviaQuestionArray = [{
    question: 'How many volumes does Kill Bill, the movie series, have?',
    possibleAnswerA:'2',
    possibleAnswerB:'12',
    possibleAnswerC:'20', 
    possibleAnswerD:'4',
    correctAnswer: '2',
}, {
    question: 'What is the main character\'s code name?',
    possibleAnswerA:'Vernetta Green',
    possibleAnswerB:'Black Mamba',
    possibleAnswerC:'Cotton Mouth', 
    possibleAnswerD:'Bill himself',
    correctAnswer: 'Black Mamba',
}, {
    question: 'Did The Crazy 88\'s really have eighty-eight people in their gang?',
    possibleAnswerA:'No way!',
    possibleAnswerB:'This is a trick question...',
    possibleAnswerC:'Yes', 
    possibleAnswerD:'Who knows...',
    correctAnswer:'Who knows...',
}, {
    question: 'Who wrote and directed this two-part movie?',
    possibleAnswerA:'No one',
    possibleAnswerB:'No one',
    possibleAnswerC:'Quentin Tarantino', 
    possibleAnswerD:'No one',
    correctAnswer:'Quentin Tarantino',
}, {
    question: 'What kind of sword is the most sought after due to it\'s rarity and craftsmanship?',
    possibleAnswerA:'Hattori Hanzo Swords',
    possibleAnswerB:'Swiss Army knives',
    possibleAnswerC:'Quentin Tarantino\'s Swords', 
    possibleAnswerD:'Swords are for killing and that\'s no goods',
    correctAnswer:'Hattori Hanzo Swords',
}, {
    question: 'How much did Kill Bill Vol.1 gross in the box office worldwide?',
    possibleAnswerA:'$50 million',
    possibleAnswerB:'$180.9 million',
    possibleAnswerC:'$0 and no sense', 
    possibleAnswerD:'$110.5 million',
    correctAnswer:'$180.9 million',
}, {
    question: 'What is not one of the nick names for the main character?',
    possibleAnswerA:'Kiddo',
    possibleAnswerB:'Cutie Pie',
    possibleAnswerC:'Black Mamba', 
    possibleAnswerD:'The Bride',
    correctAnswer:'Cutie Pie',
}, {
    question: 'What wakes Beatrix from her 4-year long coma?',
    possibleAnswerA:'staff member Buck',
    possibleAnswerB:'Elle Driver',
    possibleAnswerC:'The Crazy 88\'s', 
    possibleAnswerD:'misquito bite',
    correctAnswer:'misquito bite',
}, {
    question: 'How old was O-Ren when she got to revenge her parents?',
    possibleAnswerA:'5 years old',
    possibleAnswerB:'11 years old',
    possibleAnswerC:'16 years old', 
    possibleAnswerD:'25 years old',
    correctAnswer:'11 years old',
}, {
    question: 'What was Gogo\'s main weapon of choice?',
    possibleAnswerA:'bladed meteor hammer',
    possibleAnswerB:'darts',
    possibleAnswerC:'nunchucks', 
    possibleAnswerD:'love',
    correctAnswer:'bladed meteor hammer',
}];

var correctAnswerArray = [];
var answerSelect = [];

var correct = 0;
var incorrect = 0;
var outOfTime;
var number = 36;

//making my buttons do something when they get clickity clicked
function addClickListeners() {
    $('#start').click(createTriviaGame);
    $('#finish').click(finishMenu);
    $('#finishAgain').click(createTriviaGame);
    //$('.answer').click(pullInfoFromButton);
}


//Display all questions to page
function createTriviaGame(){
    $('#countDownTimer').show();
    $('#mainContent').show();
    $('#startMenu').hide();
    for(var i = 0; i < triviaQuestionArray.length; i++){
        //creates and appends <h3> of "questions"
        $('<h3>' + (i + 1) + ". " + triviaQuestionArray[i].question + '</h3>').appendTo('#triviaQuestion' + i);
        
        
        //creates radio buttons dynamically using jquery AND appends multiple choice possible answers
        $('<input id="answer1" type="radio" class="answer q' + i + '"  name="answer"><span id="ansOption1" + i></span>').html(triviaQuestionArray[i].possibleAnswerA).appendTo('.answerOptions' + i);
        $('<input id="answer2" type="radio" class="answer q' + i + '" name="answer"><span id="ansOption2" + i></span>').html(triviaQuestionArray[i].possibleAnswerB).appendTo('.answerOptions' + i);
        $('<input id="answer3" type="radio" class="answer q' + i + '" name="answer"><span id="ansOption3" + i></span>').html(triviaQuestionArray[i].possibleAnswerC).appendTo('.answerOptions' + i);
        $('<input id="answer4" type="radio" class="answer q' + i + '" name="answer"><span id="ansOption4" + i></span>').html(triviaQuestionArray[i].possibleAnswerD).appendTo('.answerOptions' + i);
    
        correctAnswerArray.push(triviaQuestionArray[i].correctAnswer);

    }
    console.log(correctAnswerArray);
    $('#finish').show();
    timeIsUp();

    //calls button
    $('.answer').click(pullInfoFromButton);
}   

//My timer function
function timeIsUp(){
    outOfTime = setTimeout(finishMenu, 36000);
    counter = setInterval(decrement, 1000);
    console.log(number);

}
//my timer fuction part two
function decrement(){
    number--;
    $('#countDownTimer').html('Time Remaining: ' + number);
    if (number === 0){
    clearInterval(counter);
    }
}

function finishMenu(){
    answerCount();
    $('#mainContent').hide();
    $('#finish').hide();
    $('#finishAgain').show();
    
    clearInterval(counter);
    $('#countDownTimer').html("Seconds Unused: " + number - 1);

    $('#correct').html('Correct Answers: ' + correct);
    console.log('correct answers: ' + incorrect);
    $('#incorrect').html('Incorrect Answers: ' + incorrect);
    console.log('incorrect answers: ' + incorrect);

}

function pullInfoFromButton() {
    var answerText = $(this).text();
    console.log(answerText);
    //index
    var questionNumber = $(this).attr('class').slice(-1);
    answerSelect[questionNumber] = answerText;
    console.log(answerSelect);
}


function answerCount() {

    for(var i = 0; i<correctAnswerArray.length; i++){
        if (answerSelect[i] === correctAnswerArray[i]){
            correct++;
        } 
    } 
    incorrect = correctAnswerArray.length - correct;
}

//starts the trivia game!
$(document).ready(function() {
    addClickListeners();

});
