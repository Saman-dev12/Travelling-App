import User from "../models/User.js";

//create new User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: "successfully created",
      data: savedUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};


export const updateUser = async (req,res) =>{
  const id = req.params.id
  try {
    const updatedUser = await User.findByIdAndUpdate(id,{
      $set :req.body
    },{new : true}) 

    res.status(200).json({
      success: true,
      message: "successfully updated",
      data: updatedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update. Try again" });
  }
}

export const deleteUser = async (req,res) =>{
  try {
    const deletedUser = await User.findByIdAndDelete(id) 

    res.status(200).json({
      success: true,
      message: "successfully deleted",
      data: deletedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete. Try again" });
  }
}

export const getSingleUser = async (req,res) =>{
  try {
    const user = await User.findById(id) 

    res.status(200).json({
      success: true,
      message: "successful",
      data: user,
    });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Not Found. Try again" });
  }
}

export const getAllUser = async (req,res) =>{
 
  try {
    const users = await User.find({})
    res.status(200).json({
      success : true,
      message : "Successful",
      data : users
    })
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Not Found. Try again" });
  }
}
