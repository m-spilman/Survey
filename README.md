Survey
survey app using survey.js - allows someone to quickly create a survey from scratch, publish and record answers.

Basics: React front end, Express backend using PostgreSQL with Knex middelware and survey.js library.

Logic:

App component starts with the following state = { acceptedDisclaimer: false, uuid: '', survey: '', }

When a user first lands on your page they will be greated with a disclaimer modal expressing all your legalese. Once a user hits accept, three things happen. acceptedDisclaimer is set to true. A uuid is created for the user, and the object used to create the survey is added to survey in state. Essential we have decdied the user has accepted your terms, uniquely identified them, and recorded the survey they are about to take.

Currently the question number, answer, and uuid is stored in one table. The only constraint on the DB at the moment is uuid is NOT NULL. If the user somehow clears the modal and takes the survey without hitting accept, nothing should break and they will receive a 'thank you for taking our survey' when they have finished. However, nothing will be saved to the DB (they do not have a uuid and thus breaks the DB constraints). This is good, they have not agreed, so we are not recroding their response. If a user answers no questions, nothing is recorded. If they answer some, only those questions they have answered are recorded. Everything of value is being recroded, you will need to clean you data.


TO USE: 

Start will installing postgreSQL https://www.postgresql.org/ (database!)
Then install Postico for visually managing https://eggerapps.at/postico/
Once done, start Postgres and Postico. Create a database called 'surveyTest' (you can view the name in the knexfile.js) using Postico.
Install dependencies found in package.json in the root directory! -
Start with knex - npm install knex
Then run knex migrate:up - you should be able to see a survey table created in the database with the structure described above.
Then install pg, knex (already done if following directions 🤔), body-parser, cors, express, nodemon, uuid
Some of these you may already have installed globally 
---------
in the front /frontend directory install react and survey-react
---------
why two paces? we are still in development. These are technically two seperate projects making cross-origin requests, notice you install cors above..

npm start from the root dir. this is the backed running on port 3001
npm start from the fron/frontend dir this is the react front-end running on 3000
open to http://localhost:3000/ 




