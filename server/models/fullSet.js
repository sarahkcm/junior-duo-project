import mongoose from "mongoose";


const fullSetGameSchema=mongoose.Schema({
    gameTitle:String,
    img:String
    
});
const NewfsGame = mongoose.model('newfsGame',fullSetGameSchema,"fullset");
export default NewfsGame;