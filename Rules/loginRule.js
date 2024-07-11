/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function loginRule(clientAPI) {
  debugger
  // let a ;
  let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
  let p = phoneNumberControl.getValue();
  let phoneNumber = "+91" + p;
  let enteredOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');
  let enteredOtp = enteredOtpControl.getValue();
  

const myHeaders = new Headers();
myHeaders.append("content", "application/json");
myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
myHeaders.append("Accept-Language", "en-US");
myHeaders.append("url", ` https://verification.api.sinch.com/verification/v1/verifications/number/${phoneNumber} `);
myHeaders.append("Method", "PUT");
myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic c2ItN2FhZmVkMWItOTE1Ni00OWVlLTkxMjUtYTVkMDBlYTQwMGQ1IWIyNzIxNzV8aXQtcnQtZThiNGVhMmV0cmlhbCFiNTUyMTU6MzliMzJjYzAtYzg2NS00ZjYyLWJhNjYtNWRhZjQ1NWEyMzA2JERwVEIxeF8xLUk1dnByNGg3bVFNd2J3dHVfWkFPUmh5ZDk1LTE1XzVkMEE9");

const raw = JSON.stringify({
  "method": "sms",
  "sms": {
  "code": `${enteredOtp}`
  }
  });

const requestOption = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

 fetch("https://e8b4ea2etrial.it-cpitrial06-rt.cfapps.us10-001.hana.ondemand.com/http/sinch", requestOption)
   .then((response) => response.json())
 .then((result) => {
     if(result.message == "Invalid identity or code."){
          alert("invalid otp")
     } else if (result.status == "SUCCESSFUL"){
          clientAPI.executeAction("/n44/Actions/toTabs.action");
      }    
  })
  .catch((error) => console.error(error));

  } 


















// // /**
// //  * Describe this function...
// //  * @param {IClientAPI} clientAPI
// //  */
// // export default function loginRule(clientAPI) {
// //     // let a ;
// //     debugger
// //     let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
// //     let p = phoneNumberControl.getValue();

    
// //     alert(`${p}`);

// // //     let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty2');
// // // let p = phoneNumberControl.getValue();
// //   //   if (p.length === 10) { // && !p.startsWith('91')
// //   //     // If it's 10 characters long and doesn't start with '91', concatenate '91' to the beginning
// //   //     p = '91' + p;
// //   // }
// //     // let phoneNumber = "+" + p;
// //     let phoneNumber = "+91" + p;
    
// //     let enteredOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');
// //     let enteredOtp = enteredOtpControl.getValue();

// //     alert( `${enteredOtp}`)

// //     // let enterOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2').getControl('FormCellSimpleProperty1');

// //     // let a = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');
// //     // let formCellContainer = clientAPI.getPageProxy().getControl('SectionedTable0').getSection('SectionFormCell2');

// //     // // Use the API to get the 'Enterotp' control
// //     // let enterOtpControl = formCellContainer.getControl('FormCellSimpleProperty2');
    
// //     // Use the API to set the 'Enterotp' control as visible
// //     // enterOtpControl.setVisible(true);
    
  
// //   // const myHeaders = new Headers();
// //   // myHeaders.append("content", "application/json");
// //   // myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
// //   // // myHeaders.append("Accept-Language", "en-US");
// //   // myHeaders.append("url", `https://verification.api.sinch.com/verification/v1/verifications/number/${phoneNumber}`);
// //   // myHeaders.append("Method", "PUT");
// //   // myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
// //   // myHeaders.append("Content-Type", "application/json");
// //   // myHeaders.append("Authorization", "Basic c2ItN2FhZmVkMWItOTE1Ni00OWVlLTkxMjUtYTVkMDBlYTQwMGQ1IWIyNzIxNzV8aXQtcnQtZThiNGVhMmV0cmlhbCFiNTUyMTU6MzliMzJjYzAtYzg2NS00ZjYyLWJhNjYtNWRhZjQ1NWEyMzA2JERwVEIxeF8xLUk1dnByNGg3bVFNd2J3dHVfWkFPUmh5ZDk1LTE1XzVkMEE9");
  
// //   const myHeaders = new Headers();
// // myHeaders.append("content", "application/json");
// // myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
// // myHeaders.append("Accept-Language", "en-US");
// // myHeaders.append("url", `https://verification.api.sinch.com/verification/v1/verifications/number/${phoneNumber}`);
// // myHeaders.append("Method", "PUT");
// // myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
// // myHeaders.append("Content-Type", "application/json");
// // myHeaders.append("Authorization", "Basic c2ItN2FhZmVkMWItOTE1Ni00OWVlLTkxMjUtYTVkMDBlYTQwMGQ1IWIyNzIxNzV8aXQtcnQtZThiNGVhMmV0cmlhbCFiNTUyMTU6MzliMzJjYzAtYzg2NS00ZjYyLWJhNjYtNWRhZjQ1NWEyMzA2JERwVEIxeF8xLUk1dnByNGg3bVFNd2J3dHVfWkFPUmh5ZDk1LTE1XzVkMEE9");

// //   const raw = JSON.stringify({
// //     "method": "sms",
// //     "sms": {
// //     "code": `${enteredOtp}`
// //     }
// //     });
  
// //   const requestOption = {
// //     method: "POST",
// //     headers: myHeaders,
// //     body: raw,
// //     redirect: "follow"
// //   };
  
// //   fetch("https://e8b4ea2etrial.it-cpitrial06-rt.cfapps.us10-001.hana.ondemand.com/http/sinch", requestOption)
// //   .then((response) => response.json())
// //     .then((result) => {
// //         if(result.message == "Invalid identity or code."){
// //             alert(result.message)
// //         } else if (result.status == "SUCCESSFUL"){
// //             clientAPI.executeAction("/n44/Actions/toTabs.action");
// //             // a._control._model._model.data.IsVisible = false
// //             enterOtpControl.setVisible(false);
// //         }else{
// //           alert("Failed! Try again....")
// //           enterOtpControl.setVisible(true);
// //         }    
// //     })
// //     .catch((error) => console.error(error));
    
  
// //     }
  
// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// /**
//  * Describe this function...
//  * @param {IClientAPI} clientAPI
//  */
// export default function loginRule(clientAPI) {
//   debugger
//   // let a ;
//   let phoneNumberControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty0');
//   let p = phoneNumberControl.getValue();
//   let phoneNumber = "+91" + p;
//   let enteredOtpControl = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellSimpleProperty1');
//   let enteredOtp = enteredOtpControl.getValue();
  

// const myHeaders = new Headers();
// myHeaders.append("content", "application/json");
// myHeaders.append("Auth", "Basic OGMyYWQxZDktMWMwMi00YzRhLWFkMjEtZDgwMTM5ZGE3ZjA0Ok9BN21nd0tNTWtxeXFxMHlzR2orb2c9PQ==");
// myHeaders.append("Accept-Language", "en-US");
// myHeaders.append("url", ` https://verification.api.sinch.com/verification/v1/verifications/number/${phoneNumber} `);
// myHeaders.append("Method", "PUT");
// myHeaders.append("apikey", "BUZEaciAGzAoYG5PPYEl8LJWzeMgfVaP");
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Authorization", "Basic c2ItN2FhZmVkMWItOTE1Ni00OWVlLTkxMjUtYTVkMDBlYTQwMGQ1IWIyNzIxNzV8aXQtcnQtZThiNGVhMmV0cmlhbCFiNTUyMTU6MzliMzJjYzAtYzg2NS00ZjYyLWJhNjYtNWRhZjQ1NWEyMzA2JERwVEIxeF8xLUk1dnByNGg3bVFNd2J3dHVfWkFPUmh5ZDk1LTE1XzVkMEE9");

// const raw = JSON.stringify({
//   "method": "sms",
//   "sms": {
//   "code": `${enteredOtp}`
//   }
//   });

// const requestOption = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow"
// };

//  fetch("https://e8b4ea2etrial.it-cpitrial06-rt.cfapps.us10-001.hana.ondemand.com/http/sinch", requestOption)
//    .then((response) => response.json())
//  .then((result) => {
//      if(result.message == "Invalid identity or code."){
//           alert(result.message)
//      } else if (result.status == "SUCCESSFUL"){
//           clientAPI.executeAction("/n44/Actions/toTabs.action");
//       }
      

         
//   })
//   .catch((error) => console.error(error));
  

//   }


