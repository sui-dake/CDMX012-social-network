// importamos la funcion que vamos a testear
import { onNavigate } from '../src/app.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof onNavigate).toBe('function');
  });
});
