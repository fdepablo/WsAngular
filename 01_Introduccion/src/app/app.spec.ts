import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //App es standalone, por lo que se importa en lugar de declararse en un NgModule.
      imports: [App],
    }).compileComponents();
  });

  it('debe crear la aplicación', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('debe mostrar los datos mediante interpolación', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const elemento = fixture.nativeElement as HTMLElement;
    expect(elemento.querySelector('span')?.textContent).toContain('01_Introduccion');
    expect(elemento.querySelector('p')?.textContent).toContain('Harry Potter');
  });
});
