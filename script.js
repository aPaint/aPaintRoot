dButton = document.getElementById('scrollbutt')

dButton.addEventListener('mousedown',()=>{
    document.getElementById('dsect').scrollIntoView({
        behavior:'smooth'
    })
})

dButton.addEventListener('mouseup',()=>{
    document.getElementById('dsect').scrollIntoView({
        behavior:'smooth'
    })
})




function countClick(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/apaint.io/530bf04d-c821-46b9-9810-897f35b19984");
    xhr.responseType = "json";
    xhr.send();
}








