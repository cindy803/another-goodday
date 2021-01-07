
const api = {
    key: '64da5d772fe893dcd20b8ed11d47dbaf',
    base: 'https://api.openweathermap.org/data/2.5/'
}


const imgs = { 
    Clouds: "https://media.giphy.com/media/JOMTYlr1b2HlxGXyoS/giphy.gif",
    Mist: "https://media.giphy.com/media/1uLQUtPLbJMQ0/giphy.gif",
    Rain: "https://media.giphy.com/media/oSaLJmbUgZQm4/giphy.gif",
    Snow: "https://media.giphy.com/media/N7ZiLbtDr84Yo/giphy.gif",
    Clear: "https://media.giphy.com/media/u01ioCe6G8URG/giphy.gif",
    Thunderstorm: "https://media.giphy.com/media/CIYF0RVOmd2qQ/giphy.gif",
    Haze: "https://media.giphy.com/media/d6JfdOpurCisGQdzdA/giphy.gif"
  };

  function dates(d) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}

function getInfo(city) {
  
  let unit =  document.querySelector('button.active').innerText;
  let unit_map = unit == "C" ? 'metric' : 'imperial'; 
  fetch(`${api.base}forecast?q=${city}&units=${unit_map}&appid=${api.key}`)
    .then(response => response.json())
    .then(data => {console.log(data)
     
      let minArray=[];
      let maxArray=[];  
      let tempArray=[];
      let min = document.querySelector('.min');
      let max = document.querySelector('.max');

      for (let i of data.list.slice(0,8)){
        minArray.push(Number(i.main.temp_min)) ; 
        maxArray.push(Number(i.main.temp_max)); 
        tempArray.push(Number(i.main.temp)) 
      }
        console.log("min temp is "+ Math.min(...minArray));
        console.log("max temp is "+ Math.max(...maxArray));
        console.log("temp is "+ Math.max(...maxArray));
        min.innerHTML = `${Math.min(...minArray)}`
        max.innerHTML = `${Math.max(...maxArray)}`
          
        let minArray1=[];
        let maxArray1=[];
        let tempArray2=[];  
       
        let min1 = document.querySelector('.thur-min');
        let max1 = document.querySelector('.thur-max');
        let temp2 = document.querySelector('.thur-temp');

        for (let i of data.list.slice(8,16)){
          minArray1.push(Number(i.main.temp_min)) ; 
          maxArray1.push(Number(i.main.temp_max)); 
          tempArray2.push(Number(i.main.temp))
        }
          console.log("min temp is "+ Math.min(...minArray1));
          console.log("max temp is "+ Math.max(...maxArray1));
          console.log("temp is "+ Math.max(...maxArray));
          min1.innerHTML = `${Math.min(...minArray1)}`
          max1.innerHTML = `${Math.max(...maxArray1)}`
        

        let minArray2=[];
        let maxArray2=[];
        let min2 = document.querySelector('.fri-min');
        let max2 = document.querySelector('.fri-max');

        for (let i of data.list.slice(16,24)){
          minArray2.push(Number(i.main.temp_min)) ; 
          maxArray2.push(Number(i.main.temp_max)); 
      
        }
          console.log("min temp is "+ Math.min(...minArray2));
          console.log("max temp is "+ Math.max(...maxArray2));
          console.log("temp is "+ Math.max(...maxArray));
          min2.innerHTML = `${Math.min(...minArray2)}`
          max2.innerHTML = `${Math.max(...maxArray2)}`


        let minArray3=[];
        let maxArray3=[];
        let min3 = document.querySelector('.sat-min');
        let max3 = document.querySelector('.sat-max');

        for (let i of data.list.slice(24,32)){
          minArray3.push(Number(i.main.temp_min)) ; 
          maxArray3.push(Number(i.main.temp_max)); 
      
        }
          console.log("min temp is "+ Math.min(...minArray3));
          console.log("max temp is "+ Math.max(...maxArray3));
          console.log("temp is "+ Math.max(...maxArray));
          min3.innerHTML = `${Math.min(...minArray3)}`
          max3.innerHTML = `${Math.max(...maxArray3)}`


        let minArray4=[];
        let maxArray4=[];
        let min4 = document.querySelector('.sun-min');
        let max4 = document.querySelector('.sun-max');

        for (let i of data.list.slice(32,40)){
          minArray4.push(Number(i.main.temp_min)) ; 
          maxArray4.push(Number(i.main.temp_max)); 
      
        }
          console.log("min temp is "+ Math.min(...minArray4));
          console.log("max temp is "+ Math.max(...maxArray4));
          console.log("temp is "+ Math.max(...maxArray));
          min4.innerHTML = `${Math.min(...minArray4)}`
          max4.innerHTML = `${Math.max(...maxArray4)}`


        let background = document.querySelector('.background');

        let place  = document.querySelector('.place-name');
        place.innerHTML = `${data.city.name}, ${data.city.country}`;

        let now = new Date();
        let localTime = now.getTime()
        let localOffset = (now.getTimezoneOffset() * 60000)
        let utcTime = localTime + localOffset; 
        let timeOffset = 12; 
        let ForeignTime = new Date(utcTime + (360000 * timeOffset))
        let date = document.querySelector('.location .date');
        if (data.city.country === 'US') {
          date.innerText = dates(now);
        }else if (data.city.country === 'CA'){
          date.innerText = dates(now);
        }else if (data.city.country === 'MX'){
          date.innerText = dates(now);
        }else{
          date.innerText = dates(ForeignTime);
        }
 
        let hum = document.querySelector('.hum');
        hum.innerHTML = `${data.list[0].main.humidity}` + '%';

        let degree = document.querySelector('.current .feels');
        degree.innerHTML = `${Math.round(data.list[0].main.feels_like)}<span>°c</span>`;

        let status = document.querySelector('.status');
        status.innerHTML = `${data.list[0].weather[0].main}`;

        let statusOne = document.querySelector('.thur-status');
        statusOne.innerHTML = `${data.list[8].weather[0].main}`;

        let statusTwo = document.querySelector('.fri-status');
        statusTwo.innerHTML = `${data.list[16].weather[0].main}`;

        let statusThree = document.querySelector('.sat-status');
        statusThree.innerHTML = `${data.list[24].weather[0].main}`;

        let statusFour = document.querySelector('.sun-status');
        statusFour.innerHTML = `${data.list[32].weather[0].main}`;



        let temp = document.querySelector('.temp-value');
        temp.innerHTML = `${Math.round(data.list[0].main.temp)}<span>°c</span>`;

        let tempOne = document.querySelector('.thur-temp');
        tempOne.innerHTML = `${Math.round(data.list[8].main.temp)}<span>°c</span>`;

        let tempTwo = document.querySelector('.fri-temp');
        tempTwo.innerHTML = `${Math.round(data.list[16].main.temp)}<span>°c</span>`;

        let tempThree = document.querySelector('.sat-temp');
        tempThree.innerHTML = `${Math.round(data.list[24].main.temp)}<span>°c</span>`;

        let tempFour = document.querySelector('.sun-temp');
        tempFour.innerHTML = `${Math.round(data.list[32].main.temp)}<span>°c</span>`;

        let error = document.querySelector('.error');
         if(data.cod == "404") {
            error.innerHTML = `${data.message}`
            return error;
        }

        let img = document.querySelector('.temp-img');
        img.src = imgs[data.list[0].weather[0].main];

  
        document.querySelectorAll('.temp-unit').forEach((ele)=>{
          if(unit == '') {
            ele.classList.add('cel');
            ele.classList.remove('feh');
          } else {
            ele.classList.add('feh');
            ele.classList.remove('cel');
      }
    })
  
  }).catch(err => {
      console.log(err);
    });

}


function onchangeCity(e) {
  if(e.keyCode != 13) return;
  var city = document.querySelector('.place').value;
  getInfo(city);
  // getTodayInfo(city)
  
}
getInfo("toronto");
// getTodayInfo('toronto');

function changeUnit(e) {
  var button = e.target;
  document.querySelector('button.active').classList.toggle('active')
  button.classList.add('active');
  
  getInfo(document.querySelector('.place-name').innerText.split(" ")[0]);
  // getTodayInfo(document.querySelector('.place-name').innerText.split(" ")[0])
  
}

document.querySelectorAll('button').forEach(
    (ele) => ele.addEventListener('click', changeUnit)
);



