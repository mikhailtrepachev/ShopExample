import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IPersonalCarForm } from "../../models/personal-car-form.model";
import { ICarList } from "../../models/car-list.model";
import { ICarListItem } from "../../models/car-list-item.model";
import { AutoDto } from "@app/shared/models/api/auto/auto-dto.model";
import { colorStates } from "../../data/color-states.data";
import { registrationStates } from "../../data/registration-states.data";
import { technicalStatuses } from "../../data/technical-states.data";
import { IPersonalCarList } from "../../models/personal-car-list.model";
import { IPersonalCarListItem } from "../../models/personal-car-list-item.model";
import { MessageService } from "primeng/api";

@Component({
    selector: 'app-car-selector',
    templateUrl: './car-selector.component.html',
    styleUrls: ['./car-selector.component.scss'],
    providers: [MessageService]
})

export class CarSelectorComponent implements OnChanges {

    public form: FormGroup;
    public carItems: ICarListItem[] = [];
    public personalCarItems: IPersonalCarListItem[] = [];
    public groupedItems: any[] = [];
    public personalCar: IPersonalCarForm;
    public selectedPersonalCar: IPersonalCarListItem;

    public colors = colorStates;
    public registrationStates = registrationStates;
    public technicalStates = technicalStatuses;

    @Input() public cars: ICarList;
    @Input() public personalCars: IPersonalCarList;

    @Output() public readonly submitted = new EventEmitter<IPersonalCarForm>();
    @Output() public readonly cancelled = new EventEmitter();
    @Output() public readonly submittedPersonalCar = new EventEmitter<IPersonalCarListItem>();

    constructor(
        private readonly _formBuilder: FormBuilder,
        private readonly _messageService: MessageService
    ) { }

    public ngOnChanges(changes: SimpleChanges): void {

        this.form = this._formBuilder.group({
            selectedDistributor: [null, Validators.required],
            selectedModel: [null, Validators.required],
            selectedYear: [null, Validators.required],
            autos: [null],
            color: [null, Validators.required],
            registrationState: [null, Validators.required],
            registrationNumber: [null, Validators.required],
            technicalState: [null, Validators.required],
            wheelSize: [null, Validators.required],
            horsePower: [null, Validators.required]
        });

        console.log('ngOnChanges called with changes:', changes);

        this.carItems = this.cars?.items || [];

        this.personalCarItems = this.personalCars?.items || [];

        this.groupingItems();

        this.onChangeDistributor();
    }

    public onSubmit(): void {

        this.form.markAllAsTouched();
        
        if(!this.form.valid) {
            return;
        }

        const { id, selectedDistributor, selectedModel, selectedYear, color, registrationState, registrationNumber,
            technicalState, wheelSize, horsePower } = this.form.value;


        var autos = this.carItems.find(item => 
            item.distributorName === selectedDistributor &&
            item.modelName === selectedModel &&
            item.issueYear === selectedYear) as AutoDto;

        this.submitted.emit({
            id,
            autos,
            color,
            registrationNumber,
            registrationState,
            technicalState,
            wheelSize,
            horsePower
        } as IPersonalCarForm )        
    }

    public onChangeDistributor(): void {

      console.log(this.groupedItems);

      var distributorIndex = this.groupedItems.findIndex(item => item.distributorName === this.form.value.selectedDistributor);

      if (distributorIndex !== -1 && this.groupedItems[distributorIndex].cars.length > 0) {
        const firstCar = this.groupedItems[distributorIndex].cars[0];
        this.form.patchValue({
          selectedModel: firstCar.modelName,
          selectedYear: firstCar.issueYears[0]
        });
      } else {
        const firstCar = this.carItems[0]
        console.log(firstCar);
        this.form.patchValue({
            selectedDistributor: firstCar.distributorName,
            selectedModel: firstCar.modelName,
            selectedYear: firstCar.issueYear
        });
      }
    }

    public onSelectPersonalCar(personalCar: IPersonalCarListItem): void {

        this.selectedPersonalCar = personalCar;
    }

    public onNextStage(): void {

        if(this.selectedPersonalCar == null) {
            this._messageService.add({ severity: 'error', summary: 'Error', detail: 'Please, select a car for selling.' });
            return;
        };

        this.submittedPersonalCar.emit(this.selectedPersonalCar);
    }

    private groupingItems(): void {
        this.groupedItems = this.carItems.reduce((acc, car) => {
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
    }
 }