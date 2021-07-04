import React from 'react';
import {useState} from "react";

const Posts = () => {
    const [title, setTitle]= useState('');
    const [label, setLabel]= useState('');
    const [image, setImage] = useState('');
    const [isPending, setIsPending]=useState('false');
    
    const handleSubmit=(e)=>{
    const post={title,label,image};

        setIsPending(true);

        fetch('http//localhost:3000/products',{
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(post)
        }).then(()=>{
            console.log('new post added');
            setIsPending(false);
        })
    }

  return (
        <div className="products">
            <h2>Add a new Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post Title</label>
                <input type="text" required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}></input>
                <label>Post Label</label>
                <input type="text" required
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}></input>

                <label>Post Image</label>
                <input
                    type="file" required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}>
                </input>
            
                <button onClick={onclick}>Add Post</button>
            </form>
        </div>
    );
}

export default Posts;

