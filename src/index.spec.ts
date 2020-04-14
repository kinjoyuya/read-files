import { read } from './index';

describe('index.ts', (): void => {
  test('pathが 空 のとき、現在のディレクトリ の結果を返す', () => {
    const root = read('');
    const current = read('./');
    expect(root.length).toBe(current.length);
  });
});
