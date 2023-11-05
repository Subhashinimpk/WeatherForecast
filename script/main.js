
function GetInfo() {

    var newName = document.getElementById("cityInput");
   
if(newName.value.length > 0){

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'KEY_VALUE')
.then(response => response.json())
.then(data => {
    
    //Getting the min and max values for each day
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Temprature " + Number(data.list[i].main.temp- 273.15).toFixed(1)+ "°";
        //Number(1.3450001).toFixed(2); // 1.35
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Humidity " + Number(data.list[i].main.humidity).toFixed(1)+"%";
    }
    //------------------------------------------------------------
 
   // Getting Weather Icons
     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+".png";
    }
// descripitoin
     for(i = 0 ; i<5 ; i++)
    {
       document.getElementById("day" + (i+1) + "Avg").innerHTML = "Description : " + data.list[i].weather[0].description;
    }   
   
    //------------------------------------------------------------
    console.log(data)
    document.getElementById("root").style.display = 'block';
    // newName.value = " "


}).catch(err => alert("Something Went Wrong: Enter the valid place"))
}
}



//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }
    //------------------------------------------------------------



