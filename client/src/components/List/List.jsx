import React from "react";
import ListElement from "./ListElement/ListElement.jsx";
import useStyles from "./styles"
import { Grid,CircularProgress } from "@material-ui/core";
    

const List =({data})=>{
    const list=data
    const classes= useStyles()
return(
    !list.length ?<CircularProgress/>:(
        <Grid className={classes.container} container alignItems="stretch" spacing ="3">
            {list.map((game)=>(
                <Grid key={game._id} item xs={12} sm={6}>
                    <ListElement game={game} />
                </Grid>
            ))}
        </Grid>
    )
    
)
}
export default List