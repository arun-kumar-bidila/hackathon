const todoService=require("../services/todo.service");

exports.create=async(req,res,next)=>{

    try {

        const {userId,title,desc}=req.body;
        let successRes=await todoService.createTodo(userId,title,desc);

        res.json({status:true,success:successRes});
        
    } catch (error) {
        throw error;
    }

}

exports.getUserTodo=async(req,res,next)=>{


    try {
        const {userId} = req.body;

        let todo =await todoService.getUserService(userId);
        

        res.json({status:true,success:todo});
        
    } catch (error) {
        throw error
    }

}


exports.deleteDataTodo=async(req,res,next)=>{


    try {
        const {id} = req.body;

        let deleted =await todoService.deleteItemService(id);
        

        res.json({status:true,success:deleted});
        
    } catch (error) {
        throw error
    }

}