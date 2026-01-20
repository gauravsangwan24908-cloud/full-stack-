const btn=document.getElementById("THEME_CHANGER")
const body=document.body

if(localStorage.getItem("theme")==="light"){
    body.classList.add("light")
    btn.innerText="Dark Mode"
}

btn.onclick=()=>{
    body.classList.toggle("light")
    const t=body.classList.contains("light")?"light":"dark"
    localStorage.setItem("theme",t)
    btn.innerText=t==="light"?"Dark Mode":"Light Mode"
}