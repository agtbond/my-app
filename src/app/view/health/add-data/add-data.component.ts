import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HealthComponent } from '../health.component';
import { HealthService } from '../../../services/health.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  form: FormGroup;
  // @Input() localSet;
  @Input() weight: number;
  @Output() saved = new EventEmitter<number>();

  constructor(private healthService: HealthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      weight: new FormControl(null, Validators.required)
    });
  }

  saveWeight() {
      // let keyWeight = '';
       const weight: any = this.form.value.weight;
        this.weight = weight;
      // this.localSet = localStorage.setItem(keyWeight, weight);
      // // let myItem = localStorage.getItem(weight);
      // this.healthService.setWeigth(this.localSet);

      this.saved.emit(this.weight);
      // console.log('Saved' + this.saved);

  }

  clearLocalStorage() {
    localStorage.clear();
  }




}
