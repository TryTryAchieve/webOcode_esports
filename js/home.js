var i=0;
var image=[];
var t=3000;
image[0]='./img/team.jpg';
image[1]='./img/setup.jpg';
function imgchange(){
    document.slider.src=image[i];
    if(i<image.length-1){
        i++;
    }else{
        i=0;
    }
    
    setTimeout("imgchange()", t);
}
window.onload=imgchange;

burger=document.querySelector('.burger')

navbar=document.querySelector('.navbar')
navcount=document.querySelector('.navcont')

burger.addEventListener('click',()=>{
    console.log('hello');
    navcount.classList.toggle('visi');
    navbar.classList.toggle('navbar');

})
btn=document.querySelector('.btn')
btn.addEventListener('click',()=>{
    let result=confirm('Press OK to submit form');
    if(result=true){
        alert('Your response has been recorded');
    }
})
