class Greet{
    public name?: string;
    constructor(name?:string){
        this.name = name
        console.log(name)
    }

    sayHello = () =>{
        console.log(`Hello ${this.name}, Welcome to Angular!`)
    }

}

const greet = new Greet('Elo');
greet.name = 'Ivan';
greet.sayHello()
