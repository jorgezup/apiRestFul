"use strict";var client=require("../controller/clientController"),clientRoutes=function(e){e.get("/clients",client.index),e.get("/clients/:id",client.find),e.post("/clients",client.post),e.put("/clients/:id",client.put),e.delete("/clients/:id",client.delete)};module.exports=clientRoutes;