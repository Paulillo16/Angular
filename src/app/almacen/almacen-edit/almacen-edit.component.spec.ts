import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AlmacenEditComponent } from './almacen-edit.component';
import { AlmacenService } from '../almacen.service';

describe('AlmacenEditComponent', () => {
  let component: AlmacenEditComponent;
  let fixture: ComponentFixture<AlmacenEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AlmacenEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule, MatFormFieldModule],
      providers: [AlmacenService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
