import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React from 'react';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} margin="20px 0 0 auto" width="fit-content">
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}
