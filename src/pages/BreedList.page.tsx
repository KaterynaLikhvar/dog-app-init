import { BreedsGrid } from '../components/molecules/BreedsGrid';
import { PageWrapper } from '../components/molecules/PageWrapper';
import { FilterComponent } from '../components/organisms/FilterComponent';

export const BreedListPage = () => (
  <PageWrapper>
    <FilterComponent />
    <BreedsGrid />
  </PageWrapper>
);
