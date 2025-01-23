import User from "../models/userModels.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../lib/utils.js";
import cloudinary from "../lib/cloudinary.js";


export const signup=async (req,res) => {
    const {fullName,email,password}=req.body;
    try {
        if (!fullName || !email || !password) {
            return res.status(400).json({message:"All feilds must be completed to proceed"});
            
        }
        if (password.length<6){
            return res.status(400).json({msg:"Password must be at least 6 characters long"});
        }
        const user = await User.findOne({email})
        if (user) return res.status(400).json({message: "Email already existe"});

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            password:hash
        })
        if(newUser){
            generateToken(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
              });
            }
        else{
            return res.status(400).json({message: "Error creating user Invalid details"});
        }



    } catch (error) {
        console.log("Error in signup controller ",error.message);
        res.status(500).json({message: "Internal server error"});
        
    }
};

export const logout = (req, res) => {
    try {
      res.cookie("jwt", "", { maxAge: 0 });
      res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
      console.log("Error in logout controller:", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

export const login=async(req,res) => {
    try {
        const { email, password } = req.body; 
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
          }
        const user = await User.findOne({email});
        if (!user) return res.status(400).json({message: "Invalid credentails"});
        const ispassMatch = await bcrypt.compare(password, user.password);
        if(!ispassMatch){
            return res.status(400).json({message: "Invalid credentails"});
        }
        generateToken(user._id,res)
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            profilePic:user.profilePic,
        })

        
    } catch (error) {
        console.log("Error in login part of controller js",error.message);
        res.status(500).json({message:"Internal Server login error"});
    }
    
};

export const updateProfile=async (req, res) => {
    try {
      const { profilePic } = req.body; 
      const userId = req.user._id;
      if (!profilePic) 
        {
        return res.status(400).json({ message: "Profile pic is required" });
        }

      const uploadResponse = await cloudinary.uploader.upload(profilePic);
      const updatedUser = await User.findByIdAndUpdate( userId,{ profilePic: uploadResponse.secure_url },{ new: true });

      res.status(200).json(updatedUser); 

    } catch (error) {
      console.error("Error in update profile:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };


export const checkAuth= async (req,res) =>{
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("Error in checkauth controller ", error.message);
        res.status(500).json({message: "Internal Server Error"});
        
    }
}

//b8FuH51spWg2HYjj