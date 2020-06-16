const express= require('express');
const router= express.Router();

const Contact = require('../model/contact');




// for retrevieng the data
router.get('/contacts',(req,res,next)=>{
    Contact.find(function(err,contacts){
        res.json(contacts);
    })
    

})

router.post('/contact',(req,res,next)=>{
   let newContact = new Contact({
       first_name:req.body.first_name,
       last_name:req.body.last_name,
       phone:req.body.phone
   });
newContact.save((err,contact)=>{
        if(err){
            res.json({msg: 'error in adding contacts'});
        }

        else{

            res.json({msg:"the data has been added"});
        }
});
});

router.post('/contact/:id',(req,res,next)=>{
    contact.remove({_id:req.param._id},function(err,result){
        if(err){
            res.json(err);

        }
        else{
            res.json(result);
        }
    });

});
module.exports=router;