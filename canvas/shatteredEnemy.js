import { ctx } from "./app.js"

const friction = .995

export default class ShatteredEnemy { // particle
    constructor(x, y, radius, color,velocity) {
        this.x = x
        this.y = y
        this.color = color
        this.radius = radius
        this.velocity = velocity
        this.alpha = 1
    }

    

    draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.restore()
        ctx.closePath()
    }

    update() {
        this.draw()
        this.velocity.x *= friction
        this.velocity.y *= friction
        this.x += this.velocity.x
        this.y += this.velocity.y
        this.alpha -= 0.01
    }
}