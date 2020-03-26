describe('hasRealEstateDraft', () => {
  describe('with real estate drafts', () => {
    it('returns true', () => {
      const realEstateDrafts = [
        {
          address: 'São Paulo',
          status: 'UNSAVED'
        }
      ];

      expect(hasRealEstateDraft(realEstateDrafts)).toBeTruthy();
    });
  });

  describe('with not drafts', () => {
    it('returns false', () => {
      expect(hasRealEstateDraft([])).toBeFalsy();
    });
  });
});

describe('getRealEstateDrafts', () => {
  describe('with an empty list', () => {
    it('returns true', () => {
      const realEstates = [];

      expect(getRealEstateDrafts(realEstates)).toMatchObject([]);
    });
  });

  describe('with only unsaved real estates', () => {
    it('returns false', () => {
      const realEstates = [
        {
          address: 'São Paulo',
          status: 'UNSAVED'
        },
        {
          address: 'Tokyo',
          status: 'UNSAVED'
        }
      ];

      expect(getRealEstateDrafts(realEstates)).toMatchObject(realEstates);
    });
  });

  describe('with only saved real estates', () => {
    it('returns false', () => {
      const realEstates = [
        {
          address: 'São Paulo',
          status: 'SAVED'
        },
        {
          address: 'Tokyo',
          status: 'SAVED'
        }
      ];

      expect(getRealEstateDrafts(realEstates)).toMatchObject([]);
    });
  });

  describe('with saved and unsaved real estates', () => {
    it('returns false', () => {
      const realEstates = [
        {
          address: 'São Paulo',
          status: 'SAVED'
        },
        {
          address: 'Tokyo',
          status: 'UNSAVED'
        }
      ];

      expect(getRealEstateDrafts(realEstates)).toMatchObject([{
        address: 'Tokyo',
        status: 'UNSAVED'
      }]);
    });
  });
});
