import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink,
  HeaderSideNavItems,
} from '@carbon/react';
import React from 'react';
import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';

const AppHeader = () => (
  <HeaderContainer
    render={() => (
      <>
        <Header aria-label="Admin Centre">
          <SkipToContent />
          <HeaderName href="/" prefix="">
            Admin Centre
          </HeaderName>
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Notifications"
              tooltipAlignment="center"
              className="action-icons">
              <Notification size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="User Avatar"
              tooltipAlignment="center"
              className="action-icons">
              <UserAvatar size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
              <Switcher size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
        <SideNav
          aria-label="Side navigation"
          expanded={true}
          isChildOfHeader={false}>
          <SideNavItems>
            <SideNavLink href="/">Home</SideNavLink>
            <SideNavLink href="/api_tokens">API Tokens</SideNavLink>
          </SideNavItems>
        </SideNav>
      </>
    )}
  />
);

export default AppHeader;