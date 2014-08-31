app.controller('MainCtrl', function($scope, $timeout, $document, parallaxHelper, app_factory) {



    //inject factory :: app_factory
    $scope.factory_data = app_factory;
    console.log('$scope.factory_data = ', $scope.factory_data);

    $scope.edit_mode = $scope.factory_data.edit_mode;
    console.log('$scope.edit_mode = ', $scope.edit_mode);

    $scope.patient = $scope.factory_data.patients[0];
    $scope.patient_full = 'Herr ' + $scope.factory_data.patients[0].lastName + ' ' + $scope.factory_data.patients[0].firstName;


    $scope.background = parallaxHelper.createAnimator(-0.6);

    //---------------------------------------------------------
    // FUNCTIONS
    //---------------------------------------------------------

    $scope.toTheTop = function() {
        $document.scrollTop(0, 8000).then(function() {
            console && console.log('You just scrolled to the top!');
        });
    }

    var positionEnd = angular.element(document.getElementById('page_end'));
    $scope.toPageEnd = function() {
        $document.scrollTo(positionEnd, 0, 1000);
    }




});