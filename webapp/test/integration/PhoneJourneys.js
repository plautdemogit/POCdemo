jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"namespace1/test/integration/NavigationJourneyPhone",
		"namespace1/test/integration/NotFoundJourneyPhone",
		"namespace1/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});