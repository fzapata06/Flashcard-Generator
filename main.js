var inquirer = require('inquirer');
var Cards = require('./cards.js');
var fs = require("fs");

var basicCardArr = [];
var clozeCardArr = [];

var writeToBasicCards = function(data) {
    fs.appendFile("basicCards.txt", "\r\n");
    fs.appendFile("basicCards.txt", JSON.stringify(data), function(err) {
        if (err) {
            return console.log(err);
        }
    });
};

var writeToClozeCards = function(data) {
    fs.appendFile("clozeCards.txt", "\r\n");
    fs.appendFile("clozeCards.txt", JSON.stringify(data), function(err) {
        if (err) {
            return console.log(err);
        }
    });
};

var start = function () {

    inquirer.prompt([
        {
            type: "list",
            name: "selection",
            message: "Which cards would you like to make?",
            choices: ['Basic Flashcards', 'Cloze Flashcards']
        }

    ]).then(function (answers) {

        if (answers.selection === 'Make Basic Flashcards') {
            makeBasicCard();
        } else {
            makeClozeCard();
        }
    });
};

var  makeBasicCard = function () {

    inquirer.prompt([
        {
            name: "question",
            message: "Who was the first president of the United States?"
        }, {
            name: "answer",
            message: "George Washington"
        }
    ]).then(function(answers) {
        var basicCard = new Cards.BasicCard(answers.question, answers.answer);
        basicCardArr.push(basicCard);

        });
    };
};

var  makeClozeCard = function () {

    inquirer.prompt([
        {
            name: "question",
            message: "... was the first president of the United States"
        }, {
            name: "answer",
            message: "George Washington was the first president of the United States"
        }
    ]).then(function(answers) {
        var clozeCard = new Cards.ClozeCard(answers.question, answers.answer);
        clozeCardArr.push(clozeCard);
       
        });
    };
};
