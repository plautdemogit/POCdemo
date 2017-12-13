jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 headerSet in the list
// * All 3 headerSet have at least one npHeadToItem

sap.ui.require([
	"sap/ui/test/Opa5",
	"namespace1/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"namespace1/test/integration/pages/App",
	"namespace1/test/integration/pages/Browser",
	"namespace1/test/integration/pages/Master",
	"namespace1/test/integration/pages/Detail",
	"namespace1/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "namespace1.view."
	});

	sap.ui.require([
		"namespace1/test/integration/MasterJourney",
		"namespace1/test/integration/NavigationJourney",
		"namespace1/test/integration/NotFoundJourney",
		"namespace1/test/integration/BusyJourney",
		"namespace1/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});