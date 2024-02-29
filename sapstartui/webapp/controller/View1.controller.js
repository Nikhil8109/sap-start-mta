sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sapstartui.controller.View1", {
            onInit: function () {
                var cardManifests = new sap.ui.model.json.JSONModel();

                cardManifests.loadData(
                  sap.ui.require.toUrl("sapstartui/model/cardManifest.json")
                );
        
                this.getView().setModel(cardManifests, "manifests");
            }
        });
    });
