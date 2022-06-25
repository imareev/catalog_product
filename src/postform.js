import React, {useState} from "react";
import axios from "axios";
import "./index.css";
function Postform(){
    const url="http://localhost:8189/demo/products";
    const [data,setdata]=useState({
        "title":'apple',
        "price":30,
        "count":40,
        "countofSell":8,

    })
    function submit(e){
        e.preventDefault()
        axios.post(url,{
            'title':data.title,
            'price':data.price,
            'count':data.count,
            'countofSell':data.countofSell

        }


        )
            .then((res)=>{
                //console.log(res.data)
            })
    }
    function handle(e){
        const  newData={...data}
        newData[e.target.id]=e.target.value
        setdata(newData)
        console.log(newData)

    }

    return(
        <div>
            <br></br>
        <div className={"maindiv"}>
            <div>
                <p className={"body"} >upload products</p>
            </div>
            < form  className={"body"} onSubmit={(e)=> submit(e)}>

                <input className={"input t"} className={"btn"} onChange={(e)=>handle(e)} value={data.title} id={"title"}  placeholder={"title"} type={"text"}/>
                <input className={"input p"} className={"btn"} onChange={(e)=>handle(e)} value={data.price} id={"price"}  placeholder={"price"} type={"number"}/>
                <input className={"input c "} className={"btn"} onChange={(e)=>handle(e)} value={data.count} id={"count"}  placeholder={"count"} type={"number"}/>

                <button className={"btn"}>add product in cotalog</button>
            </form>
            <div>

            </div>
        </div>
        </div>
    );
}
export default Postform