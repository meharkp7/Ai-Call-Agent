
# AI Phone Agent - Interactive Voice Assistant

## OVERVIEW
This project aims to develop an AI-powered phone agent capable of holding meaningful conversations, being interactive, and leading customers through an engaging experience. The goal is to design an intelligent system that mimics human-like conversation with high accuracy, low latency, and robust performance. The AI is built to guide them through the conversation in a way that feels like talking to a real person.


## KEY FEATURES

1.Voice Interaction: The agent uses speech recognition and speech synthesis technologies to interact with the user via voice.

2.Intent Recognition: The agent is designed to understand customer queries by matching them with predefined intents such as greetings, product inquiries, price inquiries, etc.

3.Natural Conversations: Based on the recognized intent, the agent responds with a natural-sounding, contextually appropriate answer.

4.User-Friendly Interface: A simple button for initiating voice commands, making the interaction intuitive.


## TECHNOLOGIES USED

| Parameter | Description |

| `JavaScript (Web API):` | `For implementing speech recognition and synthesis.`

| `Speech Recognition API:` | `To listen to and transcribe user speech in real time`

| `Speech Synthesis API:` | `To generate natural-sounding responses.`

| `HTML/CSS:` | `For creating the user interface.`



# KEY STEPS

##  1. Customer Selection:

    Identify and select specific customers to target based on predefined criteria (e.g., demographics, interests, etc.).
   
### Twilio Integration

This project demonstrates the integration of Twilio's Programmable Voice API to automate outbound calls and dynamically handle voice interactions. The code is designed to:
-  Make outbound calls to customers based on data provided in a CSV file.
-  Use a TwiML (Twilio Markup Language) URL to provide dynamic voice responses.


### Steps performed

1. Twilio Account:

- Sign up for a Twilio account and Obtaining Account SID, Auth Token, and Twilio Phone Number.

2. CRM Data Processing :
    
- The CRM_Data.csv file contains customer details such as: Name, Phone No. and their Status. The code prioritizes the customers on the basis of their priority and initiates a call with them in that order starting from those with status : Hot followed by Warm and then Cold.

3. Outbound Calls
    
-  The call_customer() function uses the Twilio API to make calls:

4. Dynamic Voice Responses
    
- The twiml_response.py file is a Flask app that generates TwiML for voice interactions. When Twilio requests the URL during a call, the Flask app provides the necessary instructions:


# 2. Call Initialization:
    
    Trigger the AI to initiate the call to the selected customer. Ensure the system is capable of connecting and establishing the call effectively.


### Steps performed
1. Trigger the Call:
    We use Twilio’s calls.create() method to initiate the call, providing the customer’s phone number, our Twilio number, and the URL for the TwiML response.

2. Ensure Authentication:
    We set up Twilio with the Account SID and Auth Token for proper authentication.

3. Connect the Call:
    We make sure the customer’s phone number is correctly formatted (with country code) and that our Twilio number can make outbound calls.

4. Provide Twilio URL:
    We give Twilio the endpoint URL (e.g., https://your-app-name.herokuapp.com/voice) to handle call instructions (like greeting or recording).

# 3. Voice Input: 
    
    The user clicks a button to start the speech recognition, and the system listens for customer input.
### Steps performed

1. Activation: 
- We click the button to activate the speech recognition system, which triggers the microphone to start listening for my voice.

2. Listening Phase: 
- Once we press the button, the system begins listening actively for any sound or speech input from me. It processes ambient sound until it detects clear speech.

3.  Detection: 
- As we speak, the system detects and captures our speech, converting it into audio data that can be processed further.

4. Speech-to-Text Conversion: 
- The system processes the captured audio and uses speech recognition algorithms to convert my spoken words into text. This text is then made available for the system to act upon.

# 4. Intent Recognition: 

    The speech input is analyzed, and the intent is matched with predefined phrases such as greetings, inquiries, or goodbyes.

### Steps performed
1. Pre-defined Intent Phrases:
- A set of intent categories is created (like "greeting," "product_inquiry," "price_inquiry," etc.) and associated with phrases that the AI will recognize.

2. Iterate Through Defined Intents: 
- The system iterates through each intent category (e.g., "greeting," "product_inquiry," etc.).
- For each intent, it checks if any predefined phrase matches part of the message provided by the user.

3. Phrase Matching:
- Inside each intent category, the system checks if the user's input contains any of the phrases associated with that intent. This is done by the message.includes(phrase) condition.
- If the user's input contains a phrase from the "greeting" intent, for instance, the          matchIntent() function will return "greeting".


# 5.Generate Response: 
    
    Based on the identified intent, a predefined response is selected and converted into speech.
### Steps performed

 1. Return Matched Intent:
- Once a match is found, the function returns the corresponding intent. This is used to generate an appropriate response.
- If no intent is matched (i.e., no phrases are found in the user's input), the system defaults to "default" to handle unrecognized speech.

2. Response Based on Intent: 
- After determining the intent, the takeCommand() function retrieves the corresponding response from the responses object.

3. Default Fallback:
- If the speech input doesn’t match any predefined phrases, the system falls back to the "default" intent and provides a generic response like "I'm sorry, I didn't quite catch that. Could you please repeat?".

# 6. Speech Output: 
    
    The generated response is spoken back to the user through the Speech Synthesis API.

### Steps performed
1. Text-to-Speech Conversion:
- Once the intent is identified and a response is selected, the system converts the text response into speech using the Speech Synthesis API.
- This provides a natural and interactive experience for the user.

2. SpeechSynthesisUtterance Object:
- A SpeechSynthesisUtterance object is created to define the properties of the speech output, such as:
    
    Rate: Controls the speed of speech.
    
    Pitch: Adjusts the tone of the voice.

    Volume: Sets how loud or soft the speech should be.


# 7. Continue the Dialogue:

    Continue the conversation by looping through the steps (speech-to-text, NLU processing, response generation, text-to-speech) until the call ends or the conversation goal is achieved.

# 8. Call Termination:

    Gracefully terminate the call once the conversation is concluded, ensuring the customer is thanked and any necessary follow-up actions are noted.







