let clickCount = 0;
let buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  button.addEventListener("click", function (event) {
    window.alert('Board updated successfully')
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
    console.log(cardTitle)
    const activityHistory = document.getElementById("activityHistory")

    let currentTimeHistory = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });


    const div = document.createElement('div')
    div.innerHTML = `
    <p class="text-gray-800 font-medium mt-5">You have completed the task ${cardTitle} at ${currentTimeHistory}</p>
    `;
    activityHistory.appendChild((div))
    clickCount++;
    if (clickCount === 6) {
      window.alert("Congrates!!! You have completed all the current task"); 
      clickCount = 0; 
    }

    document.getElementById("clearHistory").addEventListener('click', function () {
      document.getElementById("activityHistory").textContent = ''
    })
  });
}

document.getElementById("changeColor").addEventListener('click', function () {
  const randomColor =`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

 
  document.body.style.backgroundColor = randomColor;
  document.body.style.transition = "background-color 1.5s ease-in-out";
})

  let currentDate = new Date();
  let weekday = currentDate.toLocaleDateString("en-US", { weekday: "short" });
  let options = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  let datePart = currentDate
    .toLocaleDateString("en-US", options)
    .replace(/,/, "");
  document.querySelector(".weekDay").textContent = `${weekday},`;
document.querySelector(".dynamicDate").textContent = datePart;
  
document.getElementById('btn').addEventListener('click', function () {
  window.location.href = './blog.html'
})