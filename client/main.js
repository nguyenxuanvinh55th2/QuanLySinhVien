import angular from 'angular';
import angularMeteor from 'angular-meteor';
import menuList from '../imports/components/menu/menu'
import headerList from '../imports/components/Main/header'
import maincontentList from '../imports/components/maincontents/maincontent'
angular.module('app-students',[
  angularMeteor,
  menuList.name,
  headerList.name,
  maincontentList.name
]);
