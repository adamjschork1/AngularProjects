var app = angular.module('todoApp', []);

app.controller('todoList', function($scope) {
  $scope.todos = [{text:'Learn Angular JS', done:true}, {text:'Build an Angular App', done:false}];
  
  $scope.addTodo = function() {
    if($scope.todoText !== '') {
      $scope.todos.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    }
  };
});
