System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var InformationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InformationComponent = (function () {
                function InformationComponent() {
                    this.equipment = ['ball', 'boots', 'hersey', 'shorts', 'gloves'];
                    this.myEquipment = this.equipment[2];
                    this.capital = 'Mexico';
                }
                InformationComponent = __decorate([
                    core_1.Component({
                        selector: 'my-information',
                        template: "\n    <h2>Showing data using component properties with interpolation</h2>\n    <h3>Player Name: {{player}}</h3>\n    <h3>He is famous in: {{sport}}</h3><br>\n\n    <h2>Showing data using constructor or variable initialization</h2>\n    <h3>Mexico capital is: {{capital}}</h3><br>\n\n    <h2>Showing data using array property with NgFor</h2>\n    <h3>My favorite Item for football is: {{myEquipment}}</h3>\n    <p>List of Equipment:</p>\n    <ul>\n       <li *ngFor=\"#item of equipment\">\n          {{ item }}\n       </li>\n    </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], InformationComponent);
                return InformationComponent;
            }());
            exports_1("InformationComponent", InformationComponent);
        }
    }
});
//# sourceMappingURL=datadisplay_app.component.js.map