import { FC, useState } from 'react';
import { BreedsGrid } from '../components/molecules/BreedsGrid';
import { PageWrapper } from '../components/molecules/PageWrapper';
import { FilterComponent } from '../components/organisms/FilterComponent';
import PaginationControlled from '../components/molecules/PaginationButtons';

type BreedListPageProps = Record<string, never>;

export const BreedListPage: FC<BreedListPageProps> = () => {
  const [page, setPage] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <PageWrapper>
      <FilterComponent />
      <BreedsGrid page={page} />
      <PaginationControlled handleChange={handleChange} page={page} />
    </PageWrapper>
  );
};
