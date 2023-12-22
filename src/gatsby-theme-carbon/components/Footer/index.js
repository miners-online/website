import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      Last updated: {buildTime}
    </p>
    <p>
      Made with <a href="https://gatsby.carbondesignsystem.com/">
        Gatsby Carbon Theme
      </a>
    </p>
  </>
);

const Logo = () => (
  <></>
);

const links = {
  firstCol: [
    { href: 'https://minersonline.uk', linkText: 'Test link' },
  ],
  secondCol: [
    { href: 'https://minersonline.uk', linkText: 'Test link' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} Logo={Logo}/>;

export default CustomFooter;
