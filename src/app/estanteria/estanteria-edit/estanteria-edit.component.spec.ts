import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EstanteriaEditComponent } from './estanteria-edit.component';
import { EstanteriaService } from '../estanteria.service';

describe('EstanteriaEditComponent', () => {
  let component: EstanteriaEditComponent;
  let fixture: ComponentFixture<EstanteriaEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EstanteriaEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule, MatFormFieldModule],
      providers: [EstanteriaService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstanteriaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
