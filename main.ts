#!/usr/bin/env node

class Roman{
    profession: string
    professionalLink: string

    constructor(profession:string, professionalLink:string){
        this.profession= profession
        this.professionalLink= professionalLink
    }
    
    getCurrentInfo():string{
        return `\nProfession: ${this.profession}, Professional Link: ${this.professionalLink}\n`
        
    }
    getCurrentinfo():string{
        return `\nOn Going Studies: ${this.profession}, Professional Link: ${this.professionalLink}\n`
        
    }
}

let currentInfo = new Roman ("Freelancer", "https://www.freelancer.com/u/roman206?sb=t")
let currentStudies = new Roman("Genrative AI Engineering", "https://github.com/romankhan26")

console.log(currentInfo.getCurrentInfo());
console.log(currentStudies.getCurrentinfo());
