import { Component, OnInit } from '@angular/core';
import { ALMACENES } from 'src/app/mocks/almacenes-mock';

@Component({
  selector: 'app-almacenes',
  templateUrl: './almacenes.component.html',
  styleUrls: ['./almacenes.component.css']
})
export class AlmacenesComponent implements OnInit {

  almacenes = ALMACENES;

  constructor() { }

  ngOnInit(): void {
  }

}
