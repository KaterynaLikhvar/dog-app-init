import { useParams } from 'react-router-dom';
import { ImageComponent } from '../components/molecules/BreedItemGallery';

export const BreedItemPage = () => {
  const { breedId } = useParams();

  return (
    <div>
      <h1>Breed: {breedId}</h1>
      <ImageComponent breedId={breedId} />
    </div>
  );
};
