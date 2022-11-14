import { AccountPageHeader } from '@kiti/merchant/account/ui/account-page-header';
import { AppBackgroundImage } from '@kiti/shared/ui/app-background-image';
import { MainLayout } from '@kiti/shared/ui/app-layout';
import React, { ReactNode } from 'react';

import { NextPageWithLayout } from '../_app';

type Props = {};

const Index: NextPageWithLayout = (props: Props) => {
  return <div>Merchant Account</div>;
};

Index.getLayout = function getLayout(page: ReactNode) {
  return (
    <>
      <AppBackgroundImage />
      <MainLayout layout="account">
        <AccountPageHeader title="Merchant Account" />
        {page}
      </MainLayout>
    </>
  );
};

export default Index;
