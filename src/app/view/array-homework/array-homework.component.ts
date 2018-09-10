import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/students';
import { preserveWhitespacesDefault } from '../../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-array-homework',
  templateUrl: './array-homework.component.html'
})
export class ArrayHomeworkComponent implements OnInit {

   st1: Student = {name: 'Jan', age: 21, indexNo: 2312};
   st2: Student = {name: 'Marcin', age: 25, indexNo: 3321};
   st3: Student = {name: 'Katarzyna', age: 27, indexNo: 9988};
   st4: Student = {name: 'Maria', age: 19, indexNo: 8765};

   students: Array<Student> = [];

  constructor() { }

  palindrom(word) {
    const wordStart = word.split('').join();
    const wordRevers = word.split('').reverse().join();
    const result = wordStart === wordRevers ? true : false;
    return result;
  }

  ngOnInit() {
    this.students = [...this.students, this.st1, this.st2, this.st3, this.st4];
    const moreThan21 = this.students.filter(el => el.age > 21);
    const nameMarcin = this.students.filter(el => el.name.includes('Marcin'));
    const ifFirstIs9 = this.students.map(el => el.indexNo.toString().charAt(0)).some(el => el === '9');
    const ifEveryMore18 = this.students.every(el => el.age > 18);
    const newStudent = [...this.students, {name: 'Magda', age: 23, indexNo: 5678}];
    const noIndexString = newStudent.map(el => el.indexNo.toString());
    const sumWomenAge = newStudent.filter(el => el.name.charAt(el.name.length - 1) === 'a')
                                  .map(el => el.age)
                                  .reduce((pre, curr) => pre + curr);


    console.log(moreThan21);
    console.log(nameMarcin);
    console.log(ifFirstIs9);
    console.log(ifEveryMore18);
    console.log(newStudent);
    console.log(noIndexString);
    console.log(sumWomenAge);

    console.log('palindrom: ' + this.palindrom('kajak'));

  }


}
