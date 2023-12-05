import './_site-header.scss';
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
	SideNavLink,
	SideNavLinkText,
} from '@carbon/react';
import { Switcher, Notification, UserAvatar, Search } from '@carbon/icons-react';

const SiteHeader = () => (
	<HeaderContainer
		render={({ isSideNavExpanded, onClickSideNavExpand }) => (
			<Header aria-label="Miners Online">
				<SkipToContent />
				<HeaderMenuButton
					aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
					onClick={onClickSideNavExpand}
					isActive={isSideNavExpanded}
					aria-expanded={isSideNavExpanded}
				/>
				<HeaderName href="/" prefix="Miners Online"/>
				<HeaderNavigation aria-label="Miners Online">
					<HeaderMenuItem href="/">Home</HeaderMenuItem>
					<HeaderMenuItem href="/news">News</HeaderMenuItem>
					<HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
				</HeaderNavigation>
				<SideNav
					aria-label="Side navigation"
					expanded={isSideNavExpanded}
					isPersistent={false}
					onSideNavBlur={onClickSideNavExpand}>
					<SideNavItems isSideNavExpanded={isSideNavExpanded}>
						<SideNavLink href="/"><SideNavLinkText>Home</SideNavLinkText></SideNavLink>
						<SideNavLink href="/news"><SideNavLinkText>News</SideNavLinkText></SideNavLink>
						<SideNavLink href="/repos"><SideNavLinkText>Repositories</SideNavLinkText></SideNavLink>
					</SideNavItems>
				</SideNav>
				<HeaderGlobalBar>
					<HeaderGlobalAction aria-label="Search" tooltipAlignment="center" onClick={() => {}}>
						<Search size={20}/>
					</HeaderGlobalAction>
					<HeaderGlobalAction aria-label="Notifications" tooltipAlignment="center" onClick={() => {}}>
						<Notification size={20}/>
					</HeaderGlobalAction>
					<HeaderGlobalAction aria-label="User avatar" tooltipAlignment="center" onClick={() => {}}>
						<UserAvatar size={20}/>
					</HeaderGlobalAction>
					<HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end" onClick={() => {}} >
						<Switcher size={20}/>
					</HeaderGlobalAction>
				</HeaderGlobalBar>
			</Header>
		)}
	/>
);

export default SiteHeader;