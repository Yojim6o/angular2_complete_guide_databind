System.register(['angular2/core', "./property-binding.component"], function(exports_1, context_1) {
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
    var core_1, property_binding_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (property_binding_component_1_1) {
                property_binding_component_1 = property_binding_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = '';
                    this.hobbies = '';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <section class=\"parent\">\n            <h2>this is the parent</h2>\n            <h4>Please enter your name</h4>\n            <input type=\"text\" [(ngModel)]=\"name\" [value]=\"name\">\n            <br><br>\n            <section class=\"child\">\n                <my-property-binding [myName]=\"name\"\n                [myAge]=\"26\" (hobbiesChanged)=\"hobbies = $event\"></my-property-binding>\n            </section>\n            <p>My hobbies are: {{hobbies}}</p>\n        </section>\n    ",
                        directives: [property_binding_component_1.PropertyBindingComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLEVBQUUsQ0FBQztvQkFDVixZQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixDQUFDO2dCQXBCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUseWZBWVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMscURBQXdCLENBQUM7cUJBQ3pDLENBQUM7O2dDQUFBO2dCQUlGLG1CQUFDO1lBQUQsQ0FIQSxBQUdDLElBQUE7WUFIRCx1Q0FHQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBQcm9wZXJ0eUJpbmRpbmdDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9wZXJ0eS1iaW5kaW5nLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYXJlbnRcIj5cbiAgICAgICAgICAgIDxoMj50aGlzIGlzIHRoZSBwYXJlbnQ8L2gyPlxuICAgICAgICAgICAgPGg0PlBsZWFzZSBlbnRlciB5b3VyIG5hbWU8L2g0PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJuYW1lXCIgW3ZhbHVlXT1cIm5hbWVcIj5cbiAgICAgICAgICAgIDxicj48YnI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgPG15LXByb3BlcnR5LWJpbmRpbmcgW215TmFtZV09XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBbbXlBZ2VdPVwiMjZcIiAoaG9iYmllc0NoYW5nZWQpPVwiaG9iYmllcyA9ICRldmVudFwiPjwvbXktcHJvcGVydHktYmluZGluZz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxwPk15IGhvYmJpZXMgYXJlOiB7e2hvYmJpZXN9fTwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1Byb3BlcnR5QmluZGluZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBuYW1lID0gJyc7XG4gICAgaG9iYmllcyA9ICcnO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
