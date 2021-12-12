class Platform {
    constructor(x, y, w, h) {
        this.body = Bodies.rectangle(x, y, w, h, {isStatic: true});
        World.add(world, this.body);
        this.w = w;
        this.h = h;
        this.body.label = "platform";
        this.dist = null;
        this.objects = [];
        this.direction = "NONE";
    }

    show() {
        fill(currentLevelInfo.colors.platform[0], currentLevelInfo.colors.platform[1], currentLevelInfo.colors.platform[2]);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.w, this.h,);
        // fill(255);
        // textSize(12);
        // textAlign(CENTER);
        // text(`x: ${Math.floor(this.body.position.x)} y: ${Math.floor(this.body.position.y)}`, this.body.position.x, this.body.position.y);
    }

    remove() {
        World.remove(world, this.body);
    }

    add(object){
        this.objects.push(object);
    }
}

class Boundary extends Platform {
    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.body.label = "boundary";
    }

    show() {
        fill(currentLevelInfo.colors.boundary[0], currentLevelInfo.colors.boundary[1], currentLevelInfo.colors.boundary[2]);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.w, this.h,);
    }
}

class MovingPlatform extends Platform {
    constructor(x, y, w, h, min, max, direction) {
        super(x, y, w, h);
        this.body.label = "movingPlatform";
        this.player = null;
        this.max = max ? max : width/2-20;
        this.min = min ? min : -width/2+20;
        this.v = null;
        this.vTheta = null;
        this.direction = direction ? direction : "HORIZONTAL";
        if(this.direction === "HORIZONTAL"){
            this.v = createVector(1, 0);
        } else if (this.direction === "VERTICAL") {
            this.v = createVector(0, 1);
        } else if (this.direction === "ROTATE"){
            this.vTheta = PI/300;
        }
    }

    show(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill(currentLevelInfo.colors.platform[0], currentLevelInfo.colors.platform[1], currentLevelInfo.colors.platform[2]);
        rect(0, 0, this.w, this.h,);
        pop();
    }

    move(){
        let pos = this.body.position;
        if(this.direction === "HORIZONTAL"){
            if(this.player && this.player.body.position.y > pos.y - this.h - this.player.h){
                Body.translate(this.player.body, this.v);
            }
            if((pos.x+this.w/2 >= this.max && this.v.x > 0) || (pos.x-this.w/2 <= this.min && this.v.x < 0)) {
                this.v.x *= -1;
            }
        } else if (this.direction === "VERTICAL"){
            if((pos.y+this.h/2 >= this.max && this.v.y > 0) || (pos.y-this.h/2 <= this.min && this.v.y < 0)){
                this.v.y *= -1;
            }
        } else if(this.direction === "ROTATE"){
            if(this.body.angle >= this.max && this.vTheta > 0 || this.body.angle <= this.min && this.vTheta < 0){
                this.vTheta *= -1;
            }
        }


        if(this.direction === "HORIZONTAL" || this.direction === "VERTICAL"){
            for(let object of this.objects){
                if(object.body){
                    Body.translate(object.body, this.v);
                }
            }
            Body.translate(this.body, this.v);
        } else if(this.direction === "ROTATE"){
            for(let object of this.objects){
                if(object.body){
                    Body.rotate(object.body, this.vTheta, this.body.position);
                }
            }
            Body.rotate(this.body, this.vTheta);
        }
    }

    attach(player){
        if(this.direction === "HORIZONTAL" || this.direction === "ROTATE"){
            this.player = player;
            this.player.attach(this);
        }
    }

    detach(){
        if(this.direction === "HORIZONTAL" || this.direction === "ROTATE"){
            if(this.player){
                Body.setVelocity(this.player.body, this.v);
            }
            this.player = null;
        }
    }
}

