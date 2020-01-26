import * as helpers from '@/utils/helpers';

describe('helpers', () => {
  describe('getTitle method', () => {
    it('works correct without params', () => {
      expect(helpers.getTitle()).toBeDefined();
    });

    it('works correct with unexpected param type', () => {
      const res = helpers.getTitle([]);

      expect(res).toEqual('');
    });

    it('works correct with expected param', () => {
      const res = helpers.getTitle('test_entity_1');
      const expected = 'test entity 1';

      expect(res).toEqual(expected);
    });
  });

  describe('formatTime method', () => {
    it('works correct without params', () => {
      expect(helpers.formatTime()).toBeDefined();
    });

    it('works correct with unexpected param type', () => {
      expect(helpers.formatTime(null)).toBeDefined();
    });

    it('works correct with expected param', () => {
      const res = helpers.formatTime('Sun Jan 26 2020 13:56:49 GMT+0200');
      const expected = '1/26/2020, 1:56:49 PM';

      expect(res).toEqual(expected);
    });
  });
});
