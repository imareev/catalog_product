import axios from "axios";
import React, {useState} from "react";
import "./index.css"
const baseURL = "http://localhost:8189/demo/products";

export default function App1() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    function deletePost(id) {
        axios
            .delete(`${baseURL}/${id}`)
            .then(() => {

                setPost(null)
            });
        window.location.reload(true);
    }

    let title_for_start_save;
    let price_for_start_save;
    let count_for_start_save;
    let countofSell_for_start_save;

    function updatePost(id,title,price,count,countofSell) {

        document.getElementById(id+"div").style.display = "block";
        document.getElementById(id+"button").style.display = "block";
        document.body.style.overflow = 'hidden';


        title_for_start_save=document.getElementById(id+"title").value;
        price_for_start_save=document.getElementById(id+"price").value;
        count_for_start_save=document.getElementById(id+"count").value;
        countofSell_for_start_save=document.getElementById(id+countofSell).value;


    }
    function start_save(id)
    {


        const url=`${baseURL}/${id}`
        axios
            .put (url, {

                "title": title_for_start_save,
                "price": price_for_start_save,
                "count": count_for_start_save,
                "countofSell":countofSell_for_start_save
            })

            .then ((response) => {
                setPost (response.data);
            });


    }


    if (!post) return null;



    return (
        <div >
            <p className={"body"}> products: </p>
            <div className={"mainpr"}>



            {post.map((item) => (
                <div id={"body"}>
                <div className={"product-div"} key={item.id}>
                    <p className={"product"}>{item.title}</p>
                    <img className={"img"} src={"https://samogon-cheb.ru/data/images/system/empty-img.png"}></img>
                    <p className={"product_count"} >quantity: {item.count} </p>
                    <p className={"product_price"} ><b> {item.price}$ </b>
                        <span>
                            <button  className={"input "} className={"btn"} onClick={()=>updatePost(item.id,item.title,item.price,item.count,item.countofSell)}>изменить</button>

                            <button  className={"input "} className={"btn"} onClick={()=>deletePost(item.id)}>delete</button>
                         </span>

                    </p>
                </div>


                    <form className={"form_change"} id={item.id+"div"}>
                        <p className={'form_change1'}>
                            <p className={"text_change_div"}>change data for select product</p>

                            <input  className={"input"} className={"btn"} type={"text"}   id={item.id+"title"} defaultValue={item.title} />
                            <input  className={"input"} className={"btn"} type={"number"} id={item.id+"price"}defaultValue={item.price}/>
                            <input  className={"input"} className={"btn"} type={"number"} id={item.id+"count"}defaultValue={item.count}/>

                            <button  className={"input "} className={"btn btnfinish"} id={item.id+'button'} onClick={()=>start_save(item.id)}>finish change</button>
                        </p>
                    </form>

                </div>

            ))}

        </div>

        </div>

    );


}