sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cross1app/test/integration/FirstJourney',
		'cross1app/test/integration/pages/classList',
		'cross1app/test/integration/pages/classObjectPage'
    ],
    function(JourneyRunner, opaJourney, classList, classObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cross1app') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheclassList: classList,
					onTheclassObjectPage: classObjectPage
                }
            },
            opaJourney.run
        );
    }
);