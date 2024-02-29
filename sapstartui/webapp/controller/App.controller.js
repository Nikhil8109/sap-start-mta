sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("sapstartui.controller.App", {
        onInit: function() {
          $.ajax({
            url: "noAuthPCM/jobStatus?operator=upgrade&id=d8a33264c45a4ec8bfcf638ba6222e86",
            type: "GET",
            contentType: "application/json",
            success: function (data) {
             console.log(data.value);
            },
            error: function (err) {
              console.log(err);
            },
          });
        }
      });
    }
  );
  