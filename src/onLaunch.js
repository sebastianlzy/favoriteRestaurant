const buildSpeechletResponse = require('./buildSpeechletResponse');

module.exports = (launchRequest, session, callback) => {
    console.error(`onLaunch requestId=${launchRequest.requestId}, sessionId=${session.sessionId}`);

    // Dispatch to your skill's launch.
    getWelcomeResponse(callback);
};

function getWelcomeResponse(callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};
    const cardTitle = 'Welcome';
    const speechOutput = 'Welcome to my favorite restaurants list. ' +
        'Please tell me your favorite restaurant by saying, my favorite restaurant is popeyes';
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'Please tell me your favorite color by saying, ' +
        'my favorite color is red';
    const shouldEndSession = false;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession)
    );
}