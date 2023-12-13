import { useParams } from 'react-router-dom';
import { ImageComponent } from '../components/molecules/BreedItemGallery';
import { PageWrapper } from '../components/molecules/PageWrapper';

export const BreedItemPage = () => {
  const { breedId } = useParams();

  return (
    <PageWrapper>
      <ImageComponent imageId={breedId} />
    </PageWrapper>
  );
};
