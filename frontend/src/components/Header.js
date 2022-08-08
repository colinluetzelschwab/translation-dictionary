import {Grid} from '@material-ui/core';
import axa_logo from '../static/axa_logo.png';

export default function Header() {
    return(
        <header>
            <Grid container>
                <Grid item xs={2}>
                    <img src={axa_logo} height={"80"} className={"logo"} alt={"axa_logo"}/>
                </Grid>
                <Grid item xs={10} id={"title"}>
                    <h1>Translation-Dictionary</h1>
                </Grid>
            </Grid>
        </header>

    );
}