exports.handler = async(context, event, callback) =>{
    
    const {CurrentTask} = event;

    //calling task handlers
    switch(CurrentTask){

        case 'greeting' :
            await greetingTaskHandler(context, event, callback);
            break;

        case 'restart_modem' :
            await restartModemTaskHandler(context, event, callback);
            break;

        case 'test_speed' :
            await testSpeedTaskHandler(context, event, callback);
            break;

        case 'replace_modem' :
            await replaceModemTaskHandler(context, event, callback);
            break;

        case 'transfer_plan' :
            await transferPlanTaskHandler(context, event, callback);
            break;

        case 'cancel_plan' :
            await cancelPlanTaskHandler(context, event, callback);
            break;

        case 'change_plan' :
            await changePlanTaskHandler(context, event, callback);
            break;

        case 'reset_password' :
            await resetPasswordTaskHandler(context, event, callback);
            break;

        case 'goodbye' :
            await goodbyeTaskHandler(context, event, callback);
            break;

        case 'collect_fallback' :
            await collectFallbackTaskHandler(context, event, callback);
            break;

        case 'fallback' :
            await fallbackHandler(context, event, callback);
            break;

        default :
            await fallbackHandler(context, event, callback);
    } 
};

//greeting handler function
const greetingTaskHandler = async (context, event, callback) => {

    const Listen = true,
          Say = `Hello! I can answer questions about your internet plan, like replacing a modem or transferring and cancelling a plan. What can I help with today?`;

    speechOut(Say, Listen, callback);
}

//restart_modem handler function
const restartModemTaskHandler = async (context, event, callback) => {

    const Listen = true,
          Say = `Locate the reset button. The router reset button is located on the back of the router. Using a paper clip or pen, gently depress the reset button and hold it until the lights on the front of the modem turn off. After several seconds, the lights on your router will turn back on. You will then need to set up your WiFi network again. Is there anything else I can help with?`;

    speechOut(Say, Listen, callback);
}

//test_speed handler function
const testSpeedTaskHandler = async (context, event, callback) => {

    const Listen = true,
          Say = `You can test your internet speed by going to www.speedtest.net. Can I help with anything else?`;

    speechOut(Say, Listen, callback);
}

//replace_modem handler function
const replaceModemTaskHandler = async (context, event, callback) => {

    const Listen = true,
          Say = `It can cost between $200 to $300 to replace a lost or broken modem. If your modem is more than 3 years old, we can replace it for free. Please use our app or website to request a new modem. Can I help with anything else?`;

    speechOut(Say, Listen, callback);
}

//transfer_plan handler function
const transferPlanTaskHandler = async (context, event, callback) => {

    const Listen = true,
          Say = `Transfering your plan to another address or account is easy and free of charge! Please use our website or app to request a transfer.`;

    speechOut(Say, Listen, callback);
}

//cancel_plan handler function
const cancelPlanTaskHandler = async (context, event, callback) => {

    const Listen = true,
          Say = `You can cancel your plan for free if you have a month-to-month contract. If you have an annual contract, you need to pay the remainder of your contract to cancel. Can I help with anything else?`;

    speechOut(Say, Listen, callback);
}

//change_plan handler function
const changePlanTaskHandler = async (context, event, callback) => {

    const Listen = true,
          Say = `You can transfer your plan for free if you have a month-to-month contract. If you have an annual contract, you can only transfer in the last month of your contract. Can I help with anything else?`;

    speechOut(Say, Listen, callback);
}

//reset_password handler function
const resetPasswordTaskHandler = async (context, event, callback) => {

    const Listen = true,
          Say = `I can help you with that. Click on the 'Forgot Password' button next to the 'Sign In' button in our website or mobile app. Next, choose SMS or email as your recovery option. You'll receive either a text message or an email with a link to reset your password. Click on the link and complete the instructions you see there to reset your password. Can I help with anything else?`;

    speechOut(Say, Listen, callback);
}

//goodbye handler function
const goodbyeTaskHandler = async (context, event, callback) => {

    const Listen = false,
          Say = `Great. Please reach out again if you have any questions.`;

    speechOut(Say, Listen, callback);
}

//collect_fallback handler function
const collectFallbackTaskHandler = async (context, event, callback) => {

    const Listen = true,
          Say = `Looks like I'm having trouble. Apologies for that. Let's start again, how can I help you today?`;

    speechOut(Say, Listen, callback);
}

//fallback handler function
const fallbackHandler = async (context, event, callback) => {

    const Listen = true,
          Say = `I'm sorry didn't quite get that. Please say that again.`;

    speechOut(Say, Listen, callback);
}

/** 
 * speech-out function 
 * @Say {string}             // message to speak out
 * @Listen {boolean}         // keep session true or false
 * @callback {function}      // return twilio function response 
 * */ 
const speechOut = (Say, Listen, callback) => {

    let responseObject = {
		"actions": []
    };

    if(Say)
        responseObject.actions.push(
            {
				"say": {
					"speech": Say
				}
			}
        );

    if(Listen)
        responseObject.actions.push(
            { 
                "listen": true 
            }
        );

    // return twilio function response
    callback(null, responseObject);
}