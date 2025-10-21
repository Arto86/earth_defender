import { GameObject } from "./gameobject/gameobject.js";
import { Player } from "./gameobject/player.js";

export class Game{
    private context : CanvasRenderingContext2D;
    public readonly CANVAS_WIDTH : number = 900;
    public readonly CANVAS_HEIGHT : number = 600;

    constructor(){
        const canvas : HTMLCanvasElement = document.querySelector("canvas");
        canvas.width = this.CANVAS_WIDTH;
        canvas.height = this.CANVAS_HEIGHT;
        this.context = canvas.getContext("2d");
    }

    private player : Player;
    public start() : void{
        this.context.clearRect(
            0, 0,
            this.CANVAS_WIDTH, this.CANVAS_HEIGHT
        );
        this.context.fillStyle = "#141414";
        this.context.fillRect(
            0, 0,
            this.CANVAS_WIDTH, this.CANVAS_HEIGHT
        );

        const gameObject = new GameObject(this);
        
        this.player = new Player(this);
        this.draw(gameObject);
        this.draw(this.player);
        this.loop();
    }

    private draw(gameObject : GameObject){
        this.context.drawImage(
            gameObject.getImage(),
            gameObject.getPosition().x,
            gameObject.getPosition().y,
            gameObject.getImage().width,
            gameObject.getImage().height
        );
    }

    private loop(){
        setInterval(()=>{

        }, 10);
    }
}