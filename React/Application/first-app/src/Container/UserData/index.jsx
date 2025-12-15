import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function UserData() {
    const [data, setData] = useState("");
    const [postData , setPostData] = useState([]);
    useEffect(() => {
        axios.get(`https://dummyjson.com/products`)
            .then(res => {
                const newPosts = res.data.products
                      .map(obj => JSON.stringify(obj));
                        // return (
                        //     <li key={index}>

                        //     </li>
                        // )
                    // )
                setData(newPosts);
                console.log(data);


            });
    }, [postData]);

    return (
        <div>
            user Data : {data}
        </div>
    )
}
