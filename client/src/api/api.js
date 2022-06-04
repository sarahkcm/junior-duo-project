import axios from 'axios'

const url ='http://localhost:3000/games';
const url2 ='http://localhost:3000/fullset';
const urlC = 'http://localhost:3000/games/condition'
const urlR = 'http://localhost:3000/games/region'


export const addGame=(newGame)=>axios.post(url,newGame)
export const getMyGames=()=>axios.get(url)
export const deleteGame=(id)=>axios.delete(`${url}/${id}`)
export const getGames=()=>axios.get(url2)
export const updateC =(id,updateC)=>{axios.patch(`${urlC}/${id}`,updateC);console.log(updateC)}
export const updateR =(id,updateR)=>axios.patch(`${urlR}/${id}`,updateR)

