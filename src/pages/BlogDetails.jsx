import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom"

const BlogDetails = () => {
    const params = useParams()
    const {data, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if(loading) return <p>Loading Data...</p>
    if(error) return <p>Error</p>

    return (
        <div className="flex flex-col">
            <h1 className="font-bold">{data.id} - {data.title}</h1>
            <p>{data.body}</p>
            <div className=" flex justify-center items-center mt-10 border-2 w-32 h-8 rounded-md border-black bg-blue-500 text-white border-none">
                <Link to="/blog">Volver al Blog</Link>
            </div>
            
        </div>
    )
    
}

export default BlogDetails