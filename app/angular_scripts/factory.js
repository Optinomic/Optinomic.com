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

        patients: [{
            "address1": "Haldenstrasse 7",
            "address2": " ",
            "age": 35,
            "birthdate": "1979-01-01T00:00:00.000Z",
            "birthday": "1972-05-21",
            "cisPid": 2346323,
            "city": "Oberrieden",
            "country": "CH",
            "email": "beat@ottiger.org",
            "firstName": "Beat",
            "fourLetterCode": "BOTO",
            "gender": "male",
            "lastName": "Ottiger",
            "notes": "Just me myself and I",
            "phoneHome": "043 - 305 78 80",
            "phoneMobile": "079 - 635 85 84",
            "title": "Dipl. Psych.",
            "zipCode": "8942"
        }, {
            "address1": "Fachstrasse 73a",
            "address2": " ",
            "age": 45,
            "birthdate": "1979-01-01T00:00:00.000Z",
            "birthday": "1979-01-01",
            "cisPid": 2346323,
            "city": "London",
            "country": "GB",
            "email": "beat@ottiger.org",
            "firstName": "Martina",
            "fourLetterCode": "MSZI",
            "gender": "female",
            "lastName": "Hingis",
            "notes": "Once I played tennis.",
            "phoneHome": "043 - 305 78 80",
            "phoneMobile": "079 - 635 85 84",
            "title": "",
            "zipCode": "2341"
        }],

        messages_array: [{
            "datum": "07.07.2014",
            "message": "Ein wunderschöner Tag",
            "name": "Beat Ottiger"
        }, {
            "datum": "08.07.2014",
            "message": "So ein schöner Tag",
            "name": "Tom"
        }, {
            "datum": "18.07.2014",
            "message": "Testnachricht",
            "name": "Ottiger"
        }, {
            "datum": "07.08.2014",
            "message": "Love me tender",
            "name": "Elvis Presley"
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