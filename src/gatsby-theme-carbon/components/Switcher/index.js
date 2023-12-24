import React from 'react';
import {default as Switcher1, SwitcherDivider, SwitcherLink} from 'gatsby-theme-carbon/src/components/Switcher';

const DefaultChildren = () => (
    <>
      <SwitcherDivider>Related organisations</SwitcherDivider>
      <SwitcherLink href="https://samland.minersonline.uk">
        Samland Government
      </SwitcherLink>
    </>
  );
  

const Switcher = () => <Switcher1><DefaultChildren/></Switcher1>;

export default Switcher;
