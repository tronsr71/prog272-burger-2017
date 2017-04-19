#!/usr/bin/env node

var person = {
	firstName: "Jeff",
	lastName: "Burger",
	fullName: function() { 'use strict';
		return this.firstName + ' ' + this.lastName;
	}
}

//console.log(person.firstName);
//console.log(person.lastName);
//console.log(person.fullName());

var calculator = {
	operator01: -1,
	operator02: -1,
	add: function() {
		return this.operator01 + this.operator02;
	},
	subtract: function() {
		return this.operator01 - this.operator02;
	}
}

calculator.operator01 = person.firstName.length;
calculator.operator02 = person.lastName.length;

//console.log(calculator.operator01);
//console.log(calculator.operator02);

//console.log(calculator.add());
//console.log(calculator.subtract());

calculator.multiply = function() {
	return this.operator01 * this.operator02;
}

//console.log(calculator.multiply());

function divider(title) {
    console.log("====================================");
    console.log(title);
    console.log("====================================");
}


divider("Person");
console.log("First name: " + person.firstName);
console.log("Last name:  " + person.lastName);
console.log("Full name:  " + person.fullName());
divider("Calculator");
console.log("Operator01: " + calculator.operator01);
console.log("Operator02: " + calculator.operator02);
console.log("Add:        " + calculator.add());
console.log("Subtract:   " + calculator.subtract());
console.log("Multiply:   " + calculator.multiply());


