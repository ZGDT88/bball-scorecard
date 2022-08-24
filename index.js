let count = 0
let homeCount = document.getElementById("home-count")
let guestCount = document.getElementById("guest-count")


function plusOneHome(){
    count += 1
    homeCount.textContent = count
}

function plusTwoHome(){
    count += 2
    homeCount.textContent = count
}

function plusThreeHome(){
    count += 3
    homeCount.textContent = count
}


function plusOneGuest(){
    count += 1
    guestCount.textContent = count
}

function plusTwoGuest(){
    count += 2
    guestCount.textContent = count
}

function plusThreeGuest(){
    count += 3
    guestCount.textContent = count
}