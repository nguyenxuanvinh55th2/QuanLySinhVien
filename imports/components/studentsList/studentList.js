import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Students} from '../../api/students.js';

import template from './studentList.html';

class StudentListCtrl {
    constructor($scope){
      //?
      $scope.viewModel(this);
      this.helpers({
        students(){
        //  console.log(Students.find({}));
          return Students.find({});
        }
      })
      }

      //outside constructor
      //add newStudent
      addStudent(newStudent){
        Students.insert({
          name:newStudent.name,
          born:newStudent.born

        });
        this.newStudent.name='';
        this.newStudent.born='';
    }
    //update phai chuyen vao _id

    updateStudent(student,born){
      Students.update(
        student._id,
        {$set:{born:born}}
      );
    }
    //delete
    deleteStudent(student){
      Students.remove(student._id);
    }
}

export default angular.module('studentList', [
  angularMeteor
])
  .component('studentList', {
    templateUrl: 'imports/components/studentsList/studentList.html',
    controller: ['$scope',StudentListCtrl]
  });
