var options = {
    showLogicTab: true
};
var creator = new SurveyCreator.SurveyCreator("creatorElement", options);

creator.showToolbox = "right";
creator.showPropertyGrid = "right";

SurveyCreator
    .StylesManager
    .applyTheme("winterstone");