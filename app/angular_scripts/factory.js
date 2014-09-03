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
            "id": 'about',
            "title": 'Profession statt Konfession',
            "subtitle": 'Evidenzbasiertes Wissen über Ihren Patienten - per Knopfdruck.',
            "url_label": 'Über',
            "partial": '/partials/slides/about.html',
            "menu": true,
            "activated": true
        },{
            "id": 'data',
            "title": 'Datenerfassung leicht gemacht.',
            "subtitle": 'Wirkt Ihre Behandlung oder war lediglich schönes Wetter?',
            "url_label": 'Datenerfassung',
            "partial": '/partials/slides/datenerfassung.html',
            "menu": false,
            "activated": true
        }],



        modules_array: [{
            "id": "1",
            "name": "Beck-Depressions-Inventar (BDI-II)",
            "description": "Schweregrad depressiver Symptomatik im klinischen Bereich, 21 Aussagen. Ein etwas längerer Text.",
            "full_description": "Das Beck-Depressions-Inventar (BDI – Beck, Ward, Mendelson, Mock & Erbaugh, 1961) ist ein psychologisches Testverfahren, das die Schwere depressiver Symptomatik im klinischen Bereich erfasst. Es wurde nach Aaron T. Beck benannt. In dem Fragebogen mit 21 Fragen bestimmt der Teilnehmer, welche der vier Aussagen für ihn/sie in dieser Woche am zutreffendsten ist. Zur Auswertung werden die Summenwerte der einzelnen angekreuzten Aussagen addiert. Im Laufe der Zeit wurde das zuerst als standardisiertes Interview gedachte Verfahren zu zwei bearbeiteten Formen weiterentwickelt, dem BDI – 1A (1978) und dem BDI – II (1996). Ergänzend zu diesen beiden Formen gibt es seit Herbst 2013 eine Kurzform der BDI-II in deutscher Sprache, die sich BDI-FS (FS steht für FastScreen) nennt, und die Schwere einer Depression auf Basis der nicht-somatischen Symptome erfasst.",
            "responsibility": "Therapeut",
            "schedule": "Alle 14 Tage"
        }, {
            "id": "2",
            "name": "Stress- und Coping-Inventar (SCI)",
            "description": "Messung von Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien (Coping). Stressbelastung, Stresssymptomen und Stressbewältigungs-Strategien",
            "responsibility": "Patient",
            "schedule": "Bei Eintritt"
        }, {
            "id": "3",
            "name": "DIAD",
            "description": "Differentielle klinische Diagnostik adoleszentärer Dissozialisation. Kurzform.",
            "full_description": "Weitere Detailbeschreibung: Differentielle klinische Diagnostik adoleszentärer Dissozialisation. Kurzform.",
            "responsibility": "Gruppe: Therapeuten",
            "schedule": "Immer wieder"
        }]




    };
});