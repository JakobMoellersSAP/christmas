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
import Daimler from '../assets/images/daimler.png';
import Integration from '../assets/images/integration.png';

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
          {this.i18n.translateToString('HeadlineDemoContent')}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea
                href="https://github.com/Daimler/mo360-ftk"
                target="_blank"
                className={classes.cardAction}
              >
                <CardMedia className={classes.media} component="img" image={Daimler} />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6">Daimler MO360 Source Code @ GitHub</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea
                href="https://www.sap.com/products/cloud-platform.html"
                target="_blank"
                className={classes.cardAction}
              >
                <CardMedia className={classes.media} component="img" image={SAP} />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6">SAP Cloud Platform</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardActionArea
                onClick={() => this.router.navigate(this.router.linkTo('table'))}
                className={classes.cardAction}
              >
                <CardMedia className={classes.media} component="img" image={Integration} />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6">Integration Demo</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Box m={3} className={classes.centered}>
          <Button variant="contained" color="secondary" onClick={() => this.router.navigateToHome()}>
            {this.i18n.translateToString('BackToHome')}
          </Button>
        </Box>
      </Container>
    );
  }
}

export default withStyles(DemoRouteStyles, { withTheme: true })(withInject(DevOpsToolchain));
