import express from 'express';
import { createGame,getMyGames,deleteGame, updateC, updateR  } from '../controllers/Game.js';

const router=express.Router();


router.post('/',createGame);
router.get('/',getMyGames);
router.delete('/:id',deleteGame);
router.patch('/condition/:id', updateC)
router.patch('/region/:id', updateR)




export default router;