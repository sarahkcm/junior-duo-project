import React from "react";
import useStyles from "./styles"
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteGame} from '../../../api/api.js'
const ListElement = ({ game }) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={game.img || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
            <div className={classes.overlay}>
                <Typography variant="h6">{game.region}</Typography>
            </div>
           
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{game.gameTitle}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{game.box?"boxed":"loose"}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{game.gameCondition}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={()=>{deleteGame(game._id)}}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>


        </Card>
    )
}
export default ListElement