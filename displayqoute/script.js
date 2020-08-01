//Get All Quotes
const quotes = [
    {
        quote:
            "To succeed in life you need two things:ignorance and confidence.",
        author: "Mark twin"
    },
    {
        quote:
            "We are all broken thats why light gets in.",
        author: "Ronald knox"
    },
    {
        quote: "The key to succese is failure.",
        author: "Michael jordan"
    },
    {
        quote:
            "forgiveness is another name of freedom. ",
        author: "lhumpa Lahiri"
    },
    {
        quote:
            "Tell me and i forget,Teach me and i remeber,Involve me and i learn.",
        author: "Benjamin franklin"
    },
    {
        quote:
            "Programmers are constantly making things more complicated than they need to be because future. Program for Today.",
        author: "David Heinemeier Hansson"
    }
];

//Button Generate Quotes
const btn = document.querySelector('.generate');

//Add Event Listener
btn.addEventListener('click', () => {

    //Get Random text of Quotes
    let random = Math.floor(Math.random() * quotes.length);
    // console.log(random);

    //Now Show Text On Screen
    document.querySelector('.quote').innerText = quotes[random].quote;
    document.querySelector('.author').innerText = quotes[random].author;

});