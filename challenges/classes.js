// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidClass{
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume(){
        return this.volume = this.length * this.height * this.width
    }
    surfaceArea(){
        return this.surfaceArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

const perfectCube = new CuboidClass(4,5,5)
// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(`Class Volume ${perfectCube.volume()}`)
console.log(`Class Surface Area ${perfectCube.surfaceArea()}`)

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class Cube extends CuboidClass {
    constructor(dimension){
        super(dimension);
        this.length = dimension;
        this.width = dimension;
        this.height = dimension;
    }
    volume(){
        return this.volume = Math.pow(this.length, 3);
    }
    surfaceArea(){
        return this.surfaceArea = 6*(Math.pow(this.length,2))
    }
}

const myCube = new Cube(10);

console.log(`myCube area = ${myCube.volume()}`)
console.log(`myCube surface area = ${myCube.surfaceArea()}`)