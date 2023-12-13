import { useGetBreedsQuery } from '../../../services/breeds';
import { StyledBreedsGrid } from './StyledBreedsGrid';
import { FC } from 'react';
import { BreedItemCard } from '../BreedItemCard';

type BreedsGridProps = {
  page: number;
};

export const BreedsGrid: FC<BreedsGridProps> = ({ page }) => {
  const { data: breeds, isLoading } = useGetBreedsQuery({
    limit: 6,
    page: page
  });

  return (
    <StyledBreedsGrid>
      {isLoading && <div>Loading...</div>}
      {(breeds || []).map(item => {
        return (
          // <div></div>
          <BreedItemCard
            item={item}
            key={item.id}
            url={item.image.url}
            temperament={item.temperament}
          ></BreedItemCard>
        );
      })}
    </StyledBreedsGrid>
  );
};
