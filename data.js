const questions = [
    {
        question: "what's your favorite weekend activity?",
        answers: [
            {text: "staying in all the way! (i love my sleep)", trait: "introverted bear"},
            {text: "going out partying", trait: "extroverted bear"},
            {text: "going out of my comfort zone and trying something new", trait: "adventurous bear"},
            {text: "none of your business", trait: "grumpy bear"}
        ]
    },
    {
        question: "at a party, what do you find yourself doing?",
        answers: [
            {text: "instagram reels", trait: "introverted bear"},
            {text: "being the life of the party", trait: "extroverted bear"},
            {text: "exploring around the vicinity (in a non creepy way)", trait: "adventurous bear"},
            {text: "judging everyone around me", trait: "grumpy bear"}
        ]
    },
    {
        question: "pick a snack:",
        answers: [
            {text: "hot tea and cookies at home", trait: "introverted bear"},
            {text: "chips and soda with a bunch of friends", trait: "extroverted bear"},
            {text: "street food from a place I've never been", trait: "adventurous bear"},
            {text: "whatever. food is food.", trait: "grumpy bear"}
        ]
    },
    {
        question: "your ideal vacation looks like:",
        answers: [
            {text: "a cozy cabin in the woods", trait: "introverted bear"},
            {text: "an all-inclusive beach resort party", trait: "extroverted bear"},
            {text: "backpacking across the mountains", trait: "adventurous bear"},
            {text: "staying home. vacations are overrated.", trait: "grumpy bear"}
        ]
    },
    {
        question: "what's your reaction when plans get canceled?",
        answers: [
            {text: "sweet! more me-time.", trait: "introverted bear"},
            {text: "NOOO, i had my outfit ready!", trait: "extroverted bear"},
            {text: "eh, guess i'll find a new adventure.", trait: "adventurous bear"},
            {text: "of course. people are unreliable.", trait: "grumpy bear"}
        ]
    },
    {
        question: "which of these sounds the most fun?",
        answers: [
            {text: "reading a book with a blanket burrito", trait: "introverted bear"},
            {text: "karaoke night with the squad", trait: "extroverted bear"},
            {text: "spontaneous road trip", trait: "adventurous bear"},
            {text: "leaving me alone sounds fun", trait: "grumpy bear"}
        ]
    },
    {
        question: "your phone battery is at 2% — you:",
        answers: [
            {text: "panic and rush home. my safe space.", trait: "introverted bear"},
            {text: "borrow someone's charger, instant new friend!", trait: "extroverted bear"},
            {text: "meh, adventure without a phone sounds thrilling", trait: "adventurous bear"},
            {text: "good. no one can bother me now.", trait: "grumpy bear"}
        ]
    },
    {
        question: "how do you feel about small talk?",
        answers: [
            {text: "exhausting. i'd rather have deep convos.", trait: "introverted bear"},
            {text: "love it! meeting people is the best.", trait: "extroverted bear"},
            {text: "i’d rather be out doing things than talking.", trait: "adventurous bear"},
            {text: "it's fake and a waste of breath.", trait: "grumpy bear"}
        ]
    },
    {
        question: "you find a secret door in your house. you:",
        answers: [
            {text: "ignore it. that sounds like a horror movie start.", trait: "introverted bear"},
            {text: "gather everyone for a group adventure!", trait: "extroverted bear"},
            {text: "open it immediately. no regrets.", trait: "adventurous bear"},
            {text: "board it up. i don't need extra problems.", trait: "grumpy bear"}
        ]
    },
    {
        question: "describe your ideal morning:",
        answers: [
            {text: "coffee, peace, and NO alarms.", trait: "introverted bear"},
            {text: "brunch with friends, mimosas flowing!", trait: "extroverted bear"},
            {text: "waking up in a new city, ready to explore", trait: "adventurous bear"},
            {text: "sleeping until the afternoon. don't judge me.", trait: "grumpy bear"}
        ]
    }
];

const traitsInfo = {
    "introverted bear": {
        title: "introverted bear",
        description: "you love cozy spaces, deep thoughts, and peaceful naps. you recharge best when you're chilling solo!",
        image: "https://media.tenor.com/1eZck5E2sAkAAAAj/mimibubu.gif"
    },
    "extroverted bear": {
        title: "extroverted bear",
        description: "you’re the life of the party! you thrive in groups, love loud laughs, and live for exciting adventures with others.",
        image: "https://media.tenor.com/r-O2xbfTEWIAAAAj/bear-dance-no-background.gif"
    },
    "adventurous bear": {
        title: "adventurous bear",
        description: "you crave new experiences, thrilling challenges, and spontaneous journeys. comfort zones? never heard of 'em.",
        image: "https://media.tenor.com/jyM5vrXtwsEAAAAj/bubu-dudu-sseeyall.gif"
    },
    "grumpy bear": {
        title: "Grumpy Bear",
        description: "you’re blunt, honest, and not here for anyone's nonsense. you value your time, your space, and your peace!",
        image: "https://media.tenor.com/hoblaIrKqRgAAAAj/bubu-dudu.gif"
    }
};


export {questions, traitsInfo};
