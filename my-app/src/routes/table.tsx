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
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: { getValue: (arg0: string) => any }) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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

class TablePage extends React.Component<WithStyles<typeof tableStyles>, {}> {
  @inject()
  public i18n!: I18nService;

  @inject()
  public router!: RouterService;

  public render(): JSX.Element {
    const { classes } = this.props;

    return (
      <Container>
        <Typography variant={'h5'} gutterBottom={true} align="center">
          {this.i18n.translateToString('ODataHeader')}
        </Typography>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
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

export default withStyles(tableStyles, { withTheme: true })(withInject(TablePage));
