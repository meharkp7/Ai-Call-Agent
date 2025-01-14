const btn = document.querySelector('.mic-btn');
const content = document.querySelector('.content');

const intents = {
    "greeting": ["hello", "hi", "hey", "good morning", "good evening", "hey there"],
    "product_inquiry": ["tell me about your product", "what do you sell", "give me more info about your products"],
    "price_inquiry": ["how much does it cost", "what is the price", "pricing details", "how much is it"],
    "thank_you": ["thank you", "thanks", "appreciate it"],
    "goodbye": ["bye", "goodbye", "see you", "later", "talk to you soon"],
    "default": ["sorry", "what", "huh", "can you repeat that"]
};

const responses = {
    "greeting": "Hello! How can I assist you with your purchase today?",
    "product_inquiry": "We offer a variety of products, including electronics, home appliances, and accessories. Which category interests you?",
    "price_inquiry": "Our products range from $10 to $500 depending on the item. What product are you interested in?",
    "thank_you": "You're welcome! I'm here to help.",
    "goodbye": "Goodbye! Have a great day, and thank you for your interest in our products!",
    "default": "I'm sorry, I didn't quite catch that. Could you please repeat?"
};

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}

function matchIntent(message) {
    for (const intent in intents) {
        for (const phrase of intents[intent]) {
            if (message.includes(phrase)) {
                return intent;
            }
        }
    }
    return "default"; // Return default intent if no match is found
}

function takeCommand(message) {
    const intent = matchIntent(message);
    const response = responses[intent];
    speak(response);
    content.textContent = response;
}

window.addEventListener('load', () => {
    speak("Initializing your assistant...");
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript.toLowerCase();
    content.textContent = transcript;
    takeCommand(transcript);
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});
