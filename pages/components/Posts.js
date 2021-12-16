import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react"
import { db } from "../../firebase";
import Post from "./Post";

function Posts() { 
    const { data: session, status } = useSession();
    const [posts, setPosts] = useState([])
    const postsCollectionRef = collection(db, "posts");

    useEffect(()=>{
        const queryString = query(postsCollectionRef, orderBy("timestamp", "desc"))
        const unsub = onSnapshot(queryString, snapshot=>{
            setPosts(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
        })

        return unsub

    }, [])


    return (
        <div>
                {posts.map((post) =>(
                    <Post
                        key ={post.id}
                        post={post.post}
                        name={post.name}
                        profilePic={session.user.image}
                        image={post.image}
                        time={new Date(post.timestamp?.toDate()).toLocaleString()}
                    />
                ))}
        </div>
    )
}

export default Posts
