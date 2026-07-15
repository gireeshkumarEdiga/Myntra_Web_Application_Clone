const Address = require("../Model/Address");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AddressRoutesHandler = async (req,res) => {

    const MEASURE = req.body.MEASURE;

    if(MEASURE == "CREATE_ADDRESS"){

        if(req.body.isDefaultAddress == "Yes"){

            // await Address.updateMany(
            //     {},
            //     {
            //         $set : {
            //             isDefaultAddress : "No"
            //         }
            //     }
            // );

        }

        await Address.create({
            id : req.body.id,
            name : req.body.name,
            mobile : req.body.mobile,
            pincode : req.body.pincode,
            street : req.body.street,
            locality : req.body.locality,
            city : req.body.city,
            state : req.body.state,
            addressType : req.body.addressType,
            isDefaultAddress : req.body.isDefaultAddress
        });

        const isAddressList = await Address.find();
        
        if(isAddressList){
            res.send({
                Message : "Address List",
                Success : true,
                Data : isAddressList
            });
        }else{
            res.send({
                Message : "Not Found List",
                Success : false
            });
        }

    }

    if(MEASURE == "GET_ADDRESS_LIST"){

        const isAddressList = await Address.find();
        
        if(isAddressList){
            res.send({
                Message : "Address List",
                Success : true,
                Data : isAddressList
            });
        }else{
            res.send({
                Message : "Not Found List",
                Success : false
            });
        }

    }

    if(MEASURE == "DELETE_ADDRESS_FROM_LIST"){

        await Address.deleteOne({id : req.body.id});

        const isAddressList = await Address.find();
        
        if(isAddressList){
            res.send({
                Message : "deleted from List",
                Success : true,
                Data : isAddressList
            });
        }else{
            res.send({
                Message : "Not Found List",
                Success : false
            });
        }

    }

    if(MEASURE == "UPDATE_ADDRESS"){

        if(req.body.isDefaultAddress == "Yes"){

            await Address.updateMany({},{isDefaultAddress : "No"});

        }


        await Address.updateOne({
            id : req.body.id
        },{
            name : req.body.name,
            mobile : req.body.mobile,
            pincode : req.body.pincode,
            street : req.body.street,
            locality : req.body.locality,
            city : req.body.city,
            state : req.body.state,
            addressType : req.body.addressType,
            isDefaultAddress : req.body.isDefaultAddress
        });

        const isAddressList = await Address.find();
        
        if(isAddressList){
            res.send({
                Message : "Address List",
                Success : true,
                Data : isAddressList
            });
        }else{
            res.send({
                Message : "Not Found List",
                Success : false
            });
        }

    }

}

module.exports = {
    AddressRoutesHandler
}