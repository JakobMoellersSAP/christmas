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
import SAP from '../assets/imco2s/sap.png';
import Daimler from '../assets/imco2s/daimler.png';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'model', headerName: 'Model', width: 130 },
  { field: 'type', headerName: 'Type', width: 200 },
  { field: 'co2', headerName: 'CO2 Emissions', type: 'number', width: 150 },
  { field: 'stockamount', headerName: 'Amount in Stock', type: 'number', width: 150 }
];

const rows5 = [
  { id: 1, type: 'C 300 e T-Model', model: 'C-Class', co2: 50, stockamount: 4 },
  { id: 2, type: 'E 300 de T-Model', model: 'E-Class', co2: 42, stockamount: 6 },
  { id: 3, type: 'S 350 d Sedan', model: 'S-Class', co2: 163, stockamount: 0 },
  { id: 4, type: 'C 300 Coupe', model: 'C-Class', co2: 136, stockamount: 2 },
  { id: 5, type: 'CLA 250 e Coupe', model: 'CLA-Class', co2: 31, stockamount: 10 },
  { id: 6, type: 'CLS 400 d 4MATIC Coupe', model: 'CLS-Class', co2: 162, stockamount: 1 },
  { id: 7, type: 'EQC 400', model: 'EQC-Class', co2: 0, stockamount: 2 },
  { id: 8, type: 'GLC 300 e 4MATIC', model: 'GLC-Class', co2: 50, stockamount: 7 },
  { id: 9, type: 'EQV 300', model: 'EQV-Class', co2: 0, stockamount: 1 },
];

const tableStyles = () =>
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

class TablePco2 extends React.Component<WithStyles<typeof tableStyles>, {}> {
  @inject()
  public i18n!: I18nService;

  @inject()
  public router!: RouterService;

  constructor(props) {
    super(props);

    this.state = {
      rows: [
        { id: 1, type: 'C 300 e T-Model', model: 'C-Class', co2: 50 },
        { id: 2, type: 'E 300 de T-Model', model: 'E-Class', co2: 42 },
        { id: 3, type: 'S 350 d Sedan', model: 'S-Class', co2: 163 },
        { id: 4, type: 'C 300 Coupe', model: 'C-Class', co2: 136 },
        { id: 5, type: 'CLA 250 e Coupe', model: 'CLA-Class', co2: 31 },
        { id: 6, type: 'CLS 400 d 4MATIC Coupe', model: 'CLS-Class', co2: 162 },
        { id: 7, type: 'EQC 400', model: 'EQC-Class', co2: 0 },
        { id: 8, type: 'GLC 300 e 4MATIC', model: 'GLC-Class', co2: 50 },
      ],
    };

  }

  loadData = () => {
    // TODO: possible only once
    //this.state.rows.concat({ id: 9, type: 'EQV 300', model: 'EQV-Class', co2: 0 });
    this.setState(state => {
      if (state.rows.length < 9) {
        const rows = state.rows.concat({ id: 9, type: 'EQV 300', model: 'EQV-Class', co2: 0 });

        return {
          rows
        }
      }
    });
    //);
    //alert(this.setState({ rows: []}));

  };

  public render(): JSX.Element {
    const { classes } = this.props;



    //var rows = ;



    return (
      <Container>
        <Typography variant={'h5'} gutterBottom={true} align="center">
          {this.i18n.translateToString('ODataHeader')}
        </Typography>
        <Typography className={classes.centered}>{this.i18n.translate('DescriptionAPI')}</Typography>
        <Button variant="contained" color="secondary" onClick={this.loadData}>
          {this.i18n.translateToString('LoadData')}
        </Button>
        <div style={{ height: 600, width: '100%' }}>
          <DataGrid rows={this.state.rows} columns={columns} pco2Size={5} checkboxSelection />
        </div>
        <Box m={3} className={classes.centered}>
          <Button variant="contained" color="secondary" onClick={() => this.router.navigateToHome()}>
            {this.i18n.translateToString('BackToHome')}
          </Button>
        </Box>
      </Container>
    );
  }
}

export default withStyles(tableStyles, { withTheme: true })(withInject(TablePco2));