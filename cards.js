var BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
};

BasicCard.prototype.showAnswer = function() {
    console.log('Answer: ' + this.back);
};

var ClozeCard = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;
};

ClozeCard.prototype.showClozeDeletedPortion = function () {
    return this.cloze;
}

ClozeCard.prototype.showPartialText = function () {

    this.partialText = (this.text).replace(this.cloze, "______");
    return this.partialText;
}

ClozeCard.prototype.showClozeFullText = function () {
    return this.text;
}

ClozeCard.prototype.showClozeErrorMsg = function () {
    if (this.text === this.partialText) {
        console.log('Oops, the cloze deletion is not shown');
    }
}

module.exports = {
    BasicCard: BasicCard,
    ClozeCard: ClozeCard
};