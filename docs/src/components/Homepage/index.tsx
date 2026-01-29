import React, { Fragment } from 'react';
import Layout from '@theme/Layout'; // Optional: Use Docusaurus Layout for SEO
import CustomNavbar from './customNavbar';
import MainPart from './mainPart';

export default function Homepage(): JSX.Element {
  return (
    // Fragment is fine, but wrapping in a Layout tag is often better for SEO in Docusaurus
    <Fragment>
      <CustomNavbar />
      <main>
        <MainPart />
      </main>
    </Fragment>
  );
}