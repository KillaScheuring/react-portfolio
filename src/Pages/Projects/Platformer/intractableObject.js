class intractableObject {
    constructor(x, y) {
        this.w = 10;
        this.h = this.w;
        this.body = Bodies.rectangle(x, y - 10 - this.h / 2, this.w, this.h, {isStatic: true});
        World.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(objectColors[this.body.label][0], objectColors[this.body.label][1], objectColors[this.body.label][2]);
        ellipse(0, 0, this.w, this.h);
        pop();
    }

    remove() {
        World.remove(world, this.body);
    }

}

class Health extends intractableObject{
    constructor(x, y, healAmount) {
        super(x, y);
        this.w += 5 * (healAmount - 1);
        this.h = this.w;
        this.body.label = "health";
        this.healAmount = healAmount;
    }

    interact(player) {
        if (player.lives < player.maxLives) {
            player.lives =
                (player.lives + this.healAmount) > player.maxLives ?
                    player.maxLives :
                    player.lives + this.healAmount;
        }
        player.damgagedTimer = 0;
    }
}

class MaxHealth extends intractableObject{
    constructor(x, y) {
        super(x, y);
        this.body.label = "maxHealth";
    }

    interact(player) {
        player.maxLives++;
        player.lives = player.maxLives;
        player.damgagedTimer = 0;
    }
}

class Boost extends intractableObject{
    constructor(x, y, boostAmount, duration) {
        super(x, y);
        this.w += 5 * (boostAmount - 1);
        this.h = this.w;
        this.body.label = "boost";
        this.boost = boostAmount;
        this.multiplier = boostAmount;
        this.duration = duration;
    }

    interact(player){
        player.bonuses.push({
            name: this.body.label,
            value: this.boost,
            duration: this.duration,
            multiplier: this.multiplier
        });
    }
}

class JumpBoost extends Boost{
    constructor(x, y, boostAmount, duration) {
        super(x, y, boostAmount, duration);
        this.body.label = "jump";
        this.boost = 0.0025 * boostAmount;
    }
}

class NumJumpBoost extends Boost{
    constructor(x, y, boostAmount, duration) {
        super(x, y, boostAmount, duration);
        this.body.label = "maxNumJump";
    }
}

class SpeedBoost extends Boost{
    constructor(x, y, boostAmount, duration) {
        super(x, y, boostAmount, duration);
        this.body.label = "speed";
        this.boost = 0.5 * boostAmount;
    }
}

class Spike {
    constructor(x, y) {
        this.size = 10;
        this.body = Bodies.rectangle(x, y - 10 - this.size, this.size * 2, this.size * 2, {isStatic: true});
        World.add(world, this.body);
        this.body.label = "spike";
    }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        fill(objectColors.spike[0], objectColors.spike[1], objectColors.spike[2]);
        triangle(-this.size, this.size, 0, -this.size, this.size, this.size);
        pop();
    }

    remove() {
        World.remove(world, this.body);
    }

    interact(player) {
        if (player.damgagedTimer > 0) {
            return;
        }
        player.damgagedTimer = 90;
        player.lives--;
    }
}

class UnderSpike extends Spike {
    constructor(x, y) {
        super(x, y);
        this.body.label = "underSpike";
        Body.translate(this.body, createVector(0, 40));
    }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        fill(objectColors.underSpike[0], objectColors.underSpike[1], objectColors.underSpike[2]);
        triangle(-this.size, -this.size, 0, this.size, this.size, -this.size);
        pop();
    }
}


class Portal {
    constructor(x, y, type) {
        this.type = typeof type === "string" ? type : "NEXT_LEVEL";
        this.w = 30;
        this.h = 50;
        this.body = Bodies.rectangle(x, y - 10 - this.h / 2, this.w, this.h, {isStatic: true});
        World.add(world, this.body);
        this.body.label = "portal";
    }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        if (this.type === "NEXT_LEVEL") {
            fill(objectColors.portal[0], objectColors.portal[1], objectColors.portal[2]);
            rectMode(CENTER);
            rect(0, 0, this.w, this.h);
        } else if (this.type === "BONUS_LEVEL") {
            fill(currentLevelInfo.colors.background[0], currentLevelInfo.colors.background[1], currentLevelInfo.colors.background[2]);
            rectMode(CENTER);
            rect(0, 0, this.w, this.h);
        }

        pop();
    }

    remove() {
        World.remove(world, this.body);
    }

    interact() {
        if (this.type === "NEXT_LEVEL") {
            if (camera.orientation === "VERTICAL") {
                GAME_LEVEL++;
            }
            GAME_STATE = "WIN";
            camera.orientation = "VERTICAL";
        } else if (this.type === "BONUS_LEVEL") {
            GAME_STATE = "WIN";
            previousLevel.bounds = bounds.slice();
            previousLevel.intractableObjects = intractableObjects.slice();
            previousLevel.intractableObjects.splice(intractableObjects.indexOf(this), 1);
            previousLevel.platforms = platforms.slice();
            camera.orientation = "HORIZONTAL";
        }
    }
}
