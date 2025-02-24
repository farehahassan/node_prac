const getContact = async(req, res) => {
    res.status(200).json({ success: true, data: "Get all contacts" });
}

const createContact = async(req,res)=>{
    console.log(req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    res.status(201).json({success:true,data:"Create new contact"});

}


module.exports = {
    getContact
    ,createContact
}