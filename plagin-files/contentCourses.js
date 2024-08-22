

// Flag to ensure the script runs only once
let scriptHasRun = false;

//window.addEventListener('load', onLoadHandler);

// Wait for the page to load completely
function onLoadHandler() {
  if (!scriptHasRun) {
    scriptHasRun = true;

    monitorDOMChanges('button[onclick="send_form(\'MenuCall\',\'-N,-N,-N61,-AH\',\'\');"]', clickButton);
    setTimeout(() => {
    DOMContentLoaded();
    }, 2000);  // Adjust the delay as needed to ensure the new page is fully loaded
  }
  window.removeEventListener('load', onLoadHandler);
}


// Function to monitor DOM changes and click the button once it's available
function monitorDOMChanges(selector, callback) {
  const observer = new MutationObserver((mutationsList, observer) => {
    if (document.querySelector(selector)) {
      callback(selector);
      observer.disconnect(); // Stop observing after the button is clicked
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Function to simulate a click event on a button
function clickButton(selector) {
  const button = document.querySelector(selector);
  if (button) {
    button.click();

    
    console.log('Button clicked:', selector);

    // Inject the external script when the content script runs
    injectScript('dom-monitor.js');

  } else {
    console.error('Button not found:', selector);
  }
}

// Function to handle year selection
function DOMContentLoaded() {
  var selectElement = document.getElementById('R1C1');
  
  if (selectElement) {
    selectElement.value = "-1";  // Select "כל השנים"
    var event = new Event('change', { bubbles: true });
    selectElement.dispatchEvent(event);

    if (!scriptHasRun) {
        injectScript('dom-monitor.js');
        scriptHasRun = true;
    }
  }

}


/////////////////////////////////////////////////////////////////////

// Function to inject an external script into the webpage
function injectScript(file) {
  console.log('injectScript');
  var script = document.createElement('script');
  script.src = chrome.runtime.getURL(file);
  script.onload = function() {
    this.remove(); // Remove the script element after loading
  };
  (document.head || document.documentElement).appendChild(script);
}



