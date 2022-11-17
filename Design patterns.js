1) this is refer to current global object

when we use this in objects then it refer to that object



2)

const person = {

 firstName: "John",

  lastName : "Doe",

 fullName : function() {

    return this.firstName + " " + this.lastName;

  }

}



3)

class Student{

 constructor(name,age,phno,boardMarks){

  this.name=name

  this.age=age

  this.phno=phno

  this.boardMarks=boardMarks

 }

}



let StudentDetails=new Student("sai",21,"8965775276",41)

console.log(StudentDetails)



4)

function check(marks){

return marks>40?"Eligible":"Not Eligible"

}

check(41)



5)class student{

  static count=0

  static numberofstudents(name,age){

 this.count++

  console.log(`number of students ${this.count}`);

  }

 }



student.numberofstudents("sai",21)

student.numberofstudents("harish",23)

student.numberofstudents("lohith",21)

student.numberofstudents("likhith",21)

student.numberofstudents("nagaraj",22)





1)

let age=(a)=>{

console.log(age);

}

age(21);



2)

class Student{

  constructor(name,age,marks){

    this.name=name;

    this.age=age;

    this.marks=marks;

  }

  setPlacementAge(minAge){

    return (minMarks)=>{

      if(this.marks>minMarks && this.age>minAge){

          console.log(`${this.name} is Eligible`)

      }else{

        console.log(`${this.name} is not Eligible`)

      }

    }

  }

}



let sainadh=new Student("sai",21,65);

let hari=new Student("hari",20,43);

sainadh.setPlacementAge(18)(45);

hari.setPlacementAge  (18)(45)







