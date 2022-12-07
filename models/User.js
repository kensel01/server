import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
      esAdmin: {
        type: Boolean,
        required: true,
        default:false
      },
      Nombre: {
        type: String,
        required: true,
        max: 75
      },
      email: {
        type: String,
        required: true,
        max: 75
      },
      password: {
        type: String,
        required: true,
        max: 75
      },
      picturePath: {
        type: String,
        default: "",
      },
      Telefono: {
        type: String,
        required: true,
        max: 50
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