class Quote {
  /**
   *
   * @param {string} content
   * @param {string} author
   */
  constructor(content, author) {
    this.content = content;
    this.author = author;
  }
}

const quotes = [
  new Quote(
    "The only way to do great work is to love what you do.",
    "Steve Jobs"
  ),
  new Quote("Be yourself; everyone else is already taken.", "Oscar Wilde"),
  new Quote(
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Abraham Lincoln"
  ),
  new Quote(
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Nelson Mandela"
  ),
  new Quote(
    "The future belongs to those who believe in the beauty of their dreams.",
    "Eleanor Roosevelt"
  ),
  new Quote(
    "The best way to predict your future is to create it.",
    "Peter Drucker"
  ),
  new Quote(
    "The only thing necessary for the triumph of evil is for good men to do nothing.",
    "Edmund Burke"
  ),
  new Quote(
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Franklin D. Roosevelt"
  ),
  new Quote(
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Winston Churchill"
  ),
  new Quote(
    "The only person you should try to be better than is the person you were yesterday.",
    "Matty Mullins"
  ),
];

const content = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[getRandomIndex()];

function setTodayQoute() {
  content.innerText = todayQuote.content;
  author.innerText = todayQuote.author;
}

function getRandomIndex() {
  return Math.floor(Math.random() * 10) % quotes.length;
}

setTodayQoute();
