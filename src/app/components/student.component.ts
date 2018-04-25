import { Component } from '@angular/core';
import { student } from '../student';

@Component({
  selector: 'student-selector',
  templateUrl: './student.component.html'

})
export class StudentComponent {
  
  students: student[];
  student=  new student();
  constructor(){ 
    this.students =[
        {firstname: 'test' ,lastname: 'Hajer',email:'hajer@esprit.tn',cin:'122'},
        {firstname: '' ,lastname:'Ahmed',email:'ahmed@esprit.tn',cin:'987'},
        {firstname: '' ,lastname:'Seif',email:'seif@esprit.tn',cin:'345'},
        {firstname: '' ,lastname:'Safa',email:'safa@esprit.tn',cin:'564'}];
  }

 
  
  deleteStudent(index){
    console.log('in delete');
    this.students.splice(index,1);
  }
  
  addStudent(student){
    this.students.push(student);
  }
}
/*


*/