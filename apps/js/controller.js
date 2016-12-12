 angular.module("myApp")
        .controller("homeCon",["$rootScope","$scope","getdata",function ($rootScope,$scope,getdata) {

            $scope.data = getdata.data.data;
            $rootScope.data = getdata.data.data;


        }])
        .controller("contentCon",["$rootScope","$stateParams","$scope",function ($rootScope,$stateParams,$scope) {

            $scope.img = $rootScope.data[$stateParams.idx].img;
            $scope.msg = $rootScope.data[$stateParams.idx].title;


        }]);