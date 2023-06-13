import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Divider } from "@material-ui/core";
import log from 'loglevel';
import history from "../../../history";
import FilterProductsDisplay from "./filterProductDisplay";
import FilterPagination from "./filterPagination";

export const stickyBoxStyle = {
  position: 'sticky',
  top: 80,
  backgroundColor: '#fafafa',
  zIndex: 1040,
  paddingLeft: "1rem"
}

function Demo() {
  // Define breadcrumbs
  const breadcrumbLinks = [
    {
      name: 'Products',
      link: `${history.location.pathname + history.location.search}`
    },
  ];

  log.info("[Product] Rendering Product Component.");

  

  return (
    <Grid container>
      <Grid item xs={12} align="center">
        <h2>People Also Buy This</h2>
      </Grid>
      <Divider />
      <FilterProductsDisplay linkList={breadcrumbLinks} />
      <Divider />
      <FilterPagination />
    </Grid>
  );
}

export default Demo;
