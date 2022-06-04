import { test } from '@vue/test-utils';

const dates = [
  {
    date_ms: 1641772800000,
    performance: 0.2,
  },
  {
    date_ms: 1641859200000,
    performance: 0.33,
  },
  {
    date_ms: 1641945600000,
    performance: 0.83,
  },
  {
    date_ms: 1642032000000,
    performance: 0.31,
  },
  {
    date_ms: 1642118400000,
    performance: 0.65,
  },
  {
    date_ms: 1642204800000,
    performance: 0.88,
  },
  {
    date_ms: 1642291200000,
    performance: 0.9,
  },
];

const from = '1642204800000';
const to = '1642291200000';
test('it shouid button from and to', () => {
  expect(dates).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ date_ms: from }),
      expect.objectContaining({ dates: to }),
    ])
  );
});
