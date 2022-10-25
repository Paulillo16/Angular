import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AlmacenListComponent } from './almacen-list.component';
import { AlmacenService } from '../almacen.service';

describe('AlmacenListComponent', () => {
  let component: AlmacenListComponent;
  let fixture: ComponentFixture<AlmacenListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AlmacenListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule, MatFormFieldModule, MatIconModule, MatInputModule, NoopAnimationsModule],
      providers: [AlmacenService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
