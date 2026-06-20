

require("dotenv").config();
console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("PORT:", process.env.PORT);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");


const jwt=require("jsonwebtoken")




const User = require("./models/User");
const Books = require("./models/Books");
const Issue = require("./models/Issue");
const Notice = require("./models/Notice");
console.log(Issue);

const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Cloud Connected Successfully");
    })
    .catch((error) => {
        console.log("MongoDB Connection Failed", error);
    });

app.get("/", (req, res) => {
  res.send("Backend server is running");
});

app.post("/api/register", async (req, res) => {
     console.log("Request received");
    console.log(req.body);

    try{
        const { fullName, email, password} = req.body;
        const existingUser = await User.findOne({ email: email});

        if(existingUser){
            return res.status(400).json({
                message: "Email already registered",
            });
        }

        const hashedPassword= await bcrypt.hash(password, 10);

        const newUser = new User({
            fullName:fullName,
            email: email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            message: "Registration Succesful",
        });
    }catch (error){
        res.status(500).json({
            message: "Registration failed",
            error: error.message
        });
    }
});
app.post("/api/login",async(req,res)=>{
    try{

        const {email,password}=req.body;
        const existingUser= await User.findOne({email:email});
        if(!existingUser)
        {
            return res.status(400).json({
                message:"Invalid  email or Password",
            });
        }
        const isPasswordMatch=await bcrypt.compare(
            password,existingUser.password
        );
        if(!isPasswordMatch)
        {
            return res.status(400).json({
                message:"Invalid email or password",
            });
        }
         const token = jwt.sign(
            {
                userId: existingUser._id,
                email: existingUser.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: existingUser._id,
                fullName: existingUser.fullName,
                email: existingUser.email
            }
        });
        

    }
     catch (error) {
        console.error("LoginError",error);
        res.status(500).json({
            message: "Server Error"
        });
    }
});
app.post("/api/books", async (req, res) => {
  try {
    const { coverImage,title,author } = req.body;

    const newBook = new Books({
      coverImage,
      title,
      author,
    
    });
    console.log(newBook);
console.log(Books.schema.paths);

    await newBook.save();

    res.status(201).json({
      message: "Book added successfully",
      book: newBook,
    });
  } catch (error) {
    console.error("ADD BOOK ERROR:", error);

    res.status(500).json({
        message: "Failed to add book",
        error: error.message,
    });
}
});
app.get("/api/books", async (req, res) => {
  try {
    const books = await Books.find().sort({ createdAt: -1 });

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch books",
      error: error.message,
    });
  }
});
app.get("/api/books/:id", async (req, res) => {
  try {
    const book = await Books.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch book",
      error: error.message,
    });
  }
});

app.put("/api/books/:id", async (req, res) => {
  try {
    const {  coverImage,title, author } = req.body;

    const updatedBook = await Books.findByIdAndUpdate(
      req.params.id,
      {
        coverImage,
        title,
        author,
       

      },
      {
        new: true,
      }
    );

    if (!updatedBook) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(200).json({
      message: "Book updated successfully",
      book: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update course",
      error: error.message,
    });
  }
});

app.delete("/api/books/:id", async (req, res) => {
  try {
    const deletedBook = await Books.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(200).json({
      message: "Book deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete book",
      error: error.message,
    });
  }
});

app.get("/api/book-count", async (req, res) => {
  try {
    const count = await Books.countDocuments();

    res.status(200).json({
      totalBooks: count,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to count books",
      error: error.message,
    });
  }
});



app.get("/api/issues", async (req, res) => {
  try {
    const issues = await Issue.find().sort({ issueDate: -1 });

    res.json(issues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get("/api/issues-count", async (req, res) => {
  try {
    const count = await Issue.countDocuments();

    res.json({ totalIssued: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post("/api/issues", async (req, res) => {
  console.log("POST /api/issues called");
  try {
    const issue = new Issue(req.body);

    await issue.save();

    res.json(issue);
  } catch (err) {
     console.error("FULL ERROR:", err);
    res.status(500).json({
      error: err.message,
    });
  }
})


app.post("/api/notices", async (req, res) => {
  try {
    const notice = new Notice({
      message: req.body.message,
    });

    await notice.save();

    res.json(notice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/notices", async (req, res) => {
  try {
    const notices = await Notice.find().sort({
      createdAt: -1,
    });

    res.json(notices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/notices/:id", async (req, res) => {
  try {
    await Notice.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Notice Deleted",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


