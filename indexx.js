var myApp =  angular.module("myModul",[]);

myApp.controller("myController",function($scope)
{
    // $scope.name="secL";
    // $scope.course_fee=80000;
    // $scope.dt=Date.now();
    $scope.Subject="Full Stack";
    $scope.value = 123456;
    $scope.subject=['DSA','ADSA','c','C++','Java','python','C#','HTML','CSS','JS','JSON'];
    $scope.stu_credentials=[
        {email:'z@z.z',pass:'zb',id:100},
        {email:'a@a.a',pass:'zg',id:10},
        {email:'b@.b',pass:'k',id:5},
        {email:'d@.d',pass:'z',id:1},

    ];
});