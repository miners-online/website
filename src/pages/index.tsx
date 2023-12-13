'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
} from '@carbon/react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">Miners Online</h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Page navigation">
            <Tab>About</Tab>
            <Tab>Services</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={7}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <h2 className="landing-page__subheading">
                    What is Miners Online?
                  </h2>
                  <p className="landing-page__p">
                    Miners Online is Samland&rsquo;s open-source digital platform for
                    testing products and experiences. With the Samland
                    Department for Digital at its foundation, the system
                    consists of services, tools and resources, and a vibrant
                    community of contributors.
                  </p>
                  <Button>Learn more</Button>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <Image
                    className="landing-page__illo"
                    src=""
                    alt="An illustration"
                    width={786}
                    height={647}
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <h2 className="landing-page__subheading">
                    Miners Online services
                  </h2>
                  <p className="landing-page__p">
                    Miners Online offers lots of services that are made by the
                    Samland Department for Digital. Miners Online are
                    responsible for operating them.
                  </p>
                  <Link href="/repos" passHref legacyBehavior>
                    <Button>Find repositories</Button>
                  </Link>
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      {/* <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <Grid>
          <Column md={4} lg={4} sm={4}>
            <h3 className="landing-page__label">The Principles</h3>
          </Column>
          <Column md={4} lg={4} sm={4}>
            Carbon is Open
          </Column>
          <Column md={4} lg={4} sm={4}>
            Carbon is Modular
          </Column>
          <Column md={4} lg={4} sm={4}>
            Carbon is Consistent
          </Column>
        </Grid>
      </Column> */}
    </Grid>
  );
}
