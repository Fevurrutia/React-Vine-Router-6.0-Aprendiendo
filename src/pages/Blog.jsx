import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"

const Blog = () => {
    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts')
    const [searchParams, setSearchParams] = useSearchParams()

    // useEffect(() => {
    //     setSearchParams({filter: 'franco'})
    // }, [searchParams])
    
    if(loading) return <p>Loading Data...</p>
    if(error) return <p>Error</p>

    const handleChange = (e) => {
        const filter = e.target.value
        // setSearchParams({filter: filter})
        filter ? setSearchParams({filter}) : setSearchParams({})
    }

    return(
        <div>
            <h1 className="font-bold text-3xl">Blog</h1>
            <input type="text" onChange={handleChange} value={searchParams.get('filter') || ''} className="border-2 rounded-md w-2/5"/>
            <ul className="flex flex-col gap-2">
                {
                    data
                    .filter(item => {
                        let filter = searchParams.get('filter')
                        if(!filter) return true
                        let name = item.title.toLowerCase()
                        return name.startsWith(filter.toLowerCase())
                    })

                    .map(item => (<Link to={`/blog/${item.id}`} key={item.id}>{item.id} - {item.title}</Link>))
                }
            </ul>
        </div>
    )
}

export default Blog