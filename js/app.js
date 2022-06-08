//////////Task-1/////////////
if(confirm('Sayta daxil olmaq isteyirsen?') === true) {
    alert('xos geldiniz')
}
else{
    alert('sayta girmek olmadi')
    document.body.style.display = 'none'
}
////////////////////////////



////////////Task-2//////////
var age=prompt("yasinizi daxil edin");
if(age>=18){
alert("Daxil ola bilersiz");
}
else{
    alert("Yalniz 18 yawdan yuxari olmalidi");
    document.body.style.display='none';
}
////////////////////////////



////////////Task-3//////////
function mode(){
    var body=document.body;
    var icon=document.getElementById('button');
    if(body.style.backgroundColor==='black'){
      body.style.backgroundColor='white';
      icon.className='fa-solid fa-moon';
      body.style.color='black';
    }
    else{
        body.style.backgroundColor='black';
        icon.className='fa-solid fa-sun';
      body.style.color='white';

    }
}
/////////////////////////////



//////////TAsk-4////////////
function addgroup(){
    var group=document.getElementById('inputtype').value;
    var span =document.getElementById('span');
    span.innerHTML=group;
    var test =group.toString().slice(1,4);
    if(test>=100 && test<200){
        span.style.color='yellow';
    }
    else if(test>=200&&test<300){
        span.style.color='red';
    }
    else if(test>=300&&test<400){
        span.style.color='green';
    }
    else{
        span.innerHTML='duzgun daxil edin'
    }
}
////////////////////////////