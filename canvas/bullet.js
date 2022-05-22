import { ctx } from "./app.js"

export default class Bullet {
    constructor(x, y, radius, color,velocity) {
        this.x = x
        this.y = y
        this.color = color
        this.radius = radius
        this.velocity = velocity
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }

    update() {
        this.draw()
        this.x += this.velocity.x
        this.y += this.velocity.y
    }
}