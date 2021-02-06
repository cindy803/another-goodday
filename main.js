
const api = {
    key: '64da5d772fe893dcd20b8ed11d47dbaf',
    base: 'https://api.openweathermap.org/data/2.5/'
}


const imgs = { 
    Clouds: "https://media.giphy.com/media/67uxmHhIF3uh6Ph8ew/giphy.gif",
    Mist: "https://media.giphy.com/media/1uLQUtPLbJMQ0/giphy.gif",
    Rain: "https://media.giphy.com/media/oSaLJmbUgZQm4/giphy.gif",
    Snow: "https://media.giphy.com/media/N7ZiLbtDr84Yo/giphy.gif",
    Clear: "https://media.giphy.com/media/u01ioCe6G8URG/giphy.gif",
    Thunderstorm: "https://media.giphy.com/media/CIYF0RVOmd2qQ/giphy.gif",
    Haze: "https://media.giphy.com/media/d6JfdOpurCisGQdzdA/giphy.gif"
  };

let resultFromServer 
function getInfo(city) {
  
  let unit =  document.querySelector('button.active').innerText;
  let unit_map = unit == "C" ? 'metric' : 'imperial'; 
  fetch(`${api.base}forecast?q=${city}&units=${unit_map}&appid=${api.key}`)
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      resultFromServer = data 
 
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
        // console.log("min temp is "+ Math.min(...minArray));
        // console.log("max temp is "+ Math.max(...maxArray));
        // console.log("temp is "+ Math.max(...maxArray));
        min.innerHTML = `${parseInt(Math.min(...minArray))}°`
        max.innerHTML = `${parseInt(Math.max(...maxArray))}°`
          
        let minArray1=[];
        let maxArray1=[];
        let tempArray2=[];  
       
        let min1 = document.querySelector('.thur-min');
        let max1 = document.querySelector('.thur-max');
        let temp2 = document.querySelector('.thur-temp');

        for (let i of data.list.slice(8,16)){
          minArray1.push(Number(i.main.temp_min)) ; 
          maxArray1.push(Number(i.main.temp_max)); 
          // temp2.push(Number(i.main.temp))
        }
          // console.log("min temp is "+ Math.min(...minArray1));
          // console.log("max temp is "+ Math.max(...maxArray1));
          // console.log("temp is "+ Math.max(...maxArray));
          min1.innerHTML = `${parseInt(Math.min(...minArray1))}°`
          max1.innerHTML = `${parseInt(Math.max(...maxArray1))}°`
        

        let minArray2=[];
        let maxArray2=[];
        let min2 = document.querySelector('.fri-min');
        let max2 = document.querySelector('.fri-max');

        for (let i of data.list.slice(16,24)){
          minArray2.push(Number(i.main.temp_min)) ; 
          maxArray2.push(Number(i.main.temp_max)); 
      
        }
          // console.log("min temp is "+ Math.min(...minArray2));
          // console.log("max temp is "+ Math.max(...maxArray2));
          // console.log("temp is "+ Math.max(...maxArray));
          min2.innerHTML = `${parseInt(Math.min(...minArray2))}°`
          max2.innerHTML = `${parseInt(Math.max(...maxArray2))}°`


        let minArray3=[];
        let maxArray3=[];
        let min3 = document.querySelector('.sat-min');
        let max3 = document.querySelector('.sat-max');

        for (let i of data.list.slice(24,32)){
          minArray3.push(Number(i.main.temp_min)) ; 
          maxArray3.push(Number(i.main.temp_max)); 
      
        }
          // console.log("min temp is "+ Math.min(...minArray3));
          // console.log("max temp is "+ Math.max(...maxArray3));
          // console.log("temp is "+ Math.max(...maxArray));
          min3.innerHTML = `${parseInt(Math.min(...minArray3))}°`
          max3.innerHTML = `${parseInt(Math.max(...maxArray3))}°`


        let minArray4=[];
        let maxArray4=[];
        let min4 = document.querySelector('.sun-min');
        let max4 = document.querySelector('.sun-max');

        for (let i of data.list.slice(32,40)){
          minArray4.push(Number(i.main.temp_min)) ; 
          maxArray4.push(Number(i.main.temp_max)); 
      
        }
          // console.log("min temp is "+ Math.min(...minArray4));
          // console.log("max temp is "+ Math.max(...maxArray4));
          // console.log("temp is "+ Math.max(...maxArray));
          min4.innerHTML = `${parseInt(Math.min(...minArray4))}°`
          max4.innerHTML = `${parseInt(Math.max(...maxArray4))}°`


        let background = document.querySelector('.background');

        let place  = document.querySelector('.place-name');
        place.innerHTML = 
                  `${data.city.name.split(' ').join('')}, ${data.city.country}`;

        let now = new Date();
        var options = {
        weekday: "short",
        year: "numeric",
        month: "2-digit",
        day: "numeric", 
        hour: '2-digit',
        minute: '2-digit'
        };
        let localTime = now.getTime()
        let localOffset = (now.getTimezoneOffset() * 60000)
        // console.log(localOffset)
        let utcTime = localTime + localOffset; 
        let foreignTime = new Date(utcTime + (data.city.timezone) * 1000).toLocaleString('en', options).split(' ').slice(0, 4).join(' ');
        // console.log(foreignTime)
        let date = document.querySelector('.date');
        date.innerHTML = `${foreignTime}`

        let tomorrow = new Date();
        tomorrow.setDate(new Date().getDate()+1);
        var options = {
        weekday: "short",
        };
        let localTime1 = tomorrow.getTime()
        let localOffset1 = (tomorrow.getTimezoneOffset() * 60000)
        // console.log(localOffset)
        let utcTime1 = localTime1 + localOffset1; 
        let foreignTime1 = new Date(utcTime1 + (data.city.timezone) * 1000).toLocaleString('en', options).split(' ').slice(0, 4).join(' ');
        // console.log(foreignTime)
        let date1 = document.querySelector('.date-1');

        date1.innerHTML = foreignTime1

        let tomorrow1 = new Date();
        tomorrow1.setDate(new Date().getDate()+2);
        var options = {
        weekday: "short",
        };
        let localTime2 = tomorrow1.getTime()
        let localOffset2 = (tomorrow1.getTimezoneOffset() * 60000)
        // console.log(localOffset)
        let utcTime2 = localTime2 + localOffset2; 
        let foreignTime2 = new Date(utcTime2 + (data.city.timezone) * 1000).toLocaleString('en', options).split(' ').slice(0, 4).join(' ');
        // console.log(foreignTime)
        let date2 = document.querySelector('.date-2');

        date2.innerHTML = foreignTime2

        let tomorrow2 = new Date();
        tomorrow2.setDate(new Date().getDate()+3);

        var options = {
        weekday: "short",
        };
        let localTime3 = tomorrow2.getTime()
        let localOffset3 = (tomorrow2.getTimezoneOffset() * 60000)
        // console.log(localOffset)
        let utcTime3 = localTime3 + localOffset3; 
        let foreignTime3 = new Date(utcTime3 + (data.city.timezone) * 1000).toLocaleString('en', options).split(' ').slice(0, 4).join(' ');
        // console.log(foreignTime)
        let date3 = document.querySelector('.date-3');
        date3.innerHTML = foreignTime3
      
        let tomorrow3 = new Date();
        tomorrow3.setDate(new Date().getDate()+4);

        var options = {
        weekday: "short",
        };
        let localTime4 = tomorrow3.getTime()
        let localOffset4 = (tomorrow3.getTimezoneOffset() * 60000)
        // console.log(localOffset)
        let utcTime4 = localTime4 + localOffset4; 
        let foreignTime4 = new Date(utcTime4 + (data.city.timezone) * 1000).toLocaleString('en', options).split(' ').slice(0, 4).join(' ');
        // console.log(foreignTime)
        let date4 = document.querySelector('.date-4');

        date4.innerHTML = foreignTime4
      
        let hum = document.querySelector('.hum');
        hum.innerHTML = `${data.list[0].main.humidity}` + '%';

        let degree = document.querySelector('.current .feels');
        degree.innerHTML = `${Math.round(data.list[0].main.feels_like)}<span>°</span>`;

        let status = document.querySelector('.status');
        status.innerHTML = `${data.list[0].weather[0].main}`;

        let statusOne = document.querySelector('.thur-status');
        statusOne.innerHTML = `${data.list[9].weather[0].main}`;

        let statusTwo = document.querySelector('.fri-status');
        statusTwo.innerHTML = `${data.list[17].weather[0].main}`;

        let statusThree = document.querySelector('.sat-status');
        statusThree.innerHTML = `${data.list[25].weather[0].main}`;

        let statusFour = document.querySelector('.sun-status');
        statusFour.innerHTML = `${data.list[33].weather[0].main}`;

        let temp = document.querySelector('.temp-value');
        temp.innerHTML = `${Math.round(data.list[0].main.temp)}<span>°</span>`;

        let card = document.querySelector('.card');

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

function init() {

  let statusImg = document.querySelector('#icon'); 
  // console.log(statusImg);
  // console.log('resultFromServer', resultFromServer); 
  // statusImg.src = './stylesheet/images/clear.png'

  switch(resultFromServer.list[0].weather[0].main){
    case 'Clear':
      
      statusImg.src = "./stylesheet/images/clear.png"

      // document.getElementById('icon').style.backgroundImage = 'url(./images/clear.png)';
      break; 
    case 'Clouds':
      statusImg.src = "./stylesheet/images/cloudy.png"
      break; 
    case 'Rain':
    case 'Drizzle':
    case 'Mist':
      statusImg.src = "./stylesheet/images/rain.png"
      break; 
    case 'Thunderstorm':
      statusImg.src = "./stylesheet/images/storm.png"
      break; 
    case 'Snow':
      statusImg.src = "./stylesheet/images/snow.png"
      break; 
    default:
      break;
  }

  
  statusImg = 'http://openweathermap.org/img/wn/' + resultFromServer.list[0].weather[0].main.icon + '.png'

}

function onchangeCity(e) {
  if(e.keyCode != 13) return;
  var city = document.querySelector('.place').value;
  getInfo(city);
  setTimeout(() => {init(resultFromServer)}, 500);
}
getInfo("toronto");
setTimeout(() => {init(resultFromServer)}, 500);

function changeUnit(e) {
  var button = e.target;
  document.querySelector('button.active').classList.toggle('active')
  button.classList.add('active');
  
  getInfo(document.querySelector('.place-name').innerText.split(" ")[0]);  
}

document.querySelectorAll('button').forEach(
    (ele) => ele.addEventListener('click', changeUnit)
);



