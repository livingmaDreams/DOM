"use strict";
class student{
    static count = 0;
    constructor(name,age,pn,mark){
        this.name= name;
        this.age = age;
        this.pn = pn;
        this.mark = mark;
        this.eligible = (mark) => {
            if(this.mark>40)
            return this.name + " is Eligible for College";
            else
            return this.name + " is NOT Eligible for College";    
        }
        student.count++;
    }
    total()
    {
        console.log("Total No. of student is " + student.count);
    }
}

let studdetail = [{name:'s1',age:20,pn : 9693939343, mark : 41},
{name:'s2',age :20,pn : 9693939343, mark : 39},
{name:'s3',age:20,pn : 9693939343, mark : 33},
{name:'s4',age:20,pn : 9693939343, mark : 30},
{name:'s5',age:20,pn : 9693939343, mark : 41}
];
let obj = [];
let i=0;
for (let x of studdetail)
{
    let  n1 = x.name;
    let a1 = x.age;
    let p1 = x.pn;
    let m1 = x.mark;
    obj[i] = new student(n1,a1,p1,m1);
    i++;
}

for(let x of obj)
{
    console.log(x.eligible());
}