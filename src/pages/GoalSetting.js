import React from 'react';
import {Card, Grid, GridItem} from "@patternfly/react-core";

export default function GoalSetting(props) {
    return (
        <Grid hasGutter>
            <GridItem span={2}>
                <Card>
                    Card 1
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
}