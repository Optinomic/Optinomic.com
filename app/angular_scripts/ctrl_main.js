app.controller('MainCtrl', function($scope, $timeout, $document, parallaxHelper, app_factory) {

    //---------------------------------------------------------
    // Init
    //---------------------------------------------------------

    // Inject factory :: app_factory
    $scope.factory_data = app_factory;
    console.log('$scope.factory_data = ', $scope.factory_data);

    // Slides
    get_visible_slides()


    // Scroll & Parallax
    $scope.background = parallaxHelper.createAnimator(-0.6);

    // Headline Ticker
    $scope.current_headline_id = 0;
    $scope.current_headline = $scope.factory_data.welcome_ticker_de[0];
    Ticker();


    //---------------------------------------------------------
    // FUNCTIONS
    //---------------------------------------------------------

    function get_visible_slides() {
        var all_slides = $scope.factory_data.slides;
        var visible_slides = [];
        var menu_slides = [];

        // ------------------------------------
        // Loop durch alle Slides
        // ------------------------------------
        for (var i = 0; i < all_slides.length; i++) {
            if (all_slides[i].activated) {
                //console.log('pushed - get_visible_slides: ', i, all_slides[i].activated);
                visible_slides.push(all_slides[i]);
            }
        }

       //console.log('get_visible_slides: visible_slides', visible_slides);

        // ------------------------------------
        // Loop durch alle aktivated Slides
        // ------------------------------------
        for (i = 0; i < visible_slides.length; i++) {
            if (visible_slides[i].menu) {
                //console.log('pushed - get_visible_slides: ', i, all_slides[i].activated);
                menu_slides.push(visible_slides[i]);
            }
        }

       //console.log('get_visible_slides: menu_slides', menu_slides);

        // Write Array
        $scope.slides = visible_slides;
        $scope.slides_menu = menu_slides;
    }

    function Ticker() {
        $timeout(Ticker, 4500);
        var how_many = 3;

        if ($scope.current_headline_id === how_many) {
            $scope.current_headline_id = 1;
        } else {
            $scope.current_headline_id = $scope.current_headline_id + 1;
        }

        $scope.current_headline = $scope.factory_data.welcome_ticker_de[$scope.current_headline_id];
        //console.log('Ticker = ', $scope.current_headline);
    }


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