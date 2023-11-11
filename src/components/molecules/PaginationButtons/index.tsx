import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FC } from 'react';

type PaginationControlledProps = {
  page: number;
  handleChange: (_event: React.ChangeEvent<unknown>, value: number) => void;
};

const PaginationControlled: FC<PaginationControlledProps> = ({
  page,
  handleChange
}) => (
  <Stack spacing={2} margin="20px 0 0 auto" width="fit-content">
    <Pagination count={10} page={page} onChange={handleChange} />
  </Stack>
);

export default PaginationControlled;
