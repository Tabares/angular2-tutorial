System.register(["angular2/core", './item-list.component', './datadisplay_app.component', './data_binding_app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, item_list_component_1, datadisplay_app_component_1, data_binding_app_component_1;
    var DataComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (item_list_component_1_1) {
                item_list_component_1 = item_list_component_1_1;
            },
            function (datadisplay_app_component_1_1) {
                datadisplay_app_component_1 = datadisplay_app_component_1_1;
            },
            function (data_binding_app_component_1_1) {
                data_binding_app_component_1 = data_binding_app_component_1_1;
            }],
        execute: function() {
            DataComponent = (function () {
                function DataComponent() {
                }
                DataComponent = __decorate([
                    core_1.Component({
                        selector: 'data-app',
                    }),
                    core_1.View({
                        template: "\n    <h3>Welcome to {{data}}</h3>\n    <h4>Embeding components on the view<h4>\n    <hr>\n    <h4>1.- Component List<h4>\n    <my-list></my-list>\n    <hr>\n    <h4>2.- Component Iformation<h4>\n    <my-information></my-information>\n    <hr>\n    <h4>3.- Component Form<h4>\n    <form-component></form-component>\n    <hr>\n  ",
                        directives: [item_list_component_1.ItemComponent, datadisplay_app_component_1.InformationComponent, data_binding_app_component_1.FormComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], DataComponent);
                return DataComponent;
            }());
            exports_1("DataComponent", DataComponent);
        }
    }
});
//# sourceMappingURL=component_app.component.js.map