import  express  from "express";
import dotenv from "dotenv";
import countries from "./countries.js";
import { Router } from "express";

 dotenv.config({path:['.env']});
//
const app = express();

// create a variable to show the port number
const port =process.env.PORT || 8080

// create the route
const router = Router()

// showing the data in thunderclient
app.get('/countries' , (req,res) =>{

    // console.log(countries);
    res.send(countries);
});

app.get('/filter',(req,res) => {
    const filter = countries.filter((item)=>item.hasMoney == "true")
    res.send(filter);
})

app.get('/countries/:id' , (req,res) =>{
    const id =req.params.id


    console.log('idd', id)
    const foundData =countries.find((item)=>item.id == id)
    res.send(foundData);
});


//the app will listen on a port. should be the last in the file
app.listen(port, () =>{

    console.log(`Express server is running on ${port}`);
    // console.log("Express server is running on" + port); concatenation method
    // console.log(countries)
});
