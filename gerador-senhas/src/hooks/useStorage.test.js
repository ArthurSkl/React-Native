import AsyncStorage from '@react-native-async-storage/async-storage';
import useStorage from './useStorage';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

describe('useStorage', () => {
  const storage = useStorage();
  const KEY = '@pass';

  beforeEach(() => {
    AsyncStorage.clear();
  });

  test('getItem retorna array vazio quando nao ha dados salvos', async () => {
    await expect(storage.getItem(KEY)).resolves.toEqual([]);
  });

  test('saveItem adiciona e persiste itens', async () => {
    await storage.saveItem(KEY, 'abc123');
    await storage.saveItem(KEY, 'xyz789');

    await expect(storage.getItem(KEY)).resolves.toEqual(['abc123', 'xyz789']);
  });

  test('removeItem remove apenas o item informado', async () => {
    await storage.saveItem(KEY, 'abc123');
    await storage.saveItem(KEY, 'xyz789');

    const remaining = await storage.removeItem(KEY, 'abc123');

    expect(remaining).toEqual(['xyz789']);
    await expect(storage.getItem(KEY)).resolves.toEqual(['xyz789']);
  });

  test('getItem retorna [] quando o valor armazenado nao e JSON valido', async () => {
    await AsyncStorage.setItem(KEY, 'nao-json');

    await expect(storage.getItem(KEY)).resolves.toEqual([]);
  });
});
