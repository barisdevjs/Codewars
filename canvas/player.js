import { ctx } from "./app.js"


export default class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.color = color
        this.radius = radius
    }


    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }

    moveLeft() {
        this.x -= .01
    }

    moveRight() {
        this.x += .01
    }

    moveUp() {
        this.y -= .01
    }

    moveDown() {
        this.y += .01
    }

    aw() {
        this.x -= .01 
        this.y -= .01 
    }

    dw() {
        this.x += .01
        this.y -= .01
    }

    as() {
        this.x -= .01
        this.y += .01
    }

    ds() {
        this.x += .01
        this.y += .01
    }

    update() {
        this.draw()
        addEventListener('keydown', (event) => {
            event.preventDefault()
            switch (event.key) {
                case 'a':
                    this.moveLeft();
                    break;
                case 'd': 
                    this.moveRight();
                    break;
                case 'w':
                    this.moveUp();
                    break;
                case 's':
                    this.moveDown();
                    break;

                case 'a' && 'w':
                    this.aw();
                    break;
                case 'd' && 'w':
                    this.dw();
                    break;
                case 'a' && 's':
                    this.as();
                    break;
                case 'd' && 's':
                    this.ds();
                    break;
                default:
                    break;
            }
        });

    }
}