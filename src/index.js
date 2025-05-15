import isString from './q1.js';
import isEmpty from './q2.js';
import toArray from './q3.js';
import toCut from './q4.js';
import toAbbrev from './q5.js';

let input = document.getElementById('stringInput');
let number = document.getElementById('numberInput');

let cardTitle1 = document.getElementById('question1Title');
let cardTitle2 = document.getElementById('question2Title');
let cardTitle3 = document.getElementById('question3Title');
let cardTitle4 = document.getElementById('question4Title');
let cardTitle5 = document.getElementById('question5Title');

var string = input.value;
var value = number.value;

cardTitle1.innerHTML = isString(string);
cardTitle2.innerHTML = isEmpty(string);
cardTitle3.innerHTML = toArray(string);
cardTitle4.innerHTML = toCut(string, value);
cardTitle5.innerHTML = toAbbrev(string);
