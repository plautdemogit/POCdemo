sap.ui.define([
		"namespace1/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("Ktwrt").length, 1, "The sorting by Ktwrt returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("Ebeln").length, 1, "The sorting by Ebeln returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("Ktwrt").length, 1, "The group by Ktwrt returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to Ktwrt if the user groupes by Ktwrt", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("Ktwrt");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "Ktwrt", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by Ebeln and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "Ktwrt");

		this.oGroupSortState.sort("Ebeln");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});