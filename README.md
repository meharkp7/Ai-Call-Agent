# Twilio Integration

This project demonstrates the integration of Twilio's Programmable Voice API to automate outbound calls and dynamically handle voice interactions. The code is designed to:
1. Make outbound calls to customers based on data provided in a CSV file.
2. Use a TwiML (Twilio Markup Language) URL to provide dynamic voice responses.


## Steps performed

1. Twilio Account:

 Sign up for a Twilio account and Obtaining Account SID, Auth Token, and Twilio Phone Number.

2. CRM Data Processing :
 The CRM_Data.csv file contains customer details such as: Name, Phone No. and their Status

 The code prioritizes the customers on the basis of their priority and initiates a call with them in that order starting from those with status : Hot followed by Warm and then Cold.

3. Outbound Calls
The call_customer() function uses the Twilio API to make calls:

4. Dynamic Voice Responses
The twiml_response.py file is a Flask app that generates TwiML for voice interactions. When Twilio requests the URL during a call, the Flask app provides the necessary instructions:



