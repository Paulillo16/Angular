import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Almacen } from 'src/app/models/almacen';
import { AlmacenService } from 'src/app/services/almacen-service';

@Component({
  selector: 'app-almacen-form',
  templateUrl: './almacen-form.component.html',
  styleUrls: ['./almacen-form.component.css']
})
export class AlmacenFormComponent implements OnInit {

  //almacen: Almacen;
  almacenFormGroup;
  id: number = 1;

  constructor(private formBuilder: FormBuilder,
    private almacenService: AlmacenService) { 
    this.almacenFormGroup = this.formBuilder.group({
      id: 0,
      cliente: '',
      tipo: '',
      tamanio: 0
    });
  }

  ngOnInit(): void {
    //this.almacen = this.almacenService.findById(this.id);
  }

  onSubmit(customerData) {
    this.almacenService.save(customerData);
  }

}
