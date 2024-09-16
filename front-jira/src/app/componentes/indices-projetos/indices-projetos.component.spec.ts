import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicesProjetosComponent } from './indices-projetos.component';

describe('IndicesProjetosComponent', () => {
  let component: IndicesProjetosComponent;
  let fixture: ComponentFixture<IndicesProjetosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndicesProjetosComponent]
    });
    fixture = TestBed.createComponent(IndicesProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
