var maleNames =['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
var femaleNames =['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
function akanNaming(){
    var dateborn = document.getElementById("dateborn").value;
    var dd = parseInt(dateborn);
    var monthborn = document.getElementById("monthborn").value;
    var mm = parseInt(monthborn);
    var yearborn = document.getElementById("yearborn").value;
    var yy = parseInt(yearborn.substr(2,4));
    var cc = parseInt(yearborn.substr(0,2));
    var dayborn = parseInt(((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10))+ dd)%7;
    var gender=document.getElementById("gender").value;
    if (dd<=0||dd>31||dd ==""){
        alert('Your date is invalid');
    }
    else if(mm<1 ||mm>12 ||mm==2 && dd>29 ||mm==""){
        alert( 'Your month is invalid');
    }
    else if (year<=0 ||year==""){
        alert('Your year of birth is invalid')
    }
    if(gender==="male"){
        alert('Your day of birth is' + dayborn +' and your Akan name is '+ maleName[day]);
    }
    else if( gender==='female'){
        alert('Your day of birth is' + dayborn +' and your Akan name is '+ femaleName[day]);
    }
}