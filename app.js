const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const uday=document.querySelector(".uday");
const u=uday.textContent;
//hacker effect function
function hacker(){
    let i=0;
    let interval=setInterval(()=>{
    uday.innerText =uday.innerText.split("").map((letter,index) =>{ 
        if (index < i){
            return u[index];
        }
        return letters[Math.floor(Math.random() * 26)]})
        .join("");
    if(i>=16) 
    clearInterval(interval);
    i +=1/3;
    },30);
}

uday.addEventListener('mouseover',hacker);
//running hacker effect on view 
const observer1= new IntersectionObserver((entries ) =>
{
    entries.forEach((entry) =>{
    if(entry.isIntersecting){
      hacker();
}
    else{
        return letters[Math.floor(Math.random() * 26)];
    }
    })

})
observer1.observe(uday);

const observer= new IntersectionObserver((entries) =>
{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    })
}

)
const hiddenElements=document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=>observer.observe(el));

