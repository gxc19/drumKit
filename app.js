// Play drum by keyboard press
const boom = document.getElementById("boom")
const clap = document.getElementById("clap")
const hihat = document.getElementById("hihat")
const kick = document.getElementById("kick")
const openhat = document.getElementById("ride")
const ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tink = document.getElementById("tink")
const tom = document.getElementById("tom")

document.addEventListener("keypress", (keyValue) => {
    if(keyValue.key === "a"){
        boom.pause()
        boom.currentTime = 0
        boom.play()
    }
    else if(keyValue.key === "s"){
        clap.pause()
        clap.currentTime = 0
        clap.play()
    }
    else if(keyValue.key === "d"){
        hihat.pause()
        hihat.currentTime = 0
        hihat.play()
    }
    else if(keyValue.key === "f"){
        kick.pause()
        kick.currentTime = 0
        kick.play()
    }
    else if(keyValue.key === "g"){
        openhat.pause()
        openhat.currentTime = 0
        openhat.play()
    }
    else if(keyValue.key === "h"){
        ride.pause()
        ride.currentTime = 0
        ride.play()
    }
    else if(keyValue.key === "j"){
        snare.pause()
        snare.currentTime = 0
        snare.play()
    }
    else if(keyValue.key === "k"){
        tink.pause()
        tink.currentTime = 0
        tink.play()
    }
    else if(keyValue.key === "l"){
        tom.pause()
        tom.currentTime = 0
        tom.play()
    }
    
})
// Play music by mouse click

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")
const button8 = document.getElementById("button8")
const button9 = document.getElementById("button9")

button1.addEventListener("click", () => {
        boom.pause()
        boom.currentTime = 0
        boom.play()
})

button2.addEventListener("click", () => {
        clap.pause()
        clap.currentTime = 0
        clap.play()
})

button3.addEventListener("click", () => {
        hihat.pause()
        hihat.currentTime = 0
        hihat.play()
})

button4.addEventListener("click", () => {
        kick.pause()
        kick.currentTime = 0
        kick.play()
})

button5.addEventListener("click", () => {
        openhat.pause()
        openhat.currentTime = 0
        openhat.play()
})

button6.addEventListener("click", () => {
        ride.pause()
        ride.currentTime = 0
        ride.play()
})

button7.addEventListener("click", () => {
        snare.pause()
        snare.currentTime = 0
        snare.play()
})


button8.addEventListener("click", () => {
        tink.pause()
        tink.currentTime = 0
        tink.play()
})

button3.addEventListener("click", () => {
        tom.pause()
        tom.currentTime = 0
        tom.play()
})