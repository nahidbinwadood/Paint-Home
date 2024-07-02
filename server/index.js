const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;

//Middle Ware:
const corsConfig = {
  origin: ["http://localhost:5173","https://painting-drawing-auth.web.app","https://a6retro-forum.netlify.app"],
  credentials: true,
};
app.use(cors(corsConfig));
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s1tjtzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)

    const craftCollections = client.db("CraftDb").collection("craft");
    const subCollections = client.db("CraftDb").collection("subCategory");

    //Sub collection:
    app.get('/sub-collection',async(req,res)=>{
      const result=await subCollections.find().toArray();
      res.send(result)
    })

    //Sub category::
    app.get('/subcategory/:subcategory',async(req,res)=>{
      const subcategory=req.params.subcategory;
      const filter={subcategoryName : subcategory}
      const result= await craftCollections.find(filter).toArray();
      res.send(result);
    })


    //Add Craft: CREATE :::
    app.post("/add_craft", async (req, res) => {
      const newCraft = req.body;
      const result = await craftCollections.insertOne(newCraft);
      res.send(result);
    });



    //Read ::

    //For Home PAGE::
    app.get('/home_all_crafts',async(req,res)=>{
      const result= await craftCollections.find({}).limit(9).toArray();
      res.send(result);
    })

    //For All Art and Craft Items:
    app.get('/all_art_items',async(req,res)=>{
      const result=await craftCollections.find().toArray();
      res.send(result)
    })


    //View Details for individual Card:
    app.get('/art_item_details/:id',async (req,res)=>{
      const id=req.params.id;
      const filter={_id : new ObjectId(id)}
      const result=await craftCollections.findOne(filter);
      res.send(result);
    })


    //Find data for individual Users:

    app.get('/my_art_list/:email',async(req,res)=>{
      const email=req.params.email;
      const filter={userMail : email}
      const result= await craftCollections.find(filter).toArray();
      res.send(result);
    })


    //Update Data for individual Users Card:

    //get individual card data::

    app.get('/my_art_item/:id',async (req,res)=>{
      const id=req.params.id;
      const filter={_id : new ObjectId(id)}
      const result=await craftCollections.findOne(filter);
      res.send(result);
    })

    //updating API:

    app.put('/my_art_item/:id',async(req,res)=>{
      const id=req.params.id;
      const filter= {_id : new ObjectId(id)}
      const updatedCraft=req.body;
      const options = { upsert: true };
      const craft={
        $set :{
          itemName:updatedCraft.itemName,
          subcategoryName:updatedCraft.subcategoryName,
          price:updatedCraft.price,
          rating:updatedCraft.rating,
          customization:updatedCraft.customization,
          processingTime:updatedCraft.processingTime,
          stockStatus:updatedCraft.stockStatus,
          image:updatedCraft.image,
          description:updatedCraft.description
        }
      }
      const result= await craftCollections.updateOne(filter,craft,options)
      res.send(result)
    })

    //Delete Craft :
    app.delete('/my_art_list/:id', async(req,res)=>{
      const id=req.params.id;
      const query={_id : new ObjectId(id)};
      const result= await craftCollections.deleteOne(query);
      res.send(result)
    })

    

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Drawing and Paint Server is running");
});

app.listen(port, () => {
  console.log(`The server is running from PORT :${port}`);
});
