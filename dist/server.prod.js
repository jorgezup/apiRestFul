"use strict";var express=require("express"),app=express();app.use(express.json());var routes=require("./src/routes/clientRoutes")(app);app.listen(3e3,function(){console.log("server is running")});