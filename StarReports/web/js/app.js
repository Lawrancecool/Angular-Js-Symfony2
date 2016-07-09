/**
 * Created by lawrance on 25/5/16.
 */
'use strict';


var globalTemplate = '<div compile-html="data" ></div>';
// Declare app level module which depends on filters, and services
var starsytemsmodule=angular.module('angularrobert', ['ui.router.compat','datepicker','ngResource','angularrobert.filters','angularrobert.directives', 'http-auth-interceptor','ngAnimate','ui.bootstrap'])
    .config(
    ['$stateProvider', '$routeProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 'prefix','messageTimer','displayDuration','$interpolateProvider',
        function($stateProvider, $routeProvider, $urlRouterProvider, $locationProvider, $httpProvider, prefix,messageTimer,displayDuration,$interpolateProvider) {
            fos.Router.getInstance().setBaseUrl(prefix);
            $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $locationProvider.html5Mode(true).hashPrefix('!');
            $interpolateProvider.startSymbol('[[');
            $interpolateProvider.endSymbol(']]');
            $stateProvider
                .state('demo', {
                    url: '/',
                    template: globalTemplate,
                    templateUrl: function(params)
                    {
                        return Routing.generate('admin_demo')
                    },
                    controller: HomeController,
                    resolve: Resolver,
                })
                .state('loginsucess', {
                    abstract: true,
                    templateUrl: function(params)
                    {
                        return Routing.generate('admin_home_layout')
                    },
                    controller: Layoutcontroller,
                    resolve: LayoutResolver
                })
                .state("loginsucess.adminhome", {
                    url: Routing.generateAngularRoute('admin_home', true),
                    templateUrl: function(params)
                    {
                        return Routing.generate('admin_home')
                    },
                    controller: HomeController,
                    resolve: Resolver,
                })
                .state("loginsucess.addemployee", {
                    url: Routing.generateAngularRoute('add_employee', false),
                    template: globalTemplate,
                    templateUrl: function(params)
                    {
                        return Routing.generate('add_employee')
                    },
                    controller: UserController,
                    resolve: Resolver,
                })
                /*  .state("loginsucess.showusers", {
                 url: Routing.generateAngularRoute('showall_user', false),
                 templateUrl: function(params)
                 {
                 return Routing.generate('showall_user')
                 },
                 controller: UserController,
                 resolve: Resolver,
                 })
                .state('loginsucess.showusers', {
                    url: Routing.generateAngularRoute('showall_user', true),
                    templateUrl: function (params) {
                        return Routing.generate('showall_user', params)
                    },
                    views: {
                        "": {
                            template:globalTemplate,
                            controller: UserController,
                            resolve: Resolver
                        }
                    }
                })*/
                . state('loginsucess.showusers', {
                    url: Routing.generateAngularRoute('showall_user', false),
                    data: {
                        'listusersUrl': '/admin/showall_user',
                    },
                    views: {
                        "": {
                            templateUrl: 'template/listuser.html',
                            controller: userlistController,
                            resolve: {
                                userresolver: function ($http, $q, $state, prefix) {
                                    var deferred = $q.defer();
                                    $http.get(prefix + this.data.listusersUrl).success(function (data) {
                                        deferred.resolve(data);
                                    })
                                    return deferred.promise;
                                }
                            }
                        }
                    }
                })
                .state("loginsucess.edituser", {
                    url: Routing.generateAngularRoute('user_edit', true),
                    template: globalTemplate,
                    templateUrl: function(params)
                    {
                        return Routing.generate('user_edit',params)
                    },
                    controller: UserController,
                    resolve: UserEditResolver,
                })
                .state("loginsucess.adddept", {
                    url: Routing.generateAngularRoute('add_dept', false),
                    template: globalTemplate,
                    templateUrl: function(params)
                    {
                        return Routing.generate('add_dept')
                    },
                    controller: DepartmentController,
                    resolve: DepartmentResolver,
                })
                .state("loginsucess.showalldept", {
                    url: Routing.generateAngularRoute('showall_dept', true),
                    template: globalTemplate,
                    templateUrl: function(params)
                    {
                        return Routing.generate('showall_dept')
                    },
                    controller: DepartmentController,
                    resolve: Resolver,
                })
                .state("loginsucess.adddesig", {
                    url: Routing.generateAngularRoute('adddesig', false),
                    template: globalTemplate,
                    templateUrl: function(params)
                    {
                        return Routing.generate('adddesig')
                    },
                    controller: DesignationController,
                    resolve: Resolver,
                })
                .state("loginsucess.showall_desig", {
                    url: Routing.generateAngularRoute('showall_desig', true),
                    template: globalTemplate,
                    templateUrl: function(params)
                    {
                        return Routing.generate('showall_desig')
                    },
                    controller: DesignationController,
                    resolve: Resolver,
                })
                .state("loginsucess.newholiday", {
                    url: Routing.generateAngularRoute('newholiday', false),
                    template: globalTemplate,
                    templateUrl: function(params)
                    {
                        return Routing.generate('newholiday')
                    },
                    controller: HolidayController,
                    resolve: Resolver,
                })
                .state("loginsucess.showall_holiday", {
                    url: Routing.generateAngularRoute('showall_holiday', true),
                    template: globalTemplate,
                    templateUrl: function(params)
                    {
                        return Routing.generate('showall_holiday')
                    },
                    controller: HolidayController,
                    resolve: Resolver,
                })
                .state("loginsucess.addnewholiday", {
                    url: Routing.generateAngularRoute('addnewholiday', false),
                    template: globalTemplate,
                    templateUrl: function(params)
                    {
                        return Routing.generate('addnewholiday')
                    },
                    controller: HolidayController,
                    resolve: Resolver,
                })
                .state('loginsucess.logout', {
                    url: Routing.generateAngularRoute('logout', false),
                    templateUrl: function (params) {
                        return Routing.generate('logout')
                    },
                    template: globalTemplate,
                    controller: LogoutCtrl,
                    resolve: Resolver
                })



        }
    ])
    .run(function($rootScope, $state,$stateParams) {
        $rootScope.$stateParams = $stateParams;
        $rootScope.activeMenu='dashborad';
        $rootScope.$on('$stateChangeStart', function (event, toRoute, toParams, fromRoute, fromParams) {
            var toStateName = toRoute.name;

            /*

             if(toStateName == 'logout') {
             $rootScope.stateToRedirectFromLogin = '';
             $rootScope.paramsToRedirectFromLogin = [];
             }
             if ($state.href(toRoute.name, toParams) != $rootScope.nextUrl) {
             // Its probably a new URL, so generate a uuid and store
             $rootScope.randomUUID = $rootScope.generateUUID();
             }
             $rootScope.nextUrl = $state.href(toRoute.name, toParams);

             $rootScope.previousState = fromRoute.name;
             $rootScope.previousStateparams = fromParams;
             if ($rootScope.changableState && $rootScope.previousUrl != '' && toStateName != $rootScope.previousUrl && fromRoute.name == $rootScope.toStateSelected) {
             event.preventDefault();
             $rootScope.changableState = false;
             //$rootScope.toStateSelected = '';
             var state = $rootScope.previousUrl;
             //$rootScope.previousUrl = '';
             $state.transitionTo(state);
             } else if (toStateName != $rootScope.toStateSelected && toStateName != $rootScope.previousUrl) {
             //console.log($rootScope.selection);
             $rootScope.selection = '';
             }
             */

        });


    });


