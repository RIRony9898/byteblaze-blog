import { Link, useLoaderData } from "react-router-dom";
import Blog from "../../components/Blog/Blog";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <div>
      <section className="">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <Link
            to="/blog"
            className="block max-w-full gap-3 mx-auto group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 rounded-lg bg-base-300 transition hover:scale-105"
          >
            <img
              src={`${
                blogs[0].cover_image
                  ? blogs[0].cover_image
                  : blogs[0].social_image
              }`}
              alt=""
              className="object-fill w-full h-64 sm:h-96 lg:col-span-7 rounded-lg"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {blogs[0].title}
              </h3>
              <span className="text-xs ">
                {new Date(blogs[0].published_at).toLocaleDateString()}
              </span>
              <p>{blogs[0].description}</p>
            </div>
          </Link>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(1).map((blog) => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
