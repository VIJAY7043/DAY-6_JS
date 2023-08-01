const log = (param)=> console.log(param)

log(".........FUNCTION FACTORY METHOD........")

function studentarr(name,age){
    return{
        name,
        age,
       getdetails : function(){
        log(`hi my name is ${name} is and my age is ${age}`)
       }
        
        
    }
}
const user1 = studentarr("suryaa",20)
user1.getdetails()
////////////////////////////////////////////////////////////////////////////////////////////////

log(".........THis method>...........")
const name = "lambo"
let indcars = {
    name:"BMW",
    model:"z900",
    newcar(){
        log(this.model)
    }
}
indcars.newcar()

log(".......constructor method............")
function Car(color,model,type){
    this.color = color;
    this.model = model;
    this.type = type;
    this.getcolor=function(){
        log(`the car is ${color}`)
    }
    this.getmodel=function(){
        log(`the car is ${model}`)
    }
    this.gettype=function(){
        log(`the car is ${type}`)
    }
}
const convechi1 = new Car("black","800","bmw")
log(convechi1)
const convechi2 = new Car("white","8010","audi")
log(convechi2)

log("........Prototypes.........")
function Car(color,model,type){
    this.color = color;
    this.model = model;
    this.type = type;
//prototypes
Car.prototype.getcolor=function(){
    log(`the car is ${color}`)
}
Car.prototype.getmodel=function(){
    log(`the car is ${model}`)
}
Car.prototype.gettype=function(){
    log(`the car is ${type}`)
}
}
const convechi3 = new Car("black","800","bmw")
log(convechi3)
const convechi4 = new Car("white","8010","audi")
log(convechi4)
//////////////////////////////////////////////////////////

log("........classes......")

class Student{
    constructor(name,batch,week){
    this.name = name;
    this.batch = batch;
    this.week = week;
    }
    getdetails(){
        log(`the name is ${this.name}and the batch is ${this.batch} and the week is${this.week}`)
    }
}
const studentname = new Student("vijay","b43we","weekend")
studentname.getdetails()
log(studentname)

//placement
 class placement extends Student{
    constructor(name,batch,week,company){
        super(name,batch,week)
        this.company= company
    }
 }
 const placestd = new placement("vijay","b4we","weekend","zoho")
log(placestd)
