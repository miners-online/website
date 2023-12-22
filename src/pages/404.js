import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  { href: '/guides/markdown/introduction-to-markdown', text: 'Introduction to Markdown' },
];

const Custom404 = () => <FourOhFour links={links} />;

export default Custom404;
