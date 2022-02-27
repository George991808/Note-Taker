const router = require('express').Router();

const path = require('path');

router.get('/',(req,res)=>{
    const htmlPath = path.join(__dirname, "..", "public", 'index.html');
    res.sendFile(htmlPath);

}
    
)
module.exports=router;