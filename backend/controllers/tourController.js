import Tour from "../models/Tour.js";

//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "successfully created",
      data: savedTour,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again" });
  }
};


export const updateTour = async (req,res) =>{
  const id = req.params.id
  try {
    const updatedTour = await Tour.findByIdAndUpdate(id,{
      $set :req.body
    },{new : true}) 

    res.status(200).json({
      success: true,
      message: "successfully updated",
      data: updatedTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update. Try again" });
  }
}

export const deleteTour = async (req,res) =>{
  const id = req.params.id

  try {
    const deletedTour = await Tour.findByIdAndDelete(id) 

    res.status(200).json({
      success: true,
      message: "successfully deleted",
      data: deletedTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete. Try again" });
  }
}

export const getSingleTour = async (req,res) =>{
  const id = req.params.id

  try {
    const tour = await Tour.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "successful",
      data: tour
    });
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Not Found. Try again" });
  }
}

export const getAllTour = async (req,res) =>{
  const page = parseInt(req.query.page);
  // console.log(page);
  try {
    const tours = await Tour.find({}).populate('reviews').skip(page * 8).limit(8);
    res.status(200).json({
      success : true,
      count : tours.length,
      message : "Successful",
      data : tours
    })
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Not Found. Try again" });
  }
}

//search
export const getTourBySearch = async (req,res)=>{
  const city = new RegExp(req.query.city,'i');
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({city , distance : {$gte : distance}, maxGroupSize:{$gte :maxGroupSize}}).populate("reviews");
    res.status(200).json({
      success : true,
      message : "Successful",
      data : tours
    })
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Not Found. Try again" });
  }
} 

export const getFeaturedTour = async (req,res)=>{

  try {
    const tours = await Tour.find({featured:true}).populate("reviews").limit(8);
    res.status(200).json({
      success : true,
      message : "Successful",
      data : tours
    })
  } catch (error) {
    res
      .status(404)
      .json({ success: false, message: "Not Found. Try again" });
  }
} 

export const getTourCount = async(req,res)=>{
  try {
    const tourCount = await Tour.estimatedDocumentCount()
    res.status(200).json({
      success : true,
      data : tourCount
    })
  } catch (error) {
    res.status(500).json({
      success : false,
      message : "Failed to fetch. Try again"
    })
  }
}