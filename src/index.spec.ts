import { read } from './index';

describe('index.ts', (): void => {
  test('pathが 空 のとき、現在のディレクトリ の結果を返す', () => {
    const root = read('');
    const current = read('./');
    expect(root.length).toBe(current.length);
  });

  test('pathが 存在しないディレクトリ のとき、空の配列 を返す', () => {
    const nullBox = read('thereIsNoDirectory');
    expect(nullBox).toStrictEqual([]);
  });
});
