import { useState } from 'react';
import { BreedsGallery } from '../components/molecules/BreedsGallery';
import { PageWrapper } from '../components/molecules/PageWrapper';
import PaginationControlled from '../components/molecules/PaginationButtons';
import { FilterComponent } from '../components/organisms/FilterComponent';

export const MainPage = () => {
  const [page, setPage] = useState(1);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <PageWrapper>
      <FilterComponent />
      <BreedsGallery page={page} />
      <PaginationControlled page={page} handleChange={handleChange} />
    </PageWrapper>
  );
};
