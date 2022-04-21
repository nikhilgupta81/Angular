var myApp =  angular.module("myModul",[]);

myApp.controller("myController",function($scope)
{
    // $scope.name="secL";
    // $scope.course_fee=80000;
    // $scope.dt=Date.now();
    $scope.Subject="Full Stack";
    $scope.value = 123456;
    $scope.subject=['DS','c','C++','Java','python','C#'];
});