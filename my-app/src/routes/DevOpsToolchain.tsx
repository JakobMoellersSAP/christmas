// SPDX-License-Identifier: MIT
// Copyright (c) 2020 Daimler TSS GmbH

/**
 * Note:
 * This route uses the class-based react style and exists as an example
 * on how to migrate existing class-based react routes and components.
 *
 * If you're implementing a new frontend, please look at the Home route and
 * use the hook-based react style.
 */

import {
  createStyles,
  withStyles,
  WithStyles,
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Grid,
} from '@material-ui/core';
import { I18nService, inject, withInject, RouterService } from '@daimler/ftk-core';
import * as React from 'react';
import SAP from '../assets/images/sap.png';
import Piper from '../assets/images/piper.png';
import CI from '../assets/images/ci.png';

const DemoRouteStyles = () =>
  createStyles({
    centered: {
      textAlign: 'center',
    },
    card: {
      maxWidth: 345,
      margin: '0 auto',
    },
    cardAction: {
      display: 'flex',
      flexDirection: 'row',
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 2,
    },
    media: {
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      height: 110,
      width: 99,
      margin: 20,
    },
  });

class DevOpsToolchain extends React.Component<WithStyles<typeof DemoRouteStyles>, {}> {
  @inject()
  public i18n!: I18nService;

  @inject()
  public router!: RouterService;

  public render(): JSX.Element {
    const { classes } = this.props;

    return (
      <Container>
        <Typography variant={'h5'} gutterBottom={true} align="center">
          {this.i18n.translateToString('DevOpsHeadline')}
        </Typography>
        <Typography align="center">
          {this.i18n.translateToString('DevOpsOverview')}
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea
                href="https://discovery-center.cloud.sap/serviceCatalog/continuous-integration-&-delivery"
                target="_blank"
                className={classes.cardAction}
              >
                <CardMedia className={classes.media} component="img" image={CI} />
                <CardContent className={classes.cardContent}>
                  <Typography>SAP Cloud Platform CI/CD Service</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea
                href="https://sap.github.io/jenkins-library/"
                target="_blank"
                className={classes.cardAction}
              >
                <CardMedia className={classes.media} component="img" image={Piper} />
                <CardContent className={classes.cardContent}>
                  <Typography>SAP Project Piper (FOSS)</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea
                href="https://help.sap.com/viewer/8cacec64ed854b2a88e9a0973e0f97a2/Cloud/en-US/e9fa320181124fa9808d4446a1bf69dd.html"
                target="_blank"
                className={classes.cardAction}
              >
                <CardMedia className={classes.media} component="img" image={SAP} />
                <CardContent className={classes.cardContent}>
                  <Typography>SAP Solutions for Continuous Integration and Delivery</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Box m={3} className={classes.centered}>
          <Button variant="contained" color="secondary" onClick={() => this.router.navigate(this.router.linkTo('demoContent'))}>
            {this.i18n.translateToString('Back')}
          </Button>
        </Box>
      </Container>
    );
  }
}

export default withStyles(DemoRouteStyles, { withTheme: true })(withInject(DevOpsToolchain));
