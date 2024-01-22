import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IPersonalCarForm } from "../../models/personal-car-form.model";
import { PromotionalFacade } from "../../promotional.facade";
import { ICarList } from "../../models/car-list.model";
import { ICarListItem } from "../../models/car-list-item.model";
import { Colors } from "@app/shared/models/colors.enum";
import { RegistrationState } from "@app/shared/models/registration-state.enum";
import { TechnicalState } from "@app/shared/models/technical-state.enum";
import { AutoDto } from "@app/shared/models/api/auto/auto-dto.model";

@Component({
    selector: 'app-car-selector',
    templateUrl: './car-selector.component.html',
    styleUrls: ['./car-selector.component.scss']
})

export class CarSelectorComponent implements OnChanges {

    public form: FormGroup;
    public items: ICarListItem[] = [];
    public groupedItems: any[] = [];
    public personalCar: IPersonalCarForm;

    public colors = Colors;
    public registrationStates = RegistrationState;
    public technicalStates = TechnicalState;

    @Input() public cars: ICarList

    @Output() public readonly submitted = new EventEmitter<IPersonalCarForm>();
    @Output() public readonly cancelled = new EventEmitter();

    constructor(
        private readonly _promotionalFacade: PromotionalFacade,
        private readonly _formBuilder: FormBuilder
    ) { }

    public ngOnChanges(): void {
        this.items = this.cars?.items || [];

        this.groupingItems();
          
        this.form = this._formBuilder.group({
            selectedDistributor: [null, Validators.required],
            selectedModel: [null, Validators.required],
            selectedYear: [null, Validators.required],
            auto: [null],
            color: [null, Validators.required],
            registrationState: [null, Validators.required],
            registrationNumber: [null, Validators.required],
            technicalState: [null, Validators.required],
            wheelSize: [null, Validators.required],
            horsePower: [null, Validators.required]
        });
    }

    public onSubmit(): void {

        this.form.markAllAsTouched();
        
        if(!this.form.valid) {
            return;
        }

        const { selectedDistributor, selectedModel, selectedYear, color, registrationState, registrationNumber,
            technicalState, wheelSize, horsePower } = this.form.value;


        var auto = this.items.find(item => 
            item.distributorName === selectedDistributor &&
            item.modelName === selectedModel &&
            item.issueYear === selectedYear) as AutoDto;

        this.submitted.emit({
            auto,
            color,
            registrationNumber,
            registrationState,
            technicalState,
            wheelSize,
            horsePower
        })        
    }

    public onChangeDistributor(): void {

      var distributorIndex = this.groupedItems.findIndex(item => item.distributorName === this.form.value.selectedDistributor);

      if (distributorIndex !== -1 && this.groupedItems[distributorIndex].cars.length > 0) {
        const firstCar = this.groupedItems[distributorIndex].cars[0];
        this.form.patchValue({
          selectedModel: firstCar.modelName,
          selectedYear: firstCar.issueYears[0]
        });
      }
    }

    public getEnumValues(enumType: any): string[] {
      return Object.values(enumType);
    }

    private groupingItems(): void {
        this.groupedItems = this.items.reduce((acc, car) => {
          const existingGroup = acc.find(group => group.distributorName === car.distributorName);
      
          if (existingGroup) {
              const existingCar = existingGroup.cars.find(existingCar => existingCar.modelName === car.modelName);
              if (existingCar) {
                  existingCar.issueYears.push(car.issueYear);
              } else {
                  existingGroup.cars.push({
                      id: car.id,
                      distributorName: car.distributorName,
                      modelName: car.modelName,
                      issueYears: [car.issueYear]
                  });
              }
          } else {
              acc.push({
                  distributorName: car.distributorName,
                  cars: [{
                      id: car.id,
                      distributorName: car.distributorName,
                      modelName: car.modelName,
                      issueYears: [car.issueYear]
                  }]
              });
          }
      
          return acc;
      }, []);

      console.log(this.groupedItems);
    }
 }