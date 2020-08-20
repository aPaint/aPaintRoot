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