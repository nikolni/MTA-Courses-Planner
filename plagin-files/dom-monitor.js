
let scriptHasRun = false;

if(!scriptHasRun){
  console.log(scriptHasRun);
  monitorDOMChanges2('a.btn.btn-primary.rounded[onclick^="SubmitForm"]', clickRefreshButton);
}


// Function to monitor DOM changes and click the refresh button
function monitorDOMChanges2(selector, callback) {

  if (document.querySelector(selector) && !scriptHasRun) {
      console.log('Button found by MutationObserver');
      callback(selector);
    }
    else{
console.log('on monitorDOMChanges2 second time');

    }
  
}

function clickRefreshButton(selector) {
  const button = document.querySelector(selector);
  if (button && !scriptHasRun) {
    button.click();
    console.log('Button clicked:', selector);

    toServer();
  } 
  else 
  {
    console.error('Button not found or already clicked:', selector);
  }
}




// Add an event listener for the navigation event
function toServer() {
  console.log('setTimeout');
  setTimeout(() => {
    captureSourceCode2();
  }, 500);  // Adjust the delay as needed to ensure the new page is fully loaded
}


// Function to capture the source code of the page
function captureSourceCode2() {
  console.log('captureSourceCode2');
  const sourceCode = document.documentElement.outerHTML;
  if(!scriptHasRun){

    setTimeout(() => {
    sendDataToBackend2(sourceCode);
  }, 500); 
      
  }
}

// Function to send the data to the backend
function sendDataToBackend2(sourceCode) {

  console.log('sendDataToBackend2');
  scriptHasRun = true;


  fetch('http://localhost:8080/upload-courses-for-all-years', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ htmlSource: sourceCode })
  }).then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
}

