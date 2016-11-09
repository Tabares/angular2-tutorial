System.register(["angular2/platform/browser", "./environment_app.component", "./hello_world_app.component", "./component_app.component", "./list_app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, environment_app_component_1, hello_world_app_component_1, component_app_component_1, list_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (environment_app_component_1_1) {
                environment_app_component_1 = environment_app_component_1_1;
            },
            function (hello_world_app_component_1_1) {
                hello_world_app_component_1 = hello_world_app_component_1_1;
            },
            function (component_app_component_1_1) {
                component_app_component_1 = component_app_component_1_1;
            },
            function (list_app_component_1_1) {
                list_app_component_1 = list_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(environment_app_component_1.AppComponent);
            browser_1.bootstrap(hello_world_app_component_1.HelloWorldComponent);
            browser_1.bootstrap(component_app_component_1.DataComponent);
            browser_1.bootstrap(list_app_component_1.TemplateComponent);
        }
    }
});
//# sourceMappingURL=environment_main.js.map