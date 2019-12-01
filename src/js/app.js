var app = angular.module('App', [])

app.requires.push('DragNDrop')

app.controller('Root', ['$scope', function ($scope) {
    $scope.dataset = [
        {name:'1'},
        {name:'2'},
        {name:'3'},
        {name:'4'},
        {name:'5'},
        {name:'6'},
        {name:'7'},
    ]

    angular.element(document.getElementById('list'))[0].addEventListener('listupdated', function (e) {
        console.log(e.detail, $scope.dataset);
    });

}])