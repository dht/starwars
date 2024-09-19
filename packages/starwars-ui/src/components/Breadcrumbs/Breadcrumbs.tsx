import React from 'react';
import { Wrapper } from './Breadcrumbs.style';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export type BreadcrumbsProps = {};

export function Breadcrumbs(_props: BreadcrumbsProps) {
  return (
    <Wrapper className='Breadcrumbs-wrapper' data-testid='Breadcrumbs-wrapper'>
      <MuiBreadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='white' href='/'>
          Home
        </Link>
        <Typography sx={{ color: 'white' }}>Characters</Typography>
      </MuiBreadcrumbs>
    </Wrapper>
  );
}

export default Breadcrumbs;
