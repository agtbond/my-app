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

   num: Array<string> = ['2', '3', '5', '9'];
   numToWord: Array<string> = ['dwa', 'trzy', 'pięc', 'dziewiec'];

   numToSort: Array<number> = [5, 2, 9, 7, 22, 13];
   wordToSort: Array<string> = ['button', 'article', 'section', 'main', 'nav'];

   text = 'Your time is limited, so dont waste it living someelses life. Dont be trapped by dogma which is living with theresults of other peoples thinking. Dont let the noise of othersopinions drown out your own inner voice. And most important,have the courage to follow your heart and intuition.';

  palindrom(word) {
    // const wordStart = word.split('').join('');
    const wordRevers = word.split('').reverse().join('');
   // const result = word === wordRevers;
    return word === wordRevers;
  }

  ngOnInit() {
    this.students = [...this.students, this.st1, this.st2, this.st3, this.st4];
    const moreThan21 = this.students.filter(el => el.age > 21);
    const nameMarcin = this.students.find(el => el.name === 'Marcin');
    const ifFirstIs9 = this.students.map(el => el.indexNo.toString().charAt(0)).some(el => el === '9');
    // "Marcin".split("")[0]
    const ifEveryMore18 = this.students.every(el => el.age > 18);
    const newStudent = [...this.students, {name: 'Magda', age: 23, indexNo: 5678}];
    const noIndexString = newStudent.map(el => el.indexNo.toString());
    const sumWomenAge = newStudent.filter(el => el.name.charAt(el.name.length - 1) === 'a')
                                  .map(el => el.age)
                                  .reduce((pre, curr) => pre + curr);

    const numToStringResult = this.num.map((el, index) => this.num[index] = this.numToWord[index]);


    // const aeo = this.text.split('').filter(el => el.includes('a') || el.includes('e') || el.includes('o')).length;
    const aeo = this.text.split('').filter(letter => ['a', 'e', 'o'].includes(letter)).length;

    // SORT
    function sortNum(numA, numB) {
        return numA - numB;
    }
    console.log(this.numToSort.sort(sortNum));
    console.log(this.wordToSort.sort());
  }

}
