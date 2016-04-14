import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './menu.html';
class MenuListCtrl {
  constructor() {
    }
}
export default angular.module('menuList', [
  angularMeteor
])
  .component('menuList', {
    templateUrl: 'imports/components/menu/menu.html',
    controller: MenuListCtrl
  });
