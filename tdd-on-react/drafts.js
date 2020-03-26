const hasRealEstateDraft = (realEstateDrafts) => realEstateDrafts.length > 0;

const getRealEstatesDraftsV1 = (realEstates) => {
  const unsavedRealEstates = realEstates.filter((realEstate) => realEstate.status === 'UNSAVED');
  return unsavedRealEstates;
};

const STATUS = {
  UNSAVED: 'UNSAVED',
  SAVED: 'SAVED',
};

const byUnsaved = (realEstate) => realEstate.status === STATUS.UNSAVED;

const getRealEstatesDraftsV2 = (realEstates) => realEstates.filter(byUnsaved);
