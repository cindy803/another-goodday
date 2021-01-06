
const api = {
    key: '64da5d772fe893dcd20b8ed11d47dbaf',
    base: 'https://api.openweathermap.org/data/2.5/'
}

const imgs = { 
    Clouds: "https://media.giphy.com/media/YmiVOwLxy16Ss/giphy.gif",
    Mist: "https://media.giphy.com/media/1uLQUtPLbJMQ0/giphy.gif",
    Rain: "https://media.giphy.com/media/oSaLJmbUgZQm4/giphy.gif",
    Snow: "https://media.giphy.com/media/rmuwjm1FLjxoQ/giphy.gif",
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
    .then(response => response.json()).then(data => {
    console.log(data)
        let background = document.querySelector('.background');

        let place  = document.querySelector('.place-name');
        place.innerHTML = `${data.city.name}, ${data.city.country}`;

        let now = new Date();
        let utcTime = now.getTime() + (now.getTimezoneOffset() * 60000); 
        let timeOffset = 12; 
        let ForeignTime = new Date(utcTime + (360000 * timeOffset))
        let date = document.querySelector('.location .date');
        date.innerText = dates(ForeignTime);

        let status = document.querySelector('.status');
        status.innerHTML = `${data.list[0].weather[0].main}`;

        let hum = document.querySelector('.hum');
        hum.innerHTML = `${data.list[0].main.humidity}` + '%';

        let degree = document.querySelector('.current .feels');
        degree.innerHTML = `${Math.round(data.list[0].main.feels_like)}<span>°c</span>`;

        let min = document.querySelector('.min');
        min.innerHTML = `${Math.round(data.list[0].main.temp_min)}°c`;

        let max = document.querySelector('.max');
        max.innerHTML = `${Math.round(data.list[0].main.temp_max)}°c`;

        let error = document.querySelector('.error');
         if(data.cod == "404") {
            error.innerHTML = `${data.message}`
            return error;
        }

        let temp = document.querySelector('.temp-value');
        temp.innerHTML = `${Math.round(data.list[0].main.temp)}<span>°c</span>`;

        
        
        let img = document.querySelector('.temp-img');
        img.src = imgs[data.list[0].weather[0].main];
        
       

    
    document.querySelector('.error').innerHTML = "";
    document.querySelectorAll('.temp-unit').forEach((ele)=>{
      if(unit == '') {
        ele.classList.add('cel');
        ele.classList.remove('feh');
      }
      else {
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
}
getInfo("toronto");



function changeUnit(e) {
  var button = e.target;
  document.querySelector('button.active').classList.toggle('active')
  button.classList.add('active');
  
  getInfo(document.querySelector('.place-name').innerText.split(" ")[0]);
  
}

document.querySelectorAll('button').forEach(
    (ele) => ele.addEventListener('click', changeUnit)
    );




