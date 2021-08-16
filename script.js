let btnPile = document.getElementById("pile");
let btnFace = document.getElementById("face");
let btnPlay = document.getElementById("play");
let btnReplay = document.getElementById("replay");
let image = document.getElementById("img");
let spanResult = document.getElementById("result");
let spanRandom = document.getElementById("random");
let confetti = document.getElementById("confetti");
let explosion = document.getElementById("explosion");

let selection = ''
let result = null

const randomChoice = (min, max) => {
    btnPlay.style.display = 'none'
    btnFace.style.display = 'none'
    btnPile.style.display = 'none'
    const random = Math.floor(Math.random() * (max - min + 1)) + min
    return random
}

const final = () => {
    btnReplay.style.display = 'inline'
    if (result === 1) {
        image.src = 'https://media.discordapp.net/attachments/555531744464601121/876586130714279996/pile.jpg'
    } else {
        image.src = 'https://cdn.discordapp.com/attachments/555531744464601121/876586152528850994/face.jpg'
    }

    if (result === selection) {
        confetti.style.display = 'initial'
        spanResult.innerHTML = 'Vous avez gagné !'
        spanRandom.innerHTML = `Résultat : ${result === 1 ? 'PILE' : 'FACE'}`
    } else {
        explosion.style.display = 'initial'
        setTimeout(() => {
            explosion.style.display = 'none'
        }, 1000)
        spanResult.innerHTML = 'Vous avez perdu !'
        spanRandom.innerHTML = `Résultat : ${result === 1 ? 'PILE' : 'FACE'}`
    }
}

const reset = () => {
    btnFace.style.display = 'initial'
    btnPile.style.display = 'initial'
    confetti.style.display = 'none'
    explosion.style.display = 'none'
    spanResult.innerHTML = ''
    spanRandom.innerHTML = ''
    btnPlay.style.display = 'inline'
    btnReplay.style.display = 'none'
    btnFace.classList.remove('select')
    btnPile.classList.remove('select')
    selection = ''
    image.src = "https://i.giphy.com/media/Hx13ouuEzEff1GbcpJ/giphy.webp"
}

btnPile.addEventListener('click', () => {
    selection = 1
    btnPile.classList.add('select')
    btnFace.classList.remove('select')
})

btnFace.addEventListener('click', () => {
    selection = 2
    btnFace.classList.add('select')
    btnPile.classList.remove('select')
})

btnPlay.addEventListener('click', () => {
    if (selection === '') {
        alert('Faites un choix entre pile ou face pour jouer.')
    } else {
        result = randomChoice(1, 2)
        setTimeout(() => {
            final()
        }, 2000)
    }
})

btnReplay.addEventListener('click', () => {
    reset()
})
