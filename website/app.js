/* Global Variables */



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
const zip = document.getElementById('zip');
const feeling = document.getElementById('feelings');
const submit = document.getElementById('generate');
const apiKey = '&appid=545d174cc243575ce1adca6753dd0d03&units=metric';
let zipInpValue = zip.value;
const urlApi = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const localServer= 'http://localhost:2000'
//when click on button call function that test if user intery data or not 
submit.addEventListener('click',()=>{

let zipInpValue = zip.value;
let feelingInpValue =feeling.value;
if(!zipInpValue && !feelingInpValue) 
//if user not entry zip code and your feeling
{alert('please entry zip cod and your feeling')}
//if user entry data save data in object (userData) 
 const userData={
   zipCod:zipInpValue,
   fellingText:feelingInpValue,
   date : d
 
 }
 //call async function (getTemptuer) return promise do function used data (which hold temptuer)as aparamerter make new object  
getTemptuer(zipInpValue).then((data)=>{
  let temptuer = data.main.temp;
  //new object which hold temp in data and this object (userData) that hold data which user entry
  let serverData={
    temp:temptuer,
    userData:userData
  } 
  console.log (temptuer)
//add data to local server by post request route /add 
  postServerData('/add',serverData)
  // get data from local server to Displays on UI
  userInterFace()
})
});
// this function get Data (atemptuer) from api which attatch with zip code that user write it and save it in data variable
async function getTemptuer(zipInpValue){
  try{
    const res = await fetch(urlApi+zipInpValue+apiKey);
  const data = await res.json();
 
console.log(data);

  return data;
  }catch(error){
    console.log ('error')
  }
 
}
// async function to add data to local server
async function postServerData (url='', serverData={}){
  //console.log (serverData)

  const res = await fetch(url,{
    method:'POST' ,
    credentials:'same-origin',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(serverData)
    
  });
 
 try {

  const newData = await res.json();

  return newData;

} catch (error) {

  console.log("error", error);
}
}
// async function to Displays on UI
async function userInterFace(){
  const req= await fetch('/get')
  try{
    const allData =await  req.json();
  document.getElementById('date').innerHTML = `Data: ${allData.userData.date}`;
   document.getElementById('temp').innerHTML =`temptuer: ${allData.temp}`;
  document.getElementById('content').innerHTML =`feeling: ${allData.userData.fellingText}`;

 }catch(error){
   console.log (error)
 }
}
