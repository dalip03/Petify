import { Grid, Typography } from "@mui/material";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <Header/>
                <Outlet/>
                <Footer/>
                </Grid>
            </Grid>
        </>
    )
}

export default Layout