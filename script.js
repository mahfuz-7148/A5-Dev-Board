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
    
    
  });
}
