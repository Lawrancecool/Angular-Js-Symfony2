'use strict';

/* Controllers */


function WelcomeController($scope, datasets)
{
    $scope.title='Admin Page';
    $scope.data = datasets;
    console.log($scope.data);
    $scope.holiday = false;
    $scope.holidayFunction = function() {
        $scope.holiday = !$scope.holiday;
        $scope.leave=false;
        $scope.employee= false;
    };
    $scope.leave = false;
    $scope.employee= false;
    $scope.employeeFunction=function(){
        $scope.leave = false;
        $scope.holiday = false;
        $scope.employee= !$scope.employee;
    };
    $scope.leaveFunction = function() {
        $scope.leave = !$scope.leave;
        $scope.holiday = false;
        $scope.employee= false;
    };

}


function HomeController($scope,$stateParams, $location, $http, $state, authService, datasets, prefix,$rootScope)
{
    var currentState = $state.current.name;
    if(currentState=='loginsucess.adminhome')
    {
        $rootScope.selectedmenu='Dashboard';
    }
    if(currentState=='loginsucess.addemployee')
    {
        $rootScope.selectedmenu='Employee';
    }
    $scope.classname='newactive';
    $scope.append = $state.name + "-appended";
    $scope.holiday = false;
    $scope.data = datasets;
    // Layoutcontroller.call(this, $scope, $http, $state, datasets, $rootScope);
    if( $scope.data.location)
    {
        var dataLocation =  $scope.data.location.replace(/\//g, '');
        $state.transitionTo(dataLocation);

    }
    $scope.testMe = function() {
        $window.alert($scope.email + ":" + $scope.message);
    }
    $scope.formSubmit = function(formElem) {
        $http.post($scope.actionVal, formElem.serialize()).
        success(function(data, status)
        {
            $rootScope.errorMessage='';

            if(data.location)
            {
                var dataLocation = data.location.replace(/\//g, '');
                $state.transitionTo(dataLocation);
            }
            else
            {
                $rootScope.errorMessage = data.errormsg;
                $scope.login_form = {};
            }


        }).
        error(function(data, status)
        {
            $scope.data = data;

        });
    }
}
function DepartmentController($scope, $http, $state, $rootScope, datasets, prefix)
{
    $rootScope.selectedmenu='Department';
    $scope.append = $state.name + "-appended";
    $scope.data = datasets;
    $scope.formSubmit = function(formElem) {
        $http.post($scope.actionVal, formElem.serialize()).
        success(function(data, status)
        {
            $rootScope.errorMessage='';

            if(data.location)
            {
                var dataLocation = data.location.replace(/\//g, '');
                $state.transitionTo(dataLocation);

            }
            else
            {
                $rootScope.errorMessage = data.errormsg;
                $scope.dept_form = {};
            }

        }).
        error(function(data, status)
        {
            $scope.data = data;

        });
    }
}
function DesignationController($scope, $http, $state, $rootScope, datasets, prefix)
{
    $rootScope.selectedmenu='Designation';
    $scope.append = $state.name + "-appended";
    $scope.data = datasets;
    $scope.formSubmit = function(formElem) {
        $http.post($scope.actionVal, formElem.serialize()).
        success(function(data, status)
        {
            $rootScope.errorMessage='';

            if(data.location)
            {
                var dataLocation = data.location.replace(/\//g, '');
                $state.transitionTo(dataLocation);

            }
            else
            {
                $rootScope.errorMessage = data.errormsg;
                $scope.dept_form = {};
            }

        }).
        error(function(data, status)
        {
            $scope.data = data;

        });
    }
}
function HolidayController($scope, $http, $state, $rootScope, datasets, prefix)
{
    $rootScope.selectedmenu='Holiday';
    $scope.append = $state.name + "-appended";
    $scope.data = datasets;
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    // Disable weekend selection
    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0,0,0,0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }
    $scope.formSubmit = function(formElem) {
        $http.post($scope.actionVal, formElem.serialize()).
        success(function(data, status)
        {
            $rootScope.errorMessage='';

            if(data.location)
            {
                var dataLocation = data.location.replace(/\//g, '');
                $state.transitionTo(dataLocation);

            }
            else
            {
                $rootScope.errorMessage = data.errormsg;
                $scope.dept_form = {};
            }

        }).
        error(function(data, status)
        {
            $scope.data = data;

        });
    }
}
function UserController($scope, $http, $state, $rootScope, datasets, prefix,$timeout,getIdData)
{
    var currentState = $state.current.name;
    if(currentState=='loginsucess.edituser')
    {
      /*  $scope.deactivateUser=function(userid,event)
        {
            $http.post(prefix + '/'+userid+'/userstatus_change').
            success(function (data, status) {
                if (data.status_inactive) {
                    $(event.target).removeClass('fa fa-fw fa-toggle-on green');
                    $(event.target).addClass('fa fa-fw fa-toggle-off red');
                    $scope.statusmsg=data.status_inactive;
                }
                else if (data.status_active)
                {
                    $(event.target).removeClass('fa fa-fw fa-toggle-off red');
                    $(event.target).addClass('fa fa-fw fa-toggle-on green');
                    $scope.statusmsg=data.status_active;
                    $scope.showMessage = true;
                }
                else
                {
                    $scope.statusmsg=data.status_msg;
                    $scope.showMessage = true
                }
            }).
            error(function(data, status)
            {
                $scope.status = status;

            });
        };*/
       console.log(getIdData);
    }
    $rootScope.selectedmenu='Employee';
    $scope.append = $state.name + "-appended";
    $scope.data = datasets;
    $scope.formSubmit = function(formElem) {
        $http.post($scope.actionVal, formElem.serialize()).
        success(function(data, status)
        {
            $scope.reg_form = {};
            $rootScope.errorMessage='';

            if(data.location)
            {
                var dataLocation = data.location.replace(/\//g, '');
                $state.transitionTo(dataLocation);

            }
            else
            {
                $rootScope.errorMessage = data.errormsg;
                $scope.reg_form = {};
            }

        }).
        error(function(data, status)
        {
            $scope.data = data;

        });
    }
}
function  userlistController($scope, $http, $state, $rootScope, datasets, prefix,userresolver,$timeout,displayDuration,messageTimer)
{
    $rootScope.selectedmenu='Employee';
    $scope.append = $state.name + "-appended";
    $scope.statusmsg='';
    $scope.data = datasets;
    $scope.users=userresolver.userlist;
    $scope.showMessage = false;
    //this method Used to User Active and De-active Starts Here//
    $scope.deactivateUser=function(userid,event)
    {
        $http.post(prefix + '/'+userid+'/userstatus_change').
        success(function (data, status) {
            if (data.status_inactive) {
                $(event.target).removeClass('fa fa-fw fa-toggle-on green');
                $(event.target).addClass('fa fa-fw fa-toggle-off red');
                $scope.statusmsg=data.status_inactive;
                $scope.showMessage = true;
                messageTimer = $timeout(function () {
                    $scope.showMessage = false;
                }, displayDuration);
            }
            else if (data.status_active)
            {
                $(event.target).removeClass('fa fa-fw fa-toggle-off red');
                $(event.target).addClass('fa fa-fw fa-toggle-on green');
                $scope.statusmsg=data.status_active;
                $scope.showMessage = true;
                messageTimer = $timeout(function () {
                    $scope.showMessage = false;
                }, displayDuration);
            }
            else
            {
                $scope.statusmsg=data.status_msg;
                $scope.showMessage = true;
                messageTimer = $timeout(function () {
                    $scope.showMessage = false;
                }, displayDuration);

            }
        }).
        error(function(data, status)
        {
            $scope.status = status;

        });
    };
    //this method Used to User Active and De-active Ends Here//
}
function Layoutcontroller($scope,$state, datasets,$rootScope)
{
    $scope.postProcessCheck = function (data, status) {
    }
    $rootScope.selectedmenu='Dashboard';
    $scope.data = datasets;
    $scope.plusicon=true;
    $scope.downicon=false;
    $scope.holiday = false;
    var currentState = $state.current.name;
    if(currentState=='loginsucess.adddept' ||currentState=='loginsucess.showalldept')
    {

        $scope.employee= !$scope.employee;
    }
    $scope.holidayFunction = function() {
        $scope.holiday = !$scope.holiday;
        $scope.leave=false;
        $scope.employee= false;
    };
    $scope.leave = false;
    $scope.employee= false;
    $scope.employeeFunction=function()
    {

        if($scope.plusicon==true)
        {
            $scope.downicon=!$scope.downicon;
            $scope.plusicon=false;
        }
        else if($scope.downicon==true)
        {
            $scope.plusicon=!$scope.plusicon;
            $scope.downicon=false;
        }
        $scope.leave = false;
        $scope.holiday = false;
        $scope.employee= !$scope.employee;
    };
    $scope.leaveFunction = function()
    {

        $scope.leave = !$scope.leave;
        $scope.holiday = false;
        $scope.employee= false;
    };

}

function LogoutCtrl($scope, $stateParams, $http, $state, $location, datasets)
{
    $scope.data = datasets;
    $location.path('/');

}

var Resolver = {
    datasets: function($q, $http, $stateParams,$rootScope) {
        if (typeof(this.templateUrl) == 'string')
            return;
        var deferred = $q.defer();
        $http.get(this.templateUrl($stateParams)).success(function(data,status,headersObj) {
            var headers = headersObj();
            SetRootScopeValues($rootScope, headers);
            deferred.resolve(data);
        });
        return deferred.promise;
    }
}
var LayoutResolver = {
    datasets: function ($q, $http, $stateParams,$rootScope)
    {
        //This is Used For when we pass Template url As String//
        if (typeof(this.templateUrl) == 'string')
            return;
        //This is Used For when we pass Template url As function//
        var deferred = $q.defer();
        $http.get(this.templateUrl($stateParams)).success(function (data,status,headersObj) {
            var headers = headersObj();
            SetRootScopeValues($rootScope, headers);

            deferred.resolve(data);
        });
        return deferred.promise;
    }
}
var DepartmentResolver = {
    datasets: function ($q, $http, $stateParams,$rootScope)
    {
        //This is Used For when we pass Template url As String//
        if (typeof(this.templateUrl) == 'string')
            return;
        //This is Used For when we pass Template url As function//
        var deferred = $q.defer();
        $http.get(this.templateUrl($stateParams)).success(function (data,status,headersObj) {
            var headers = headersObj();
            SetRootScopeValues($rootScope, headers);

            deferred.resolve(data);
        });
        return deferred.promise;
    }
}
function SetRootScopeValues($rootScope, headers) {
    if (headers['x-clientid'] != $rootScope['clientId']) {
        // $rootScope.clientId = headers['x-clientid'];
        $rootScope.username = headers['x-username'];
        $rootScope.userId = headers['x-userid'];
        $rootScope.sessionId = headers['x-sessionid'];
        // $rootScope.userLanguage = headers['x-userlanguage'];
        // moment.lang($rootScope.userLanguage);
        $rootScope.userTimezone = headers['x-usertimezone'];

        /* if ($rootScope.clientId && $rootScope.username && $rootScope.userId) {
         // Logout the other users
         if (!pubnub) {
         pubnub = PubNub.init({
         publish_key: 'pub-c-3667b777-7a55-40a2-b8ab-4c503795b2c3',
         subscribe_key: 'sub-c-a0aa0d88-2f7c-11e5-8fa4-02ee2ddab7fe',
         origin: 'pubsub.pubnub.com',
         ssl: true,
         uuid: 'commusoft_' + $rootScope.clientId + '_' + $rootScope.username
         });
         }

         pubnub.publish({
         channel: 'commusoft_' + $rootScope.clientId + '_' + $rootScope.userId,
         message: {
         text: 'cs:logout',
         from: {
         userId: $rootScope.userId,
         username: $rootScope.username,
         sessionId: $rootScope.sessionId
         }
         },
         callback: function () {
         }
         });

         $rootScope.$broadcast('chat:register');
         }*/
    }
}
var UserEditResolver = {
    getIdData: function ($q, $http, $stateParams, $state, $rootScope) {
        if (typeof(this.templateUrl) == 'string') {
            return;
        }
        var deferred = $q.defer();
        $http.get(this.templateUrl($stateParams)).success(function (data, status) {
            //var headers = headersObj();
            //SetRootScopeValues($rootScope, headers, PubNub);
            console.log(data);
            deferred.resolve(data);

        }).error(function(data, status, headers, config, statusText) {
            if(status == 404){
               // fiveHundredError.setData(data);
            }else if(status == 500){
              //  fiveHundredError.setData({'message' : 'Please contact your administrator'});
            }
            //$state.transitionTo('fivehundred');
        });
        return deferred.promise;
    }
}

