import angular from 'angular';
import angularMeteor from 'angular-meteor';


import template from './header.html';
class HeaderListCtrl {
  constructor() {
    }
}
export default angular.module('headerList', [
  angularMeteor
])
  .component('headerList', {
    templateUrl: 'imports/components/Main/header.html',
    controller: HeaderListCtrl
  });
