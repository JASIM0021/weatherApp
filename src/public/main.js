const cityName = document.getElementById('cityname');

const submitBtn = document.getElementById('submitbtn');

const city_name = document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');

const tempStatus = document.getElementById('temp_status');



const getInfo = async (event) => {

    let cityVal = cityName.value;
    event.preventDefault();

    let url = '';


    if (cityVal === "") {
        

        city_name.innerText = "Please Write The City Name First";

        
    } else {
        try {
             
            temp_real_val.innerText = 'Err';
            tempStatus.innerText = 'Err';
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=37fa177f83f937a492544e80b399917f&units=metric`;
          
        
            const respoonse = await fetch(url);

         

            const data = await respoonse.json();

            const arr = [data];

           
            const temp = `${arr[0].main.temp}`

             temp_real_val.innerHTML = `${temp} <sup>o</sup>C`;

            tempStatus.innerText = arr[0].weather[0].main;
            city_name.innerText = `${arr[0].name},${arr[0].sys.country}`;
            
            const tempMode = arr[0].weather[0].main;

           

            if (tempMode == "Cloud") {
                
                tempStatus.innerHTML='<i class="fa fa-cloud"></i>'
            } else {
                
                    tempStatus.innerHTML='<i class="fa fa-sun"></i>'
            }




            

        } catch {
            
         
            city_name.innerText = `Plz Enter City Name Properly 

                 `

        }
     

    }
    
   
};

submitBtn.addEventListener('click',getInfo)