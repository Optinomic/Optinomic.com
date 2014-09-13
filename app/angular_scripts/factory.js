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
            "id": '10',
            "url_label": 'Produkt',
            "title": 'Profession statt Konfession',
            "subtitle": 'Evidenzbasiertes Wissen über Ihren Patienten - per Knopfdruck.',
            "partial": '/partials/slide/about.html',
            "menu": true,
            "activated": true
        },{
            "id": '11',
            "url_label": 'Geschäftsleitung',
            "title": 'Direktion und Geschäftsleitung.',
            "subtitle": 'SBB: Schneller, Besser, Billiger.',
            "partial": '/partials/slide/gl.html',
            "menu": false,
            "activated": false
        },{
            "id": '12',
            "url_label": 'Qualitätsmanagement',
            "title": 'Qualitätsmanagement (QM)',
            "subtitle": 'Gelebte Prozesse',
            "partial": '/partials/slide/qm.html',
            "menu": false,
            "activated": false
        },{
            "id": '13',
            "url_label": 'Forschung und Diagnostik',
            "title": 'Forschung und Diagnostik (F&D)',
            "subtitle": 'Ihre Daten',
            "partial": '/partials/slide/forschung.html',
            "menu": false,
            "activated": false
        },{
            "id": '14',
            "url_label": 'Therapeuten',
            "title": 'Therapieprozesse visualisieren',
            "subtitle": 'Individualisierte Prozessforschung',
            "partial": '/partials/slide/therapeut.html',
            "menu": false,
            "activated": false
        },{
            "id": '15',
            "url_label": 'Ärzte',
            "title": 'Psychiater und Somatiker',
            "subtitle": 'Individualisierte Prozessforschung und Dianosen',
            "partial": '/partials/slide/arzt.html',
            "menu": false,
            "activated": false
        },{
            "id": '16',
            "url_label": 'Patienten',
            "title": 'Klienten / Patienten.',
            "subtitle": 'Aktive Beteiligung am Prozess auch ausserhalb der Therpiestunde.',
            "partial": '/partials/slide/patient.html',
            "menu": false,
            "activated": false
        },{
            "id": '20',
            "url_label": 'Angebote',
            "title": 'Unsere Angebote',
            "subtitle": 'you say jump - we ask how height',
            "partial": '/partials/slide/_template.html',
            "menu": true,
            "activated": true
        },{
            "id": '30',
            "url_label": 'Team',
            "title": 'Datenerfassung leicht gemacht.',
            "subtitle": 'Wirkt Ihre Behandlung oder war lediglich schönes Wetter?',
            "partial": '/partials/slide/_template.html',
            "menu": true,
            "activated": true
        },{
            "id": '40',
            "url_label": 'Kontakt',
            "title": 'Ich bin interessiert!',
            "subtitle": 'Kontaktieren Sie uns jetzt!',
            "partial": '/partials/slide/contact.html',
            "menu": true,
            "activated": true
        }]



    };
});