const btn = document.querySelector('.mic-btn');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evening Sir...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing JARVIS...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function handleAgentCommand(message) {
    if (message.includes('call') && message.includes('contact')) {
        const contactName = message.replace('call', '').replace('contact', '').trim();
        if (contactName) {
            speak(`Searching for the contact ${contactName}`);
            // Simulate searching and calling the contact
            initiateCall(contactName);
        } else {
            speak("Please specify the contact name you want to call.");
        }
    } else if (message.includes('dial')) {
        const phoneNumber = message.replace('dial', '').trim();
        if (phoneNumber && /^\d+$/.test(phoneNumber)) {
            speak(`Dialing the number ${phoneNumber}`);
            // Simulate dialing the number
            dialNumber(phoneNumber);
        } else {
            speak("Please provide a valid phone number to dial.");
        }
    } else if (message.includes('recent calls')) {
        speak("Fetching your recent calls.");
        // Simulate showing recent call logs
        showRecentCalls();
    } else if (message.includes('missed calls')) {
        speak("Fetching your missed calls.");
        // Simulate showing missed call logs
        showMissedCalls();
    } else if (message.includes('end call')) {
        speak("Ending the current call.");
        // Simulate ending the call
        endCall();
    } else {
        speak("I'm sorry, I didn't understand that. Can you repeat your request?");
    }
}

// Example helper functions
function speak(text) {
    console.log(text); // Replace with text-to-speech functionality
}

function initiateCall(contactName) {
    console.log(`Initiating call to ${contactName}`); 
    // Add your logic to find and call the contact
}

function dialNumber(phoneNumber) {
    console.log(`Dialing number: ${phoneNumber}`);
    // Add your logic to dial the number
}

function showRecentCalls() {
    console.log("Displaying recent call logs...");
    // Add logic to fetch and display recent calls
}

function showMissedCalls() {
    console.log("Displaying missed call logs...");
    // Add logic to fetch and display missed calls
}

function endCall() {
    console.log("Call ended.");
    // Add logic to end the call
}
