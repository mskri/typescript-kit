import { helloWorld } from 'utils/helloWorld';

test('hello world responds', () => {
  expect(helloWorld()).toBe('Hello world!');
});
