class Player {
    constructor(x, y, numLives, maxLives) {
        this.w = 30;
        this.h = 30;
        this.body = Bodies.rectangle(x, y, this.w, this.h);
        World.add(world, this.body);
        this.body.label = "player";
        this.numJumps = 0;
        this.bonuses = [];
        this.lives = numLives ? numLives : 3;
        this.maxLives = maxLives ? maxLives : 5;
        this.damgagedTimer = 0;
        this.baseStats = {
            jump: 0.03,
            speed: 2,
            maxNumJump: 2
        };
        this.stats = {...this.baseStats};
        this.platform = null;
    }

    jump() {
        if(this.platform){
            this.detach();
        }
        if (this.numJumps < this.stats.maxNumJump) {
            Body.applyForce(this.body, this.body.position, createVector(0, -this.stats.jump));
            this.numJumps++;
        }
    }

    resetJumps() {
        this.numJumps = 0;
    }

    move(direction) {
        Body.setVelocity(this.body, createVector(direction * this.stats.speed, this.body.velocity.y));
    }

    update() {
        if(this.platform){
            if(this.body.position.y > this.platform.body.position.y){
                this.detach();
            }
        }
        this.stats = {...this.baseStats};
        for (let bonusIndex = this.bonuses.length - 1; bonusIndex >= 0; bonusIndex--) {
            this.bonuses[bonusIndex].duration--;
            if (this.bonuses[bonusIndex].duration > 0) {
                this.stats[this.bonuses[bonusIndex].name] += this.bonuses[bonusIndex].value;
            } else if (this.bonuses[bonusIndex].duration < 0) {
                this.bonuses.splice(bonusIndex, 1);
            }
        }
        if (this.damgagedTimer > 0) {
            this.damgagedTimer--;
        }
    }

    show() {
        push();
        if (camera.orientation === "VERTICAL") {
            translate(width / 2, camera.y - height / 2 - height/6);
        } else if (camera.orientation === "HORIZONTAL") {
            translate(width + this.body.position.x - width/5, this.body.position.y - height / 2 + height/20);
        }
        let y = 0;
        for (let livesIndex = 0; livesIndex < this.maxLives; livesIndex++) {
            let x = (livesIndex % 5) * 30 - width + 40;
            y += (livesIndex % 5) === 0 ? 30 : 0;
            if (livesIndex < this.lives) {
                fill(255, 60, 60);
                ellipse(x, y, 20, 20);
            } else {
                fill(150, 75, 75);
                ellipse(x, y, 20, 20);
            }

        }
        y = 0;
        for (let bonusIndex = 0; bonusIndex < this.bonuses.length; bonusIndex++) {
            let x = -80;
            y += 30;
            textAlign(CENTER);
            fill(255);
            textSize(12);
            text(`${Math.ceil(this.bonuses[bonusIndex].duration / 60)}s`, x - 30, y + 5);
            fill(objectColors[this.bonuses[bonusIndex].name][0],
                objectColors[this.bonuses[bonusIndex].name][1],
                objectColors[this.bonuses[bonusIndex].name][2]);
            ellipse(x, y, 20, 20);
            fill(255);
            text(`x${this.bonuses[bonusIndex].multiplier}`, x + 30, y + 5);
        }
        pop();

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        if (this.damgagedTimer > 0) {
            fill(min(currentLevelInfo.colors.player[0] + (this.damgagedTimer % 10 * 20), 255),
                max(currentLevelInfo.colors.player[1] - (this.damgagedTimer % 10 * 20), 0),
                max(currentLevelInfo.colors.player[2] - (this.damgagedTimer % 10 * 20), 0),
                map(this.damgagedTimer % 10, 0, 9, 100, 255)
            );
        } else {
            fill(min(currentLevelInfo.colors.player[0] + (this.damgagedTimer % 10 * 20), 255),
                max(currentLevelInfo.colors.player[1] - (this.damgagedTimer % 10 * 20), 0),
                max(currentLevelInfo.colors.player[2] - (this.damgagedTimer % 10 * 20), 0)
            );
        }

        rect(0, 0, this.h, this.w);
        pop();
    }

    remove() {
        World.remove(world, this.body);
    }

    attach(platform){
        this.platform = platform;
    }

    detach(){
        if(this.platform){
            this.platform.detach();
        }
        this.platform = null;
    }
}
