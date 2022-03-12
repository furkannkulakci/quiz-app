// QUIZ APP

// Question Constructor
function Question (text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Question Prototype
Question.prototype.checkAnswer = function(answer) {
    return this.answer === answer;
}

// Quiz Constructor
function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

// Quiz Prototype => Soru çağırma metodu.
Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];
}

// Quiz isFinish => Quiz bitti mi diye kontrol eden metod.
Quiz.prototype.isFinish = function() {
    return this.questions.length === this.questionIndex;
}

// Quiz guess => Tahmin metodu.
Quiz.prototype.guess = function(answer) {
    var question = this.getQuestion();

    if(question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

var q1 = new Question ("Türkiye'nin ilk Safari Parkı hangi ilimizde açılmıştır?" , ["Mersin" , "İzmir" , "Gaziantep" , "Konya"] , "Gaziantep");

var q2 = new Question ("Tarihçilerin kutbu olarak bilinen dünyaca ünlü tarihçimiz kimdir?", ["Halil İnalcık" , "ilber Ortaylı" , "Mehmet Fuat Köprülü" , "Nora Şeni"] , "Halil İnalcık");

var q3 = new Question ("Cristiano Ronalda hangi takımda futbol oynamamıştır?" , ["Manchester City" , "Sporting Lizbon" , "Manchester United" , "Real Madrid"] , "Manchester City");

var q4 = new Question ("İcadıyla çığır açan PCR kim tarafından keşfedilmiştir?" , ["Daniel Nathans" , "George E. Palade" , "Roger Guillemin" , "Kary Banks Mullis"] , "Kary Banks Mullis");

var q5 = new Question ("Hangi alkollü içki en yüksek alkol oranına sahiptir?" , ["Rakı" , "Gin" , "Küba Romu" , "Absent"] , "Absent");

var q6 = new Question ("Atatürk'ün yurt gezilerinde (1935-1938) yılları arasında kullandığı trenin adı nedir?" , ["Beyaz Tren" , "Kara Duman" , "Demir Türk" , "Anadolu"] , "Beyaz Tren");

var q7 = new Question ("Hangi hormon doğumu başlatır?" , ["Östrojen" , "Progesteron" , "Oksitosin" , "Lüthenize edici hormon"] , "Oksitosin");

var q8 = new Question ("FIFA Dünyada Yılın Futbolcusu ödülünü en çok kim kazanmıştır?" , ["Cristiano Ronaldo" , "Ronaldinho" , "Lionel Messi" , "Robert Lewandovski"] , "Lionel Messi");

var q9 = new Question ("Hangi meridyen veya paralel Türkiye sınırlarından geçmez?" , ["26 doğu meridyeni" , "45 doğu meridyeni" , "36 kuzey paralelleri" , "42 kuzey paralelleri"] , "45 doğu meridyeni");

var q10 = new Question ("Hangi şehir daha doğudadır?" , ["Sivas" , "Siirt" , "Elazığ" , "Mardin"] , "Siirt");

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

// Start Quiz
var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion() {
    if(quiz.isFinish()) {
        showScore();
    } else {

        var question = quiz.getQuestion();
        var choices = question.choices;

        document.querySelector('#question').textContent = question.text;

        for (var i=0; i<choices.length; i++) {
            var element = document.querySelector('#choice'+i);
            element.innerHTML = choices[i];

            guess('btn'+i,choices[i]);
        }
        showProgress();
    }
}

function guess(id,guess) {
    var btn = document.getElementById(id);
    btn.onclick = function() {
        quiz.guess(guess);
        loadQuestion();
    }
}

function showScore() {
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;

    document.querySelector('.card-body').innerHTML = html;
}

function showProgress() {
    var totalQuestion = quiz.questions.length;
    var questionNumber = quiz.questionIndex+1;

    document.querySelector('#progress').innerHTML = "Question " + questionNumber + " of " + totalQuestion;
}