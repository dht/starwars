import React from 'react';
import { Last, Wrapper } from './Breadcrumbs.style';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// TODO: Implement Breadcrumbs component with proper items

export type BreadcrumbsProps = {
  categoryId: string;
};

export function Breadcrumbs(props: BreadcrumbsProps) {
  const { categoryId } = props;

  return (
    <Wrapper className='Breadcrumbs-wrapper' data-testid='Breadcrumbs-wrapper'>
      <MuiBreadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='white' href='/'>
          Home
        </Link>
        <Last sx={{ color: 'white' }}>{categoryId}</Last>
      </MuiBreadcrumbs>
    </Wrapper>
  );
}

export default Breadcrumbs;
