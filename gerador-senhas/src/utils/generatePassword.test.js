import { CHARSET, generatePassword } from './generatePassword';

describe('generatePassword', () => {
  test('gera senha com o tamanho solicitado', () => {
    expect(generatePassword(10)).toHaveLength(10);
  });

  test('gera senhas dentro dos limites do slider (8 e 34)', () => {
    expect(generatePassword(8)).toHaveLength(8);
    expect(generatePassword(34)).toHaveLength(34);
  });

  test('usa apenas caracteres do charset', () => {
    const password = generatePassword(200);
    for (const char of password) {
      expect(CHARSET).toContain(char);
    }
  });

  test('retorna senha vazia para tamanho 0', () => {
    expect(generatePassword(0)).toBe('');
  });

  test('com Math.random mockado, produz a senha esperada', () => {
    const original = Math.random;
    Math.random = jest.fn(() => 0);
    try {
      expect(generatePassword(4)).toBe('aaaa');
    } finally {
      Math.random = original;
    }
  });

  test('gera senhas diferentes em chamadas consecutivas', () => {
    const first = generatePassword(20);
    const second = generatePassword(20);
    expect(first).not.toBe(second);
  });
});
