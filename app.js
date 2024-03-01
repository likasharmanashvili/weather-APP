const button = document.querySelector(".search");
const input = document.querySelector(".search-input");
const mainCo = document.querySelector(".Mcont")
mainCo.style.display = 'block'
button.addEventListener('click', () => {
    let search = input.value;
    fetch(`https://lobster-app-kps4x.ondigitalocean.app/api/weather/batumi?search=${search}`)
    .then((response) => response.json())
    .then((data) => {
        const content_container = document.createElement("div");
        const content = document.getElementById("content");
         mainCo.style.display = 'none'
        content_container.innerHTML = ` 
        <div class="mainC">
         
    


        <div class="childA">
        <div class="h1A">
        <h1> ${data.currentTemp}° </h1>
         </div>
        <div class="gradus">
        <h1> ${data.city}</h1>
        <p class="info"> ${data.dayLength} - ${data.month}, </p>
         </div> 
      <div="icon1">
      <i class="fa-solid fa-cloud" id="iconCloud"></i>
      </div>
      
      <div class="text">
      <p class="weatherText"> Weather details..</p>    
      <h1 style="font-size: 20px;" class="thunderText">THUNDERSTORM WITH DRIZZLE</h1>
      </div>
        

    
    
   
   <div class="tems">
   <div class="max">
   <p> Temp Max </p>
   <div class="C-icon">
   ${data.maxTemp}<i class="fa-solid fa-temperature-half" id="max"></i>
   </div>
   </div>
     

   <div class="min">
   <p>Min Temp </p> 
   <div class="A-icon">
      ${data.minTemp}<i class="fa-solid fa-temperature-half" id="min"></i> 
  </div>
  </div>

  
  
  <div class="humidity">
  <p>humidity </p> 
  <div class="A-icon">
     ${data.humidity}%<i class="fa-sharp fa-light fa-droplet-degree" id="hum"></i></i> 
 </div>
 </div>

 <div class="cl">
  <p>Cloudy</p> 
  <div class="A-icon">
     ${data.currentWeatherDesc}<i class="fa-solid fa-cloud" id="clo"></i></i></i> 
 </div>
 </div>

 
   </div>


    
      <hr>
    </div>
    </div>
        `;
        
        content.appendChild(content_container);
    })
    .catch(error => {
        console.error(error);
    });
});