const todoModel=require("../model/todo.model");

class todoService {
    static async createTodo(userId,title,desc){

        
           try {
            const createTodo=new todoModel({userId,title,desc});
            return await createTodo.save();
            
           } catch (error) {
            throw error;
            
           }
            
      

    }

    static async getUserService(userId){

        try {
            const UserTodo=await todoModel.find({userId});
            // console.log(userId);

        return UserTodo;
            
        } catch (error) {
            throw error;
            
        }
    }

    static async deleteItemService(id){

        try {
            const deleted=await todoModel.findOneAndDelete({_id:id});
            

        return deleted;
            
        } catch (error) {
            throw error;
            
        }
    }

}

module.exports=todoService;