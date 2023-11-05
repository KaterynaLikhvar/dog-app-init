import { Stack, Typography } from '@mui/material';
import { FilterButton } from '../../atoms/FilterButton';

export const FilterComponent = () => (
  <Stack
    direction="row"
    spacing={2}
    alignItems="center"
    margin="0 0 36px auto"
    width="fit-content"
  >
    <Typography component="span" color="#ADA7B8">
      Sort by:
    </Typography>
    <FilterButton state="default" />
    <FilterButton state="down" />
    <FilterButton state="random" />
  </Stack>
);
