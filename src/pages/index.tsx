import { BreedsGallery } from '../components/molecules/BreedsGallery';
import { PageWrapper } from '../components/molecules/PageWrapper';
import PaginationControlled from '../components/molecules/PaginationButtons';
import { FilterComponent } from '../components/organisms/FilterComponent';

export * from './BreedItem.page';
export * from './BreedList.page';
export * from './Vote.page';
export * from './History.page';
export * from './Uploads.page';

export const MainPage = () => (
  <PageWrapper>
    <FilterComponent />
    <BreedsGallery />
    <PaginationControlled />
  </PageWrapper>
);
