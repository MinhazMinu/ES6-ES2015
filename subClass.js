/*

*/


class Person6 {
    constructor(name, yearOfbith, job) {
        this.name = name;
        this.yearOfbith = yearOfbith;
        this.job = job;
    }

    calcAge6() {
        var age = new Date().getFullYear() - this.yearOfbith;
    }

    
}

class Athlete6 extends Person6 {
    constructor(name,yearOfbith,job,ollympic, medal){
        super(name,yearOfbith,job);
        this.ollympic  =ollympic
        this.medal = medal;
    }
    wonMedal(){
        this.medal++;
        console.log(this.medal);
        
    }
}

