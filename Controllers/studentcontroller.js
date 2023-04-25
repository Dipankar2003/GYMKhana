const multer = require("multer");
const path = require('path');


exports.uploadDocget = (req, res) => {
  res.render("StudentUploadDocs");
};


const storage=multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, './../public/uploads'));
  },
  filename: async(req,file,cb)=>{
    let newImagepath;
    newImagepath=Date.now()+ path.extname(file.originalname);
    cb(null,newImagepath);
  },
})
const upload = multer({ storage: storage}).single("upload");


 
exports.uploadDocpost= ( req , res ) =>{
    
    upload(req,res ,async(err)=>{
      console.log(req.file.filename);
    })
    res.redirect("/login/studentLogin/StudentUploadDocs");
   
};
