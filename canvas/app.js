import Bullet from "./bullet.js";
import Player from "./player.js";
import Enemy from "./enemy.js";
import ShatteredEnemy from "./shatteredEnemy.js";

// remove scroolbar

document.getElementById("board").onwheel = function (event) {
    event.preventDefault();
};

document.getElementById("board").onmousewheel = function (event) {
    event.preventDefault();
};

const modal = document.getElementById("modal")
const scoreElement = document.getElementById('score')
const startButton = document.getElementById('startBtn')
const h1 = document.getElementById('h1') // Modal score


const canvas = document.getElementById('board')
canvas.width = window.innerWidth
canvas.height = window.innerHeight // can be written as ctx.height = innerHeight  

export const ctx = canvas.getContext('2d')

const middleX = innerWidth / 2
const middleY = innerHeight / 2

let playerOne = new Player(middleX, middleY, 15, 'white')
playerOne.draw()


let bullets = [] // projectiles
let enemies = []
let shatteredEnemyArray = []

function reset() {
    playerOne = new Player(middleX, middleY, 15, 'white')
    bullets = []
    enemies = []
    shatteredEnemyArray = []
    score = 0
    scoreElement.innerHTML = score
    h1.innerHTML = score
}

function spawnEnemy() {
    setInterval(() => {
        const radius = Math.random() * (30 - 5) + 5
        let x, y;
        if (Math.random() < 0.5) {
            x = Math.random() < 0.5 ? -radius : innerWidth + radius
            y = Math.random() * innerHeight
        } else {
            x = Math.random() * innerWidth
            y = Math.random() < 0.5 ? -radius : innerHeight + radius
        }
        const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
        const angle = Math.atan2(middleY - y, middleX - x)
        const velocity = {
            y: Math.sin(angle),
            x: Math.cos(angle)
        }
        const enemy = new Enemy(x, y, radius, color, velocity)
        enemies.push(enemy)

    }, 2500)
}

let animationID
let score = 0
function animate() {
    animationID = requestAnimationFrame(animate)
    ctx.fillStyle = `rgba(0, 0, 0, 0.2) ` // it is for making shadows on the background
    ctx.fillRect(0, 0, innerWidth, innerHeight)
    playerOne.update()
    shatteredEnemyArray.forEach((shattered, sIdx) => { // if you want to render sth on the screen you must call update() method
        if (shattered.alpha <= 0) {
            shatteredEnemyArray.splice(sIdx, 1)
        } else {
            shattered.update()
        }
    })

    bullets.forEach((bullet, bulletIndex) => {
        bullet.update()

        // remove bullet if it goes out of bounds
        if (bullet.x + bullet.radius < 0 || bullet.x - bullet.radius > innerWidth
            || bullet.y + bullet.radius < 0 || bullet.y - bullet.radius > innerHeight) {
            setTimeout(() => {
                bullets.splice(bulletIndex, 1)
            }, 0)
        }
    })


    enemies.forEach((enemy, eIdx) => {
        enemy.update()
        const killerDist = Math.hypot(playerOne.x - enemy.x, playerOne.y - enemy.y)
        if (killerDist < playerOne.radius + enemy.radius) {
            // console.log('you lose')
            cancelAnimationFrame(animationID)
            modal.style.display = 'flex'
            h1.innerHTML = score
            startButton.innerHTML = 'Restart'
        }

        // remove an  enemy if it touches a bullet

        bullets.forEach((bullet, bIdx) => {
            const dist = Math.hypot(bullet.x - enemy.x, bullet.y - enemy.y)
            if (dist < enemy.radius + bullet.radius) {
                score += Math.floor(enemy.radius)
                scoreElement.innerHTML = score

                // if the bullet hits the enemy create a shattered enemy
                for (let i = 0; i < enemy.radius; i++) {
                    shatteredEnemyArray.push(
                        new ShatteredEnemy
                            (bullet.x,
                                bullet.y,
                                Math.random() * 2 + 1,
                                enemy.color, {
                                x: (Math.random() - .5) * 5,
                                y: (Math.random() - .5) * 5
                            }))

                }
                if (enemy.radius - 10 > 10) {
                    gsap.to(enemy, { // for shrinking the enemy
                        duration: 0.5,
                        radius: enemy.radius - 10,
                        ease: 'power2.inOut',
                    })
                    setTimeout(() => {
                        bullets.splice(bIdx, 1)
                    }, 0)
                } else {

                    setTimeout(() => {
                        enemies.splice(eIdx, 1)
                        bullets.splice(bIdx, 1)
                    }, 0)
                }
            }
        })

    })

}

addEventListener('click', (e) => {
    const angle = Math.atan2(e.clientY - playerOne.y, e.clientX - playerOne.x)
    const velocity = {
        x: Math.cos(angle) * 5,
        y: Math.sin(angle) * 5
    }
    const bullet = new Bullet(playerOne.x, playerOne.y, 5,
        'wheat', velocity)
    bullets.push(bullet)
})


startButton.addEventListener('click', () => {
    reset()
    animate()
    spawnEnemy()
    modal.style.display = 'none'
})

