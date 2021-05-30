import React from 'react';
import {Card, Grid, GridItem} from "@patternfly/react-core";
import ChildrenDetail from "../goal-setting/children-detail";

const GoalSetting = (props) => (
        <Grid hasGutter>
            <GridItem span={2}>
                <Card>
                    <ChildrenDetail />
                </Card>
            </GridItem>
            <GridItem span={10} rowSpan={3}>
                <Card>
                    Card 2
                </Card>
            </GridItem>
            <GridItem span={2}>
                <Card>
                    Card 3
                </Card>
            </GridItem>
            <GridItem span={2}>
                <Card>
                    Card 4
                </Card>
            </GridItem>
        </Grid>
    );

export default GoalSetting;