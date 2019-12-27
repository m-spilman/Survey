
let survey = {
    "pages": [
        {
         "name": "page1",
         "elements": [
          {
           "type": "text",
           "name": "question1"
          },
          {
           "type": "radiogroup",
           "name": "question2",
           "choices": [
            "item1",
            "item2",
            "item3"
           ]
          },
          {
           "type": "radiogroup",
           "name": "question3",
           "choices": [
            "item1",
            "item2",
            "item3"
           ]
          }
         ]
        },
        {
         "name": "page2",
         "elements": [
          {
           "type": "radiogroup",
           "name": "question4",
           "choices": [
            "item1",
            "item2",
            "item3"
           ]
          },
          {
           "type": "rating",
           "name": "question5"
          },
          {
           "type": "boolean",
           "name": "question6",
           "labelTrue": "Yes",
           "labelFalse": "No"
          }
         ]
        }
       ]
   }

   module.exports = survey