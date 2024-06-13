import React from "react";
import { Box, FormControl, FormLabel, Grid, Input, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import AddProducts from "./Tabs/AddProducts";
import "../Admin/Admin.css";
import ProductList from "./Tabs/ProductList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function Admin() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          className="text-center mx-auto bg-gradient-to-r from-green-400 to-yellow-200 text-orange-700 font-bold"
          item
          xs={12}
        >
          <Typography variant="h4" className="py-4">
            Admin{" "}
          </Typography>
        </Grid>
        <Grid
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: '100%',
          }}
          item
          xs={12}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab label="Add Product" {...a11yProps(0)} />
            <Tab label="Prduct List" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
            <Tab label="Item Four" {...a11yProps(3)} />
          </Tabs>
          <TabPanel value={value} index={0}>
           <AddProducts/>
          </TabPanel>
          <TabPanel value={value} index={1}>
           <ProductList/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
        </Grid>
      </Grid>
    </>
  );
}

export default Admin;
