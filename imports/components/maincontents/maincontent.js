import angular from 'angular';
import angularMeteor from 'angular-meteor';
import studentList from '../studentsList/studentList';
import template from './maincontent.html';
class MaincontentCtrl {
  constructor() {

  }
}
export default angular.module('maincontentList', [
  angularMeteor,
  studentList.name
])
  .component('maincontentList', {
    templateUrl: 'imports/components/maincontents/maincontent.html',
    controller:MaincontentCtrl
  });
