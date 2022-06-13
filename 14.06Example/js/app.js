function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  function Employee(name, age, test) {
    this.test = test;
    Person.call(this, name, age);
  }
  let employee = new Employee('eli', 20, 'test');
  console.log(employee);


var football= {

    name : "messi",
    
    };
    console.log("name : "+ football.name);
    football.name = "ronaldo";

    console.log("name : "+ football.name);
    
    football.name = "neymar";
    
    console.log("name : "+ football.name);
