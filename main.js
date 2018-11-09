let i=0;
let m = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg',
'15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.jpg'];
let k = document.getElementsByClassName('min');
let sr = document.getElementById('max');
k[i].style.border="solid red";
sr.src = m[i];

//Mouse down Function
function down(g){
    if(g=="img2")
    document.getElementById("img2").className+=" push";
    else if(g=="img1")
    document.getElementById("img1").className+=" push";
}

//Mouse up Function
function up(g){
    if(g=="img2")
    document.getElementById("img2").className=" prevup";
    else if(g=="img1")
    document.getElementById("img1").className=" nexup";
}

//Mouse click IMG Function
function fu(t){
    k[i].style.border="none";
    i=t-1;
    sr.src = m[t-1];
    k[t-1].style.border="solid red";
}

//Next button Function
function fu1(){
    k[i].style.border="none";
    if(i<26){
        sr.src = m[i+1];
        i++;
    }
    else {
        i=0;
        sr.src = m[i];
    }
    k[i].style.border="solid red";
}

//Previews button Function
function fu2(){
    k[i].style.border="none";
    if(i>0){
        sr.src=m[i-1];
        i--;
    }
    else{
        i=m.length-1;
        sr.src = m[i];
    }
    k[i].style.border="solid red";
}