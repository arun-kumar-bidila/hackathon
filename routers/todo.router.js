const router=require("express").Router();

const todoController=require("../controller/todo.controller");

router.post("/create",todoController.create);
router.post("/getUsertodo",todoController.getUserTodo);
router.post("/deleteTodo",todoController.deleteDataTodo);

module.exports=router;