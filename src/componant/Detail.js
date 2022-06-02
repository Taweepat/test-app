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
            // console.log(res.data)
        })
    }, [])
    if (!post) return null;
    return (
        <div className='container'>
            <div className="boxs">
                {
                    post.products.map((n,index) => {
                        return (
                            <div className="block" key={n.id}>
                            <h3>{n.title}</h3>
                            <h2>{n.description}</h2>
                            <p>เริ่มต้นที่ ฿{n.price}</p>
                            <div>
                            <button className='button'>ซื้อ</button><span><a href='#'>ดูเพิ่มเติม &rsaquo;</a></span>
                            </div>
                            <div className="image">
                            <img src={n.thumbnail}/>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default detail