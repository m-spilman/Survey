# Survey
Survey App using survey.js - https://surveyjs.io/

### Purpose:

This application allows someone to quickly create a survey from scratch and record answers in a PostgreSQL database. It was designed for a specific person to use on a masters thesis project. It is a little hacked together, and not exactly something I would intend for general public use. However!, it does what it needs to and was completed on time 8 )

https://calm-response.herokuapp.com/


# Legal Disclaimer
<img src="read_me_images/legal.png" width="600"> 
-------------------------------------------------------------------------

# Simple Survey
<img src="read_me_images/survey.png" width="600"> 
-------------------------------------------------------------------------

# Survey Builder
<img src="read_me_images/survey_builder.png" width="600"> 
-------------------------------------------------------------------------

# Results CSV
<img src="read_me_images/results.png" width="600"> 



### Core
React front end, Express backend using PostgreSQL with Knex middelware and survey.js library.

### Logic:

The App component starts with the following state = { acceptedDisclaimer: false, uuid: '', survey: '', }

When a user first lands on your page they will be greeted with a disclaimer modal expressing all your legalese. Once accept is clicked, three things happen. acceptedDisclaimer is set to true, a uuid is created for the user, and the object used to create the survey is added to survey in state. Essential we have decided the user has accepted your terms, uniquely identified them, and recorded the survey they are about to take.

Currently the question number, answer, and uuid is stored in one table. The only constraint on the DB is uuid is NOT NULL. If the user somehow clears the modal and takes the survey without hitting accept (this can't really happen anyways but..), nothing should break and they will receive a 'thank you for taking our survey' when they have finished. However, nothing will be saved to the DB (they do not have a uuid and thus breaks the DB constraints). This is good, they have not agreed, so we are not recording their response. If a user answers no questions, nothing is recorded. If they answer some, only those questions they have answered are recorded. Everything of value is being recroded, you will need to clean you data.


### Development: 
This project was completed as my last deliverable for Digitalcafts. It came directly after completing a React project that I put a lot of time and effort into. Already a little burnt out and with an aggressive timeline, I decided to build this full stack application on the back of the already existing survey.js library. The only requirement for this project from Digitalcrafts was that it be full stack. The person I built it for needed a legal declaimer, to be able to get the results in a CSV format, and keep someone from taking the survey more than once. The decision to use an existing library came from the following considerations: As I previously stated, I was already a little burnt out and I didn't feel it was necessary to reinvent the wheel. Survey.js was only front end. I decided my time was best spent building a backend and simply tweaking a front end that already existed. I also thought it would be good to gain some more experience adopting an existing code base into my work and to be honest, creating a survey app from scratch did not get my creative juices going. 

## Use and considerations

landing on the initial page you will greeted with either a legal disclaimer or a message stating ' We appreciate your enthusiasm, but it looks like you've been here before'. This is the result of storing a value in local storage. Can it be cleared so the survey can be taken multiple times - yes. Will most people know how to do this - No.

There is an unpublished route /admin. This will take you to a landing page where, once logged in, you can download the results or navigate to the survey builder where you can delete the current survey, clear the database containing the responses, and create a new survey. The login simply does a match on a hard coded username and password. Is this secure - No. Is it secure enough - Yes. The route is unpublished. This match is on the back end not the front. If an an authorized user accessed this area what could they do? - They could view the results, delete the results, and make a new survey. The data being recorded is not personal, it is not under and regulations such as HIPPA and it is anonymous. The takers of this survey are high school teachers. It will be given to a select non malicious group. This app does what it needs to but nothing more. The current username is lee the password is flex2020. This instance is not the one the user of this application used, this is not the username and password he set when it was delivered to him.







