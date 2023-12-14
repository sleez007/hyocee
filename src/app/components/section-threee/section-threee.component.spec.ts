import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionThreeeComponent } from './section-threee.component';

describe('SectionThreeeComponent', () => {
  let component: SectionThreeeComponent;
  let fixture: ComponentFixture<SectionThreeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionThreeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionThreeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
