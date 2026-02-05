import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    index: true 
},
  password: { 
    type: String, 
    required: true 
    },
  address: { 
    type: String 
},
  latitude: { 
    type: Number, 
    required: true 
},
  longitude: { 
    type: Number, 
    required: true 
},
  status: { 
    type: Boolean, 
    default: true 
}, 
  registered_at: { 
    type: Date, 
    default: Date.now 
},
  registered_day: { 
    type: Number, 
    index: true 
} 
});

export default mongoose.model("User", userSchema);
