app.factory('app_factory', function() {

    return {

        // ------------------------------------------
        // Init
        // ------------------------------------------
        edit_mode: false,


        // ------------------------------------------
        // Firebase
        // ------------------------------------------
        firebase_root: 'https://optinomix.firebaseio.com/',



        // ------------------------------------------
        // Some Data-Arrays
        // ------------------------------------------

        welcome_ticker_de: [{
            "title": 'Profession statt Konfession',
            "subtitle": 'Evidenzbasiertes Wissen über Ihren Patienten - per Knopfdruck.'
        }, {
            "title": '(Prozess-) Forschung',
            "subtitle": 'Wirkt Ihre Behandlung oder war lediglich schönes Wetter?'
        }, {
            "title": 'Moderne Statistik',
            "subtitle": 'Vergessen Sie alles über Statistik, was Sie bereits vergessen haben!'
        }, {
            "title": 'Erkennen und Verstehen',
            "subtitle": '(Therapie-) Prozesse visualisieren'
        }],


        slides: [{
            "id": 'product',
            "url_label": 'Produkt',
            "title": 'Profession statt Konfession',
            "subtitle": 'Evidenzbasiertes Wissen über Ihren Patienten - per Knopfdruck.',
            "partial": '/partials/slide/about.html',
            "menu": true,
            "activated": true
        },{
            "id": 'offers',
            "url_label": 'Angebote',
            "title": 'Unsere Angebote',
            "subtitle": 'you say jump - we ask how height',
            "partial": '/partials/slide/about.html',
            "menu": true,
            "activated": true
        },{
            "id": 'gl',
            "url_label": 'Geschäftsleitung',
            "title": 'Geschäftsleitung.',
            "subtitle": 'SBB: Schneller, besser, billiger.',
            "partial": '/partials/slide/datenerfassung.html',
            "menu": true,
            "activated": false
        },{
            "id": 'team',
            "url_label": 'Team',
            "title": 'Datenerfassung leicht gemacht.',
            "subtitle": 'Wirkt Ihre Behandlung oder war lediglich schönes Wetter?',
            "partial": '/partials/slide/datenerfassung.html',
            "menu": true,
            "activated": true
        },{
            "id": 'contact',
            "url_label": 'Kontakt',
            "title": 'Ich bin interessiert!',
            "subtitle": 'Kontaktieren Sie uns jetzt!',
            "partial": '/partials/slide/datenerfassung.html',
            "menu": true,
            "activated": true
        }]



    };
});