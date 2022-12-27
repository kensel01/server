import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
      IDuser:{
        type:Number,
        required: true,
        unique:true
      },
      esAdmin: {
        type: Boolean,
        required: true,
        default:false
      },
      Nombre: {
        type: String,
        required: true,
        max: 75,
        default:null
      },
      email: {
        type: String,
        required: true,
        max: 75,
        default:null
      },
      password: {
        type: String,
        required: true,
        max: 75,
        default:null
      },
      picturePath: {
        type: String,
        default: ""
      },
      Telefono: {
        type: String,
        required: true,
        max: 50,
        default:null
      },
      location: String,
      occupation: String,
      viewedProfile: Number,
      impressions: Number,
    },
    { timestamps: true }
  );
  
  const User = mongoose.model("User", UserSchema);
  export default User;