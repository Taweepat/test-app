import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './Detail.css'

const URL = "https://dummyjson.com/products?skip=5&limit=10"
const detail = () => {
    const [post, setPost] = useState(null);
    useEffect(() => {
        axios.get(URL).then((res) => {
            setPost(res.data)
            console.log(res.data)
            // console.log(res.data.products.find(product => product.id == 9))
        })
    }, [])
    if (!post) return null;
    return (
        <div className='container'>
            <div className="boxs">
                {
                    post.products.filter((product)=>product.id == 9).map((product)=>{
                        return(
                            <div className="block" key={product.id}>
                            <h3>{product.title}</h3>
                            <h2>{product.description}</h2>
                            <p>เริ่มต้นที่ ฿{product.price}</p>
                            <div>
                            <button className='button'>ซื้อ</button><span><a href='#'>ดูเพิ่มเติม &rsaquo;</a></span>
                            </div>
                            <div className="image">
                            <img src={product.thumbnail}/>
                            </div>
                            </div>
                        )
                    })
                        // if (n.id = 9)
                        // // console.log("post.product",post.products)
                }
            </div>
        </div>
    )
}

export default detail