import { FC } from 'react';
import { useGetImagesWithFavorites } from '../../../utilities';
import { BreedItem } from '../BreedItem';
import { useAddFavoritesMutation } from '../../../services/favorites';
import { StyledBreedsGallery } from './StyledBreedsGallery';

type BreedsGalleryProps = {
  page: number;
};

export const BreedsGallery: FC<BreedsGalleryProps> = ({ page }) => {
  const { data: favoritedImages, isLoading } = useGetImagesWithFavorites({
    limit: 10,
    page
  });
  const [addFavorite] = useAddFavoritesMutation();
  return (
    <StyledBreedsGallery>
      {isLoading && <div>Loading...</div>}
      {(favoritedImages || []).map(item => (
        <BreedItem
          item={item}
          key={item.id}
          url={item.url}
          isFavorite={item.isFavorite}
          addFavorite={addFavorite}
        />
      ))}
    </StyledBreedsGallery>
  );
};
