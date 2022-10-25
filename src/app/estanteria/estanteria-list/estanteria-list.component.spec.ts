import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EstanteriaListComponent } from './estanteria-list.component';
import { EstanteriaService } from '../estanteria.service';

describe('EstanteriaListComponent', () => {
  let component: EstanteriaListComponent;
  let fixture: ComponentFixture<EstanteriaListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EstanteriaListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule, MatFormFieldModule, MatIconModule, MatInputModule, NoopAnimationsModule],
      providers: [EstanteriaService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstanteriaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
