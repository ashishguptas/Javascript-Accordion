const quotes = [
    {
        quote:"\"Success is most often achieved by those who don’t know that failure is inevitable.\"",
        name:"Coco Chanel"
    },
    {
        quote:"\"I refuse to accept other people’s ideas of happiness for me. As if there’s a one size fits all standard for happiness.\"",
        name:"Kanye West"
    },
    {
        quote:"\"If you do what you’ve always done, you’ll get what you’ve always gotten.\"",
        name:"Tony Robbins"
    },
    {
        quote:"\"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.\"",
        name:"Aristotle"
    },
    {
        quote:"\"When I let go of what I am, I become what I might be.",
        name:"Lao Tzu"
    },
    {
        quote:"\"I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself.\"",
        name:"Albert Einstein"
    },
    {
        quote:"\"If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.\"",
        name:"Sheryl Sandberg"
    },
]

const quotebtn = document.querySelector('#quotebtn');
const quote = document.querySelector('#quote');
const quoteauthor = document.querySelector('#quoteauthor');

quotebtn.addEventListener('click', changeQuote);

function changeQuote(){
    let quoteNum = Math.floor(Math.random()*quotes.length);
    // console.log(quoteNum)
    quoteauthor.innerHTML = quotes[quoteNum].name
    quote.innerHTML = quotes[quoteNum].quote
}