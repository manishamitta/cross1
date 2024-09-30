sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'cross1app',
            componentId: 'classObjectPage',
            contextPath: '/class'
        },
        CustomPageDefinitions
    );
});