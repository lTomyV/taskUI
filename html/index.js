// ====================================================================================================
// ====================================== LISTENERS FROM LUA ==========================================
// ====================================================================================================
window.addEventListener('message', function(event) {
  var item = event.data;
  if (item.key === "newMessage") {
    setTitleAndText(item.title, item.text)
    displayUI(true)
  } else if (item.key === "closeUI") {
    displayUI(false)
  } else if (item.key === "newTimedMessage") {
    setTitleAndText(item.title, item.text)
    displayUI(true)
    setTimeoutAndClose(item.time)
  }
})

// ====================================================================================================
// ======================================== UI FUNCTIONS  =============================================
// ====================================================================================================
function displayUI(bool) {
    if (bool) {
        // Display the container div
        document.getElementById("container").style.display = "flex";
    } else {
        // Hide the container div
        document.getElementById("container").style.display = "none";
    }
}

function setTitleAndText(title, text) {

    // Get the titleContainer and taskContainer
    var titleContainer = document.getElementById("titleContainer");
    var taskContainer = document.getElementById("taskContainer");

    // Change title to upper case
    title = title.toUpperCase();

    // Change the text inside titleContainer for title
    titleContainer.innerHTML = title;

    // Change the text inside taskContainer for task
    taskContainer.innerHTML = text;
}

function setTimeoutAndClose(time) {
  setTimeout(function() {
    displayUI(false);
  }, time);
}