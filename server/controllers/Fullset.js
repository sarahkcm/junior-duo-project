
import NewfsGame from "../models/fullSet.js"
import NewGame from "../models/newGame.js"
export const getGames=async(req,res)=>{
    try{       
        const games=await NewfsGame.find({});
        // console.log(games);
        res.status(200).json(games)
    }catch(error){
        res.status(404).json({message:error.message})
    }
}

// export const updatePost=async(req,res)=>{
//     const {id:_id}=req.params
//     const post=req.body
//     const updatePost=await postMessage.findByIdAndUpdate(_id,post,{new:true})
//     res.json(updatePost)
// }
