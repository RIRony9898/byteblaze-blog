import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Blog = ({ blog }) => {
  const { cover_image, social_image,title,description,published_at,id } = blog;
  return (
    <div className='bg-base-300 rounded-lg transition hover:scale-105'>
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline "
      >
        <img
          role="presentation"
          className="object-fill w-full h-44 dark:bg-gray-500 rounded-lg"
          src={`${cover_image ? cover_image : social_image}`}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;
