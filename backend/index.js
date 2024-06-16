import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import multer from "multer";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGO_URI || "your_mongo_connection_string";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

const Product = mongoose.model("Product", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

  const product = new Product({
    id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  await product.save();
  res.json({ success: true, name: req.body.name });
});

app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({ success: true, name: req.body.name });
});

app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  res.send(products);
});

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  cartData: { type: Object },
  date: { type: Date, default: Date.now },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

const Users = mongoose.model("Users", userSchema);

app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({
        success: false,
        errors: "Existing user found with same email address",
      });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }

  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();

  const data = { user: { id: user.id } };
  const token = jwt.sign(data, process.env.JWT_SECRET || "secret_ecom");
  res.json({ success: true, token });
});

app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ success: false, errors: "Wrong Email ID" });
  }

  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) {
    return res.status(400).json({ success: false, errors: "Wrong password" });
  }

  const data = { user: { id: user.id } };
  const token = jwt.sign(data, process.env.JWT_SECRET || "secret_ecom");
  res.json({ success: true, token });
});

app.get("/newcollection", async (req, res) => {
  let products = await Product.find({});
  let newCollection = products.slice(1).slice(-8);
  res.send(newCollection);
});

app.get("/popularinwomen", async (req, res) => {
  let products = await Product.find({ category: "women" });
  let popularInWomen = products.slice(0, 4);
  res.send(popularInWomen);
});

const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .json({ errors: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET || "secret_ecom");
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).json({ errors: "Please authenticate using a valid token" });
  }
};

app.post("/addtocart", fetchUser, async (req, res) => {
  const userId = req.user.id;
  const { productId, quantity } = req.body;

  try {
    const user = await Users.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, errors: "User not found" });
    }

    if (!user.cartData[productId]) {
      user.cartData[productId] = 0;
    }
    user.cartData[productId] += quantity;

    await user.save();

    res.json({ success: true, cartData: user.cartData });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ success: false, errors: "Server error" });
  }
});

app.post("/removefromcart", fetchUser, async (req, res) => {
  const userId = req.user.id;
  const { productId } = req.body;

  try {
    const user = await Users.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, errors: "User not found" });
    }

    if (!user.cartData[productId]) {
      return res
        .status(404)
        .json({ success: false, errors: "Product not found in cart" });
    }

    delete user.cartData[productId];

    await user.save();

    res.json({ success: true, cartData: user.cartData });
  } catch (error) {
    console.error("Error removing from cart:", error);
    res.status(500).json({ success: false, errors: "Server error" });
  }
});

app.post("/getcart", fetchUser, async (req, res) => {
  try {
    const user = await Users.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, errors: "User not found" });
    }
    res.json(user.cartData);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ success: false, errors: "Server error" });
  }
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server running on port ${port}`);
  } else {
    console.log("Error:", error);
  }
});
