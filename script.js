let buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  button.addEventListener("click", function (event) {
    event.target.setAttribute("disabled", true);
    let taskAssignedCount = document.querySelector(".taskAssignedCount");
      let tasksAssigned = Number(taskAssignedCount.textContent); 
      if (tasksAssigned > 0) {
        tasksAssigned--; 
        taskAssignedCount.textContent = tasksAssigned;
      }
    let AssignedCount = document.querySelector(".AssignedCount");
      let Assigned = Number(AssignedCount.textContent); 
      if (Assigned > 0) {
        Assigned++;
        AssignedCount.textContent = Assigned;
    }
    let cardTitle = event.target.parentNode.parentNode.querySelector(".cardTitle").textContent
    const activityHistory = document.getElementById("activityHistory")
    let currentDate = new Date()
      .toLocaleDateString("en-US", {
        weekday: "short", 
        month: "short", 
        day: "numeric", 
        year: "numeric", 
      }).replace(/,/, ", ");
    
    let currentTimeHistory = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const div = document.createElement('div')
    div.innerHTML = `
    <p class="text-gray-500">You have completed the task ${cardTitle} at ${currentTimeHistory}</p>
    `;
    activityHistory.appendChild((div))

    document.getElementById("clearHistory").addEventListener('click', function () {
      document.getElementById("activityHistory").textContent = ''
    })
  });
}
