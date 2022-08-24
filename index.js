let hCount = 0
let gCount = 0
let homeCount = document.getElementById("home-count")
let guestCount = document.getElementById("guest-count")
let clean = document.getElementById("reset")


function plusOneHome(){
    hCount += 1
    homeCount.textContent = hCount
}

function plusTwoHome(){
    hCount += 2
    homeCount.textContent = hCount
}

function plusThreeHome(){
    hCount += 3
    homeCount.textContent = hCount
}


function plusOneGuest(){
    gCount += 1
    guestCount.textContent = gCount
}

function plusTwoGuest(){
    gCount += 2
    guestCount.textContent = gCount
}

function plusThreeGuest(){
    gCount += 3
    guestCount.textContent = gCount
}

function reset(){
    gCount = 0
    hCount = 0
    guestCount.textContent = gCount
    homeCount.textContent = hCount
    
}