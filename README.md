
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
1.    Make outbound calls to customers based on data provided in a CSV file.
2. Use a TwiML (Twilio Markup Language) URL to provide dynamic voice responses.


### Steps performed

1. Twilio Account:

    Sign up for a Twilio account and Obtaining Account SID, Auth Token, and Twilio Phone Number.

2. CRM Data Processing :
    
    The CRM_Data.csv file contains customer details such as: Name, Phone No. and their Status. The code prioritizes the customers on the basis of their priority and initiates a call with them in that order starting from those with status : Hot followed by Warm and then Cold.

3. Outbound Calls
    
    The call_customer() function uses the Twilio API to make calls:

4. Dynamic Voice Responses
    
    The twiml_response.py file is a Flask app that generates TwiML for voice interactions. When Twilio requests the URL during a call, the Flask app provides the necessary instructions:


# 2. Call Initialization:

    
    Trigger the AI to initiate the call to the selected customer. Ensure the system is capable of connecting and establishing the call effectively.

# 3. Voice Input: 
    
    The user clicks a button to start the speech recognition, and the system listens for customer input.

# 4. Intent Recognition: 

    The speech input is analyzed, and the intent is matched with predefined phrases such as greetings, inquiries, or goodbyes.

# 5.Generate Response: 
    
    Based on the identified intent, a predefined response is selected and converted into speech.

# 6. Speech Output: 
    
    The generated response is spoken back to the user through the Speech Synthesis API.

# 7. Continue the Dialogue:

    Continue the conversation by looping through the steps (speech-to-text, NLU processing, response generation, text-to-speech) until the call ends or the conversation goal is achieved.

# 8. Call Termination:

    Gracefully terminate the call once the conversation is concluded, ensuring the customer is thanked and any necessary follow-up actions are noted.







