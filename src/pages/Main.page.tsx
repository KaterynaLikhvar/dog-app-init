import { BreedsGallery } from '../components/molecules/BreedsGallery';
import { PageWrapper } from '../components/molecules/PageWrapper';
import PaginationControlled from '../components/molecules/PaginationButtons';
import { FilterComponent } from '../components/organisms/FilterComponent';

export const MainPage = () => (
  <PageWrapper>
    <FilterComponent />
    <BreedsGallery />
    <PaginationControlled />
  </PageWrapper>
);
