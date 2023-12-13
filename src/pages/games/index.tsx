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
  CodeSnippet,
} from '@carbon/react';
import Link from 'next/link';

function GamesPage() {
  return (
    <Grid className="games-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="games-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href="/games">Games</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="games-page__heading">Games</h1>
        <p>From time to time we operate game servers. Find out more below.</p>
      </Column>
      <Column lg={16} md={8} sm={4} className="games-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Page navigation">
            <Tab>Minecraft</Tab>
            <Tab>Open TTD</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="games-page__tab-content"
                >
                  <h2 className="games-page__subheading">
                    Minecraft
                  </h2>
                  <p className="games-page__p">
                    Minecraft is a game made by Mojang AB and it is owned by Microsoft Corperation. We run a Minecraft server that has many differnet gamemodes.
                    Both Bedrock Edition and Java Edition can join the same server, if you have a valid Minecraft account.
                  </p>
                  <h2 className="games-page__subheading">
                    Joing the server
                  </h2>
                  <p className="games-page__p">
                    You may join our server by using the following IP addresses:
                    <br/>
                    For Java Edition: <CodeSnippet type="single" feedback="Copied to clipboard">minersonline.uk</CodeSnippet>
                    For Bedrock Edition: <CodeSnippet type="single" feedback="Copied to clipboard">minersonline.ddns.net</CodeSnippet>
                    <br/>
                    You will spawn in the lobby. To get back to the lobby at any time please use the commands
                    <CodeSnippet type="single" feedback="Copied to clipboard">/lobby</CodeSnippet> or <CodeSnippet type="single" feedback="Copied to clipboard">/hub</CodeSnippet>
                  </p>
                  <h2 className="games-page__subheading">
                    Gamemodes
                  </h2>
                  <p className="games-page__p">
                    We have some game modes available on the server. You may use the following commands to access them.
                    <br/>
                    Plots: <CodeSnippet type="single" feedback="Copied to clipboard">/server Plots</CodeSnippet>
                    Forge Creative: <CodeSnippet type="single" feedback="Copied to clipboard">/server ForgeCreative</CodeSnippet>
                    Forge Survival: <CodeSnippet type="single" feedback="Copied to clipboard">/server ForgeSurvival</CodeSnippet>
                  </p>
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="games-page__tab-content"
                >
                  <h2 className="games-page__subheading">
                    Open TTD
                  </h2>
                  <p className="games-page__p">
                    ...
                  </p>
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
    </Grid>
  );
}

export default GamesPage;
