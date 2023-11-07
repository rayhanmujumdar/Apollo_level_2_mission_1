{
    // Polymorphism -> Bangla meaning is -> bohorupi
    class Person{
        getWorking(){
            console.log(`Every worker can do 8 hours work in her company`);
        }
    }

    class Employee extends Person{
        getWorking(): void {
            console.log(`Every employee can do 7 hours work in her company`);
        }
    }

    class Teacher extends Person{
        getWorking(): void {
            console.log(`Every Teacher can do 6 hours teaching her student`);
        }
    }

    const getEveryPersonWorkHours = (param: Person) => {
        param.getWorking()
    }

    const person = new Person()
    const employee = new Employee()
    const teacher = new Teacher()

    getEveryPersonWorkHours(person)
    getEveryPersonWorkHours(employee)
    getEveryPersonWorkHours(teacher)

    // more example: 
    class Shape{
        // must needed concept
        // every class  polymorphism method are same shape.
        // if you do any method use params. you must have do use every method same shape of params
        getArea():number{
            return 0
        }
    }

    class Circle extends Shape{
        radius: number
        constructor(radius: number){
            super()
            this.radius = radius
        }
        getArea(): number {
            return Math.PI * (this.radius * this.radius)
        }
    }

    class Rectangle extends Shape{
        height: number
        width: number
        constructor(height: number,width:number){
            super()
            this.height = height
            this.width = width
        }
        getArea(): number {
            return this.width * this.height
        }
    }
    const shape = new Shape()
    const circle = new Circle(10)
    const rectangle = new Rectangle(50,30)
    const getShapeArea = function (params: Shape){
        console.log(params.getArea());
    }

    // every instance are same method (getArea) but deferent value return. this is a call Polymorphism
    getShapeArea(shape)
    getShapeArea(circle)
    getShapeArea(rectangle)
}