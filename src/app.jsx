import React, {useState} from "react";
import "@patternfly/react-core/dist/styles/base.css";
import "@patternfly/patternfly/patternfly.css";
import {
    Nav,
    NavItem,
    NavList,
    Page,
    PageHeader,
    PageSection,
    PageSectionVariants
} from '@patternfly/react-core';

import GoalSetting from './pages/goal-setting';

const TopNav = () => {

    const [activeItem, setActiveItem] = useState(0);

    const onSelect = result => setActiveItem(result.itemId);

    return (
        <Nav onSelect={onSelect} variant="horizontal">
            <NavList>
                <NavItem id="default-link1" to="#default-link1" itemId={0} isActive={activeItem === 0}>
                    Link 1
                </NavItem>
                <NavItem id="default-link2" to="#default-link2" itemId={1} isActive={activeItem === 1}>
                    Link 2
                </NavItem>
                <NavItem id="default-link3" to="#default-link3" itemId={2} isActive={activeItem === 2}>
                    Link 3
                </NavItem>
                <NavItem id="default-link4" to="#default-link4" itemId={3} isActive={activeItem === 3}>
                    Link 4
                </NavItem>
            </NavList>
        </Nav>
    );
}

export const App = () => {

    const Header = <PageHeader topNav={<TopNav />}/>;

    return (
        <Page header={Header}>
            <PageSection variant={PageSectionVariants.light}>
                <GoalSetting/>
            </PageSection>
        </Page>
    )
};
