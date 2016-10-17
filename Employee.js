'use strict'

const fs = require('fs')

class Employee {
  constructor (name, title, salary) {
    this.name = name
    this.title = title
    this.salary = salary
  }

static parseFromFilePath( path ){

let result = JSON.parse(fs.readFileSync(path))

return new Employee(result.name, result.title, result.salary)

}


  promote(title,salary){
    this.title = title
    this.salary = salary
  }

}//end of class

// TODO ???

module.exports = {
  Employee
}
