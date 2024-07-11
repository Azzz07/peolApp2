/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function otpRule(clientAPI) {
  // Retrieve the phone number from the form control
  let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
  let phoneNumber = phoneNumberControl.getValue();

  // if (phoneNumber === "7259303952"){
  //       clientAPI.executeAction("/n44/Actions/toTabs.action");
  //       }else{
  
  // Define the controls for OTP and Resend OTP buttons
  let formCellContainer = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');
  let getOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton0');
  let resendOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell0').getControl('FormCellButton2');
  
  // Define the service path and entity set for the read operation
  const servicePath = '/n44/Services/capurl.service';
  const entitySet = 'Supplier_table';
  
  // Perform the read operation to check if the user exists
  return clientAPI.read(servicePath, entitySet, [], '')
  .then(users => {
  let filteredUsers = users.map(user => {
  return { phone_main: user.phone_main };
  });
  
  let userExists = filteredUsers.some(user => user.phone_main === phoneNumber);
  
  if (userExists) {
  // User exists, proceed with OTP generation and start the countdown timer
  resendOtpButtonControl.setVisible(true);
  resendOtpButtonControl.setAlignment('Right');
  getOtpButtonControl.setEnabled(false);
  
  // Start the countdown timer
  let countdown = 120; // 120 seconds for 2 minutes
  let timer = setInterval(function() {
  let minutes = parseInt(countdown / 60, 10);
  let seconds = parseInt(countdown % 60, 10);
  
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  
  // Update the title of the resendOtpButtonControl with the remaining time
  resendOtpButtonControl.setTitle(`Resend Otp In ${minutes}:${seconds}`);
  
  countdown--;
  
  // When countdown reaches zero, clear the interval, hide the enterOtpControl, and enable the getOtpButtonControl
  if (countdown <= 0) {
  clearInterval(timer);
  formCellContainer.setVisible(false);
  getOtpButtonControl.setEnabled(true);
  resendOtpButtonControl.setVisible(false); // Hide the Resend OTP button after the timer ends
  }
  }, 1000);
  
  // Existing code for sending OTP
  // Replace 'NavigateToMainContentPage' with the actual action path to navigate
  var phoneNumberWithCountryCode = "+91" + phoneNumber;
  const myHeaders = new Headers();
  myHeaders.append("content", "application/json");
  myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
  myHeaders.append("Accept-Language", "en-US");
  myHeaders.append("url", "https://verification.api.sinch.com/verification/v1/verifications");
  myHeaders.append("Method", "POST");
  myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Basic c2ItN2FhZmVkMWItOTE1Ni00OWVlLTkxMjUtYTVkMDBlYTQwMGQ1IWIyNzIxNzV8aXQtcnQtZThiNGVhMmV0cmlhbCFiNTUyMTU6MzliMzJjYzAtYzg2NS00ZjYyLWJhNjYtNWRhZjQ1NWEyMzA2JERwVEIxeF8xLUk1dnByNGg3bVFNd2J3dHVfWkFPUmh5ZDk1LTE1XzVkMEE9");
  
  const raw = JSON.stringify({
  "identity": {
  "type": "number",
  "endpoint": phoneNumberWithCountryCode
  },
  "method": "sms",
  "smsOptions": {
  "expiry": "00:02:00"
  }
  });
  
  const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
  };
  
  fetch("https://e8b4ea2etrial.it-cpitrial06-rt.cfapps.us10-001.hana.ondemand.com/http/sinch", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.error(error));
  alert("OTP sent and its valid for only 2min");
  formCellContainer.setVisible(true);
  getOtpButtonControl.setEnabled(false);
  
  } else {
  // No matching user found, show an error message
  alert("Phone number is not valid.");
  }
  })
  .catch(error => {
  // Handle any errors from the read operation
  console.error("Read operation failed: ", error);
  });
  } 
// }















// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// // export default function otpRule(clientAPI) {
// //     debugger
// //   // Retrieve the phone number from the form control
  
// //   let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// //   let p = phoneNumberControl.getValue();

// //   // let enterOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty1');
// //   // let timerControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty2');
// // //   let getOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellButton0');

// // //   // if (p === "7259303952"){
// // //   // if (p === "9591485083"){
// // //     // clientAPI.executeAction("/n44/Actions/toTabs.action");
// // //   // }else{
// // // //   if ( p.length === 10 ) { //&& !p.startsWith('91'))
// // // //     // If it's 10 characters long and doesn't start with '91', concatenate '91' to the beginning
// // // //     p = '91' + p;
// // // // }
// // // // let a = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');
// // // let formCellContainer = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2');

// // // // Use the API to get the 'Enterotp' control
// // // let enterOtpControl = formCellContainer.getControl('FormCellSimpleProperty1');

// // // // Use the API to set the 'Enterotp' control as visible
// // //   const servicePath = '/n44/Services/capurl.service';
// // //   const entitySet = 'Supplier_table';
// // //   return clientAPI.read(servicePath, entitySet, [], '')
// // //   .then(users => {
     
// // //       let filteredUsers = users.map(user => {
// // //           return { phone_main: user.phone_main};
// // //           });
     
// //   let userExists = filteredUsers.some(user => user.phone_main === p);
// //   if (userExists ){
// // //   // Replace 'NavigateToMainContentPage' with the actual action path to navigate
// // //   // var phoneNumber = "+" + p;
// // //   // Make the Enterotp control visible
// // // enterOtpControl.setVisible(true);
// // // timerControl.setVisible(true);
// // // phoneNumberControl._control._observable._control.context.element.context.element._model._model.data.IsVisible(false);
// // // // clientAPI._control._builder._builtData.Enabled = false;
// // // getOtpButtonControl.setEnabled(false);

// // // // Initialize a countdown timer for 2 minutes
// // // let countdown = 120; // 120 seconds for 2 minutes

// // // // Update the countdown timer every second
// // // let timer = setInterval(function() {
// // // // Calculate the minutes and seconds from countdown
// // // let minutes = parseInt(countdown / 60, 10);
// // // let seconds = parseInt(countdown % 60, 10);

// // // // Ensure that minutes and seconds are two digits
// // // minutes = minutes < 10 ? "0" + minutes : minutes;
// // // seconds = seconds < 10 ? "0" + seconds : seconds;

// // // // Update the value of the Timer control with the remaining time
// // // // timerControl.setCaption("hiiii");
// // // // timerControl.setValue(`${minutes}:${seconds}`);
// // // timerControl.setValue(`${minutes}:${seconds}`);
// // // // enterOtpControl.setCaption(`OTP ( ${minutes}:${seconds} )`);

// // // // Decrease the countdown timer
// // // countdown--;

// // // // If the countdown reaches 0, clear the interval, hide the OTP control, and re-enable the 'Get OTP' button
// // // if (countdown <= 0) {
// // // clearInterval(timer);
// // // enterOtpControl.setVisible(false);
// // // timerControl.setVisible(false);
// // // getOtpButtonControl.setEnabled(true);

// // // // Re-enable the 'Get OTP' button

// // // }
// // // }, 1000);

  
// //   var phoneNumber = "+91" + p;
// //   const myHeaders = new Headers();
// //   myHeaders.append("content", "application/json");
// //   myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
// //   myHeaders.append("Accept-Language", "en-US");
// //   myHeaders.append("url", "https://verification.api.sinch.com/verification/v1/verifications");
// //   myHeaders.append("Method", "POST");
// //   myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
// //   myHeaders.append("Content-Type", "application/json");
// //   myHeaders.append("Authorization", "Basic c2ItODBiNjFkMjItMmQ0My00YWYzLTkyZjUtMmY3NmRkM2EzMzMzIWIyNzQ2MTl8aXQtcnQtZjY2MjNhNTB0cmlhbCFiMjY2NTU6YmE2NGE3ZTEtMTJiMS00YTNlLTlhNzItZjkxZTI1YTA4YzZkJEVCYzlzWUJQelZkOVJ2Zlp6UmZTZHdTQ1hQcHhEQ2FWT18zZVY2d0ZzazQ9");
  
// //   const raw = JSON.stringify({
// //     "identity": {
// //       "type": "number",
// //       "endpoint": `${phoneNumber}`
// //     },
// //     "method": "sms",
// //     "smsOptions": {
// //         "expiry":"00:02:00"
// //     } 
// //   });
  
// //   const requestOptions = {
// //     method: "POST",
// //     headers: myHeaders,
// //     body: raw,
// //     redirect: "follow"
// //   };
  
// //   fetch("https://f6623a50trial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com/f6623a50trial/http/sinch", requestOptions)
// //     .then((response) => response.text())
// //     .then((result) => console.log(result))
// //     .catch((error) => console.error(error));
// //     alert("OTP sent and its valid for only 2min");
// //     // a._control._model._model.data.IsVisible = true
// //     enterOtpControl.setVisible(true);

  
// // }
// // else {
// //  // If no matching user is found, show an error message
// //  // Replace 'ShowInvalidCredentialsMessage' with the actual action path to show the message
// //   alert("Phone no is Not Valid");
// //  }
// // // })
// // }
// // // }

// // =======================================================================================================
// // let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// // let phoneNumber = phoneNumberControl.getValue();

// // // Get the 'Get OTP' button control

// // // Use the API to get the 'Enterotp' and 'Timer' controls
// // let enterOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty1');
// // let timerControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty2');
// // let getOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellButton0');

// // // Disable the 'Get OTP' button to prevent multiple clicks

// // // Check if the entered phone number is valid (replace with your validation logic)
// // if (phoneNumber === "123") {
// // // Disable the 'Get OTP' button to prevent multiple clicks


// // // Existing code to send OTP...
// // // ...

// // // Make the Enterotp control visible
// // enterOtpControl.setVisible(true);
// // timerControl.setVisible(true);
// // // phoneNumberControl._control._observable._control.context.element.context.element._model._model.data.IsVisible(false);
// // // clientAPI._control._builder._builtData.Enabled = false;
// // getOtpButtonControl.setEnabled(false);

// // // Initialize a countdown timer for 2 minutes
// // let countdown = 120; // 120 seconds for 2 minutes

// // // Update the countdown timer every second
// // let timer = setInterval(function() {
// // // Calculate the minutes and seconds from countdown
// // let minutes = parseInt(countdown / 60, 10);
// // let seconds = parseInt(countdown % 60, 10);

// // // Ensure that minutes and seconds are two digits
// // minutes = minutes < 10 ? "0" + minutes : minutes;
// // seconds = seconds < 10 ? "0" + seconds : seconds;

// // // Update the value of the Timer control with the remaining time
// // timerControl.setValue(`${minutes}:${seconds}`);

// // // Decrease the countdown timer
// // countdown--;

// // // If the countdown reaches 0, clear the interval, hide the OTP control, and re-enable the 'Get OTP' button
// // if (countdown <= 0) {
// // clearInterval(timer);
// // enterOtpControl.setVisible(false);
// // timerControl.setVisible(false);
// // getOtpButtonControl.setEnabled(true);

// // // Re-enable the 'Get OTP' button

// // }
// // }, 1000);
// // } else {
// // // If the phone number is not valid, show an error message and re-enable the 'Get OTP' button
// // alert('Invalid phone number. Please try again');
// // // Re-enable the 'Get OTP' button

// // }


// // export default function otpRule(clientAPI) {
// //   debugger
// // // Retrieve the phone number from the form control
// // let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// // let phoneNumber = phoneNumberControl.getValue();

// // // Get the 'Get OTP' button control

// // // Use the API to get the 'Enterotp' and 'Timer' controls
// // let enterOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty1');
// // let timerControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty2');
// // let getOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellButton0');

// // // Disable the 'Get OTP' button to prevent multiple clicks

// // // Check if the entered phone number is valid (replace with your validation logic)
// // if (phoneNumber === "123") {
// // // Disable the 'Get OTP' button to prevent multiple clicks


// // // Existing code to send OTP...
// // // ...

// // // Make the Enterotp control visible
// // enterOtpControl.setVisible(true);
// // timerControl.setVisible(true);
// // // phoneNumberControl._control._observable._control.context.element.context.element._model._model.data.IsVisible(false);
// // // clientAPI._control._builder._builtData.Enabled = false;
// // getOtpButtonControl.setEnabled(false);

// // // Initialize a countdown timer for 2 minutes
// // let countdown = 120; // 120 seconds for 2 minutes

// // // Update the countdown timer every second
// // let timer = setInterval(function() {
// // // Calculate the minutes and seconds from countdown
// // let minutes = parseInt(countdown / 60, 10);
// // let seconds = parseInt(countdown % 60, 10);

// // // Ensure that minutes and seconds are two digits
// // minutes = minutes < 10 ? "0" + minutes : minutes;
// // seconds = seconds < 10 ? "0" + seconds : seconds;

// // // Update the value of the Timer control with the remaining time
// // timerControl.setValue(`${minutes}:${seconds}`);

// // // Decrease the countdown timer
// // countdown--;

// // // If the countdown reaches 0, clear the interval, hide the OTP control, and re-enable the 'Get OTP' button
// // if (countdown <= 0) {
// // clearInterval(timer);
// // enterOtpControl.setVisible(false);
// // timerControl.setVisible(false);
// // getOtpButtonControl.setEnabled(true);

// // // Re-enable the 'Get OTP' button

// // }
// // }, 1000);
// // } else {
// // // If the phone number is not valid, show an error message and re-enable the 'Get OTP' button
// // alert('Invalid phone number. Please try again');
// // // Re-enable the 'Get OTP' button

// // }
// // }
// // ================================================================================
// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// // export default function otpRule(clientAPI) {
// //   debugger
// // // Retrieve the phone number from the form control

// // let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// // let p = phoneNumberControl.getValue();

// // if (p === "7259303952"){
// //   clientAPI.executeAction("/n44/Actions/toTabs.action");
// // }else{
// // //   if ( p.length === 10 ) { //&& !p.startsWith('91'))
// // //     // If it's 10 characters long and doesn't start with '91', concatenate '91' to the beginning
// // //     p = '91' + p;
// // // }
// // // let a = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');
// // let formCellContainer = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2');

// // // Use the API to get the 'Enterotp' control
// // let enterOtpControl = formCellContainer.getControl('FormCellSimpleProperty1');

// // // Use the API to set the 'Enterotp' control as visible
// // const servicePath = '/n44/Services/capurl.service';
// // const entitySet = 'Supplier_table';
// // return clientAPI.read(servicePath, entitySet, [], '')
// // .then(users => {
   
// //     let filteredUsers = users.map(user => {
// //         return { phone_main: user.phone_main};
// //         });
   
// // let userExists = filteredUsers.some(user => user.phone_main === p);
// // if (userExists ){
// // // Replace 'NavigateToMainContentPage' with the actual action path to navigate
// // // var phoneNumber = "+" + p;
// // var phoneNumber = "+91" + p;
// // const myHeaders = new Headers();
// // myHeaders.append("content", "application/json");
// // myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
// // myHeaders.append("Accept-Language", "en-US");
// // myHeaders.append("url", "https://verification.api.sinch.com/verification/v1/verifications");
// // myHeaders.append("Method", "POST");
// // myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
// // myHeaders.append("Content-Type", "application/json");
// // myHeaders.append("Authorization", "Basic c2ItODBiNjFkMjItMmQ0My00YWYzLTkyZjUtMmY3NmRkM2EzMzMzIWIyNzQ2MTl8aXQtcnQtZjY2MjNhNTB0cmlhbCFiMjY2NTU6YmE2NGE3ZTEtMTJiMS00YTNlLTlhNzItZjkxZTI1YTA4YzZkJEVCYzlzWUJQelZkOVJ2Zlp6UmZTZHdTQ1hQcHhEQ2FWT18zZVY2d0ZzazQ9");

// // const raw = JSON.stringify({
// //   "identity": {
// //     "type": "number",
// //     "endpoint": `${phoneNumber}`
// //   },
// //   "method": "sms",
// //   "smsOptions": {
// //       "expiry":"00:02:00"
// //   } 
// // });

// // const requestOptions = {
// //   method: "POST",
// //   headers: myHeaders,
// //   body: raw,
// //   redirect: "follow"
// // };

// // fetch("https://f6623a50trial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com/f6623a50trial/http/sinch", requestOptions)
// //   .then((response) => response.text())
// //   .then((result) => console.log(result))
// //   .catch((error) => console.error(error));
// //   alert("OTP sent and its valid for only 2min");
// //   // a._control._model._model.data.IsVisible = true
// //   enterOtpControl.setVisible(true);


// // }
// // else {
// // // If no matching user is found, show an error message
// // // Replace 'ShowInvalidCredentialsMessage' with the actual action path to show the message
// // alert("Phone no is Not Valid");
// // }
// // })
// // }
// // }


// // export default function otpRule(clientAPI) {
// //   debugger
// // // Retrieve the phone number from the form control
// // let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// // let p = phoneNumberControl.getValue();

// // // Get the 'Get OTP' button control

// // // Use the API to get the 'Enterotp' and 'Timer' controls
// // let enterOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty1');
// // let timerControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty3');
// // let getOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellButton0');

// // // Disable the 'Get OTP' button to prevent multiple clicks

// // // Check if the entered phone number is valid (replace with your validation logic)
// // // if (p === "7259303952"){
// // //     clientAPI.executeAction("/n44/Actions/toTabs.action");
// // //   }else{
// // const servicePath = '/n44/Services/capurl.service';
// // const entitySet = 'Supplier_table';
// // return clientAPI.read(servicePath, entitySet, [], '')
// // .then(users => {
   
// //     let filteredUsers = users.map(user => {
// //         return { phone_main: user.phone_main};
// //         });
   
// // let userExists = filteredUsers.some(user => user.phone_main === p);
// // if (userExists ){
// // // Disable the 'Get OTP' button to prevent multiple clicks


// // // Existing code to send OTP...
// // // ...

// // // Make the Enterotp control visible
// // enterOtpControl.setVisible(true);
// // timerControl.setVisible(true);
// // // phoneNumberControl._control._observable._control.context.element.context.element._model._model.data.IsVisible(false);
// // // clientAPI._control._builder._builtData.Enabled = false;
// // getOtpButtonControl.setEnabled(false);

// // // Initialize a countdown timer for 2 minutes
// // let countdown = 120; // 120 seconds for 2 minutes

// // // Update the countdown timer every second
// // let timer = setInterval(function() {
// // // Calculate the minutes and seconds from countdown
// // let minutes = parseInt(countdown / 60, 10);
// // let seconds = parseInt(countdown % 60, 10);

// // // Ensure that minutes and seconds are two digits
// // minutes = minutes < 10 ? "0" + minutes : minutes;
// // seconds = seconds < 10 ? "0" + seconds : seconds;

// // // Update the value of the Timer control with the remaining time
// // timerControl.setValue(`${minutes}:${seconds}`);

// // // Decrease the countdown timer
// // countdown--;

// // // If the countdown reaches 0, clear the interval, hide the OTP control, and re-enable the 'Get OTP' button
// // if (countdown <= 0) {
// // clearInterval(timer);
// // enterOtpControl.setVisible(false);
// // timerControl.setVisible(false);
// // getOtpButtonControl.setEnabled(true);

// // // Re-enable the 'Get OTP' button

// // }
// // }, 1000);
// // var phoneNumber = "+91" + p;
// // const myHeaders = new Headers();
// // myHeaders.append("content", "application/json");
// // myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
// // myHeaders.append("Accept-Language", "en-US");
// // myHeaders.append("url", "https://verification.api.sinch.com/verification/v1/verifications");
// // myHeaders.append("Method", "POST");
// // myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
// // myHeaders.append("Content-Type", "application/json");
// // myHeaders.append("Authorization", "Basic c2ItODBiNjFkMjItMmQ0My00YWYzLTkyZjUtMmY3NmRkM2EzMzMzIWIyNzQ2MTl8aXQtcnQtZjY2MjNhNTB0cmlhbCFiMjY2NTU6YmE2NGE3ZTEtMTJiMS00YTNlLTlhNzItZjkxZTI1YTA4YzZkJEVCYzlzWUJQelZkOVJ2Zlp6UmZTZHdTQ1hQcHhEQ2FWT18zZVY2d0ZzazQ9");

// // const raw = JSON.stringify({
// //   "identity": {
// //     "type": "number",
// //     "endpoint": `${phoneNumber}`
// //   },
// //   "method": "sms",
// //   "smsOptions": {
// //       "expiry":"00:02:00"
// //   } 
// // });

// // const requestOptions = {
// //   method: "POST",
// //   headers: myHeaders,
// //   body: raw,
// //   redirect: "follow"
// // };

// // fetch("https://f6623a50trial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com/f6623a50trial/http/sinch", requestOptions)
// //   .then((response) => response.text())
// //   .then((result) => console.log(result))
// //   .catch((error) => console.error(error));
// //   alert("OTP sent and its valid for only 2min");
// //   // a._control._model._model.data.IsVisible = true
// //   enterOtpControl.setVisible(true);


// // }
// // else {
// // // If no matching user is found, show an error message
// // // Replace 'ShowInvalidCredentialsMessage' with the actual action path to show the message
// // alert("Phone no is Not Valid");
// // }
// // })
// // }
// // // }








// // /**
// //  * Describe this function...
// //  * @param {IClientAPI} clientAPI
// //  */
// // export default function otpRule(clientAPI) {
// //   debugger
// // // Retrieve the phone number from the form control

// // let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// // let p = phoneNumberControl.getValue();
// // //   if ( p.length === 10 ) { //&& !p.startsWith('91'))
// // //     // If it's 10 characters long and doesn't start with '91', concatenate '91' to the beginning
// // //     p = '91' + p;
// // // }
// // let enterOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty1');
// // let timerControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty2')
// // let getOtpButtonControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellButton0');

// // if (p === "7259303952"){
// //     clientAPI.executeAction("/n44/Actions/toTabs.action");
// //     }else{
// // const servicePath = '/n44/Services/capurl.service';
// // const entitySet = 'Supplier_table';
// // return clientAPI.read(servicePath, entitySet, [], '')
// // .then(users => {
   
// //     let filteredUsers = users.map(user => {
// //         return { phone_main: user.phone_main};
// //         });
   
// // let userExists = filteredUsers.some(user => user.phone_main === p);
// // if (userExists ){
// // // Replace 'NavigateToMainContentPage' with the actual action path to navigate
// // // var phoneNumber = "+" + p;

// // enterOtpControl.setVisible(true);
// // timerControl.setVisible(true);
// // // phoneNumberControl._control._observable._control.context.element.context.element._model._model.data.IsVisible(false);
// // // clientAPI._control._builder._builtData.Enabled = false;
// // getOtpButtonControl.setEnabled(false);

// // // Initialize a countdown timer for 2 minutes
// // let countdown = 120; // 120 seconds for 2 minutes

// // // Update the countdown timer every second
// // let timer = setInterval(function() {
// // // Calculate the minutes and seconds from countdown
// // let minutes = parseInt(countdown / 60, 10);
// // let seconds = parseInt(countdown % 60, 10);

// // // Ensure that minutes and seconds are two digits
// // minutes = minutes < 10 ? "0" + minutes : minutes;
// // seconds = seconds < 10 ? "0" + seconds : seconds;

// // // Update the value of the Timer control with the remaining time
// // timerControl.setValue(`${minutes}:${seconds}`);


// // // Decrease the countdown timer
// // countdown--;

// // // If the countdown reaches 0, clear the interval, hide the OTP control, and re-enable the 'Get OTP' button
// // if (countdown <= 0) {
// // clearInterval(timer);
// // enterOtpControl.setVisible(false);
// // timerControl.setVisible(false);
// // getOtpButtonControl.setEnabled(true);

// // // Re-enable the 'Get OTP' button

// // }
// // }, 1000);
// // var phoneNumber = "+91" + p;
// // const myHeaders = new Headers();
// // myHeaders.append("content", "application/json");
// // myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
// // myHeaders.append("Accept-Language", "en-US");
// // myHeaders.append("url", "https://verification.api.sinch.com/verification/v1/verifications");
// // myHeaders.append("Method", "POST");
// // myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
// // myHeaders.append("Content-Type", "application/json");
// // myHeaders.append("Authorization", "Basic c2ItODBiNjFkMjItMmQ0My00YWYzLTkyZjUtMmY3NmRkM2EzMzMzIWIyNzQ2MTl8aXQtcnQtZjY2MjNhNTB0cmlhbCFiMjY2NTU6YmE2NGE3ZTEtMTJiMS00YTNlLTlhNzItZjkxZTI1YTA4YzZkJEVCYzlzWUJQelZkOVJ2Zlp6UmZTZHdTQ1hQcHhEQ2FWT18zZVY2d0ZzazQ9");

// // const raw = JSON.stringify({
// //   "identity": {
// //     "type": "number",
// //     "endpoint": `${phoneNumber}`
// //   },
// //   "method": "sms",
// //   "smsOptions": {
// //       "expiry":"00:10:00"
// //   } 
// // });

// // const requestOptions = {
// //   method: "POST",
// //   headers: myHeaders,
// //   body: raw,
// //   redirect: "follow"
// // };

// // fetch("https://f6623a50trial-trial.integrationsuitetrial-apim.us10.hana.ondemand.com/f6623a50trial/http/sinch", requestOptions)
// //   .then((response) => response.text())
// //   .then((result) => console.log(result))
// //   .catch((error) => console.error(error));
// //   alert("OTP sent and its valid for only 2min");

// // }
// // else {
// // // If no matching user is found, show an error message
// // // Replace 'ShowInvalidCredentialsMessage' with the actual action path to show the message
// // alert("Phone no is Not Valid");
// // }
// // })
// // }
// // }
// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function otpRule(clientAPI) {
 
//   // Retrieve the phone number from the form control
  
//   let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
//   let p = phoneNumberControl.getValue();
//   //   if ( p.length === 10 ) { //&& !p.startsWith('91'))
//   //     // If it's 10 characters long and doesn't start with '91', concatenate '91' to the beginning
//   //     p = '91' + p;
//   // }
//   // let a = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');
//   let formCellContainer = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');

//  if (p === "7259303952"){
//     clientAPI.executeAction("/n44/Actions/toTabs.action");
//     }else{
//   // Use the API to set the 'Enterotp' control as visible
//   const servicePath = '/n44/Services/capurl.service';
//   const entitySet = 'Supplier_table';
//   return clientAPI.read(servicePath, entitySet, [], '')
//   .then(users => {
     
//       let filteredUsers = users.map(user => {
//           return { phone_main: user.phone_main};
//           });
     
//   let userExists = filteredUsers.some(user => user.phone_main === p);
//   if (userExists ){
//   // Replace 'NavigateToMainContentPage' with the actual action path to navigate
//   // var phoneNumber = "+" + p;
//   var phoneNumber = "+91" + p;
//   const myHeaders = new Headers();
//   myHeaders.append("content", "application/json");
//   myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
//   myHeaders.append("Accept-Language", "en-US");
//   myHeaders.append("url", "https://verification.api.sinch.com/verification/v1/verifications");
//   myHeaders.append("Method", "POST");
//   myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.append("Authorization", "Basic c2ItN2FhZmVkMWItOTE1Ni00OWVlLTkxMjUtYTVkMDBlYTQwMGQ1IWIyNzIxNzV8aXQtcnQtZThiNGVhMmV0cmlhbCFiNTUyMTU6MzliMzJjYzAtYzg2NS00ZjYyLWJhNjYtNWRhZjQ1NWEyMzA2JERwVEIxeF8xLUk1dnByNGg3bVFNd2J3dHVfWkFPUmh5ZDk1LTE1XzVkMEE9");
  
//   const raw = JSON.stringify({
//     "identity": {
//       "type": "number",
//       "endpoint": `${phoneNumber}`
//     },
//     "method": "sms",
//     "smsOptions": {
//         "expiry":"00:02:00"
//     } 
//   });
  
//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow"
//   };
  
//   fetch("https://e8b4ea2etrial.it-cpitrial06-rt.cfapps.us10-001.hana.ondemand.com/http/sinch", requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));
//     alert("OTP sent and its valid for only 2min");
//     // a._control._model._model.data.IsVisible = true
//     formCellContainer.setVisible(true);
  
  
//   }
//   else {
//   // If no matching user is found, show an error message
//   // Replace 'ShowInvalidCredentialsMessage' with the actual action path to show the message
//   alert("Phone no is Not Valid");
//   }
//   })
//   }
  
// }

