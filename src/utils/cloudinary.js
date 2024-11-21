import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET, 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        //or
      const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        } )
        // console.log("file is uploaded on cloudinary", response.url);
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}

const deleteOnCloudinary = async (cloudinaryPublic_url) => {
    try {
       if(!cloudinaryPublic_url) return null 

       const urlParts = new URL(cloudinaryPublic_url);
       const pathname = urlParts.pathname; // e.g., /v1234567890/folder_name/image_name.jpg
       const publicId = pathname.split('/').slice(2).join('/').replace(/\.[^/.]+$/, ''); // Removes file extension

       const response = await cloudinary.uploader.destroy(publicId);
       console.log('Delete Result:', response);
       return response;
    } catch (error) {
        console.error('Error deleting image from Cloudinary:', error);
        return null
        
    }

}

export {
    uploadOnCloudinary,
    deleteOnCloudinary 
}