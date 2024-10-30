import {useLoaderData} from 'react-router-dom'

const SingleFullBlog = () => {

    const fullBlog = useLoaderData()
  return (
    <div>
        <h2>{fullBlog.title}</h2>
    </div>
  )
}

export default SingleFullBlog