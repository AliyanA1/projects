const cityIn=document.getElementById('city-input');
const btn=document.getElementById('btn');

const cityName=document.getElementById('city-name');
const cityTime=document.getElementById('city-time');
const cityTemp=document.getElementById('city-temp');


async function getdata(city){
    const promise=await fetch(
        `http://api.weatherapi.com/v1/current.json?key=7d8b9a6028c340998fb43314241407&q=${city}&aqi=yes`
    );

    return await promise.json();
}



btn.addEventListener("click",async ()=>{
    const val=cityIn.value;
    const result= await getdata(val);
    
    cityName.innerHTML=`${result.location.country} , ${result.location.name} - ${result.location.region}`
    cityTime.innerHTML=result.location.localtime;
    cityTemp.innerHTML=`${result.current.temp_c}C`;
    
})



