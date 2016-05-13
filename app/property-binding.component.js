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
    var core_1, core_2;
    var PropertyBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            PropertyBindingComponent = (function () {
                function PropertyBindingComponent() {
                    this.name = '';
                    this.age = 20;
                    this.hobbiesChanged = new core_1.EventEmitter();
                }
                PropertyBindingComponent.prototype.onHobbiesChanged = function (hobbies) {
                    this.hobbiesChanged.emit(hobbies);
                };
                __decorate([
                    core_2.Input('myAge'), 
                    __metadata('design:type', Object)
                ], PropertyBindingComponent.prototype, "age", void 0);
                PropertyBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'my-property-binding',
                        template: "\n        <h2>This is the child component</h2>\n        <p>Hey {{name}} and I am {{age}} years old.</p>\n        <h4>My hobbies are: </h4>\n        <input type=\"text\" (keyup)=\"onHobbiesChanged(hobbies.value)\" #hobbies>\n    ",
                        inputs: ['name:myName'],
                        outputs: ['hobbiesChanged']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyBindingComponent);
                return PropertyBindingComponent;
            }());
            exports_1("PropertyBindingComponent", PropertyBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUFBO29CQUNJLFNBQUksR0FBRyxFQUFFLENBQUM7b0JBQ00sUUFBRyxHQUFHLEVBQUUsQ0FBQztvQkFDekIsbUJBQWMsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztnQkFLaEQsQ0FBQztnQkFIRyxtREFBZ0IsR0FBaEIsVUFBaUIsT0FBZTtvQkFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBTEQ7b0JBQUMsWUFBSyxDQUFDLE9BQU8sQ0FBQzs7cUVBQUE7Z0JBZG5CO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjt3QkFDL0IsUUFBUSxFQUFFLHNPQUtUO3dCQUNELE1BQU0sRUFBRSxDQUFDLGFBQWEsQ0FBQzt3QkFDdkIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7cUJBQzlCLENBQUM7OzRDQUFBO2dCQVVGLCtCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCwrREFRQyxDQUFBIiwiZmlsZSI6InByb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktcHJvcGVydHktYmluZGluZycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgyPlRoaXMgaXMgdGhlIGNoaWxkIGNvbXBvbmVudDwvaDI+XG4gICAgICAgIDxwPkhleSB7e25hbWV9fSBhbmQgSSBhbSB7e2FnZX19IHllYXJzIG9sZC48L3A+XG4gICAgICAgIDxoND5NeSBob2JiaWVzIGFyZTogPC9oND5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGtleXVwKT1cIm9uSG9iYmllc0NoYW5nZWQoaG9iYmllcy52YWx1ZSlcIiAjaG9iYmllcz5cbiAgICBgLFxuICAgIGlucHV0czogWyduYW1lOm15TmFtZSddLFxuICAgIG91dHB1dHM6IFsnaG9iYmllc0NoYW5nZWQnXVxufSlcblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5QmluZGluZ0NvbXBvbmVudCB7XG4gICAgbmFtZSA9ICcnO1xuICAgIEBJbnB1dCgnbXlBZ2UnKSBhZ2UgPSAyMDtcbiAgICBob2JiaWVzQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICAgb25Ib2JiaWVzQ2hhbmdlZChob2JiaWVzOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5ob2JiaWVzQ2hhbmdlZC5lbWl0KGhvYmJpZXMpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
