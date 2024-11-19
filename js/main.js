var prevNum = 0;

var quotes = [{
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
}, {
    quote: "So many books, so little time.",
    author: "Frank Zappa"
}, {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
}, {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
}, {
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch"
}, {
    quote: "Resentment is like drinking poison and waiting for your enemies to die.",
    author: "Nelson Mandela"
},]

function randomQuote() {
    var newNum;
    while (true) {
        newNum = Math.floor(Math.random() * (quotes.length - 0 + 1));
        if (newNum != prevNum) {
            break;
        }
    }
    prevNum = newNum;
    document.getElementById("quote").innerHTML = '"' + quotes[newNum].quote + '"';
    document.getElementById("quoteAuthor").innerHTML = "--" + quotes[newNum].author;
    console.log(quotes[newNum].quote, "-", quotes[newNum].author);
}