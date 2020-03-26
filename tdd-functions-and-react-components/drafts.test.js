describe('getRealEstateDrafts', () => {
  describe('with an empty list', () => {
    it('returns an empty list', () => {
      const realEstates = [];

      expect(getRealEstateDrafts(realEstates)).toMatchObject([]);
    });
  });

  describe('with only unsaved real estates', () => {
    it('returns the drafts', () => {
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
    it('returns an empty list', () => {
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
    it('returns the drafts', () => {
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
