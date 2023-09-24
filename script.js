const buttonSound = document.querySelectorAll("button[data-sound]")
const audio = document.querySelector("#audio")
const root = document.querySelector(":root")

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        audio.pause();
        audio.currentTime = 0;
    }

    if (e.keyCode > 48 && e.keyCode <= 57){
        const attribute = buttonSound[e.key - 1].getAttribute("data-sound")
        if (attribute !== "") playAudio(attribute)
    }
})

buttonSound.forEach(btn => {
    btn.addEventListener('click', () => playAudio(btn.getAttribute("data-sound")))

    btn.addEventListener("mouseenter", () => {
        btn.style.backgroundColor = getRandomColor()
    })

    btn.style.backgroundColor = getRandomColor()
})

function playAudio(attribute){
    const soundFile = `assets/sounds/${attribute}`
    audio.src = soundFile
    audio.play()
}

function getRandomColor(){
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
}