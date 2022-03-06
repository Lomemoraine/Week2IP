const maleNames =['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
const femaleNames =['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
const days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const displayMessage = document.getElementById('displaymessage') ;
function akanNaming(){
    var dateborn = document.getElementById("dateborn").value;
    var monthborn = document.getElementById("monthborn").value;
    var yearborn = document.getElementById("yearborn").value;
    var gender=document.getElementById("gender").value;
    if (dateborn<=0||dateborn>31||dateborn ===""){
        alert('Your date is invalid');
        return;
    }
    else if(monthborn<1 ||monthborn>12 ||(monthborn==2 && dateborn>29) ||monthborn===""){
        alert( 'Your month is invalid');
        return;
    }
    else if (yearborn<=0 ||yearborn==""){
        alert('Your year of birth is invalid')
        return;
    }
    var dd = parseInt(dateborn);
    var mm = parseInt(monthborn);
    var yy = parseInt(yearborn.substr(2,4));
    var cc = parseInt(yearborn.substr(0,2));
    var dayborn = parseInt(((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10))+ dd)%7;
     console.log({dd,mm,yearborn,yy,cc,dayborn,gender,});
    
    if(gender.toLowerCase()==="male"){
        displayMessage.innerHTML ='Your day of birth is ' + days[dayborn] +' and your Akan name is '+ maleNames[dayborn];
        clearInputs();
        // alert('Your day of birth is' + days[dayborn] +' and your Akan name is '+ maleNames[dayborn]);
    }
    else if( gender.toLowerCase()==='female'){
        displayMessage.innerHTML ='Your day of birth is ' + days[dayborn] +' and your Akan name is '+ femaleNames[dayborn];
        clearInputs();
        // alert('Your day of birth is' + days[dayborn] +' and your Akan name is '+ femaleNames[dayborn]);
    }
}
const clearInputs = ()=>{
        document.getElementById("dateborn").value ='';
        document.getElementById("monthborn").value ='';
        document.getElementById("yearborn").value ='';
        document.getElementById("gender").value =''; 
}