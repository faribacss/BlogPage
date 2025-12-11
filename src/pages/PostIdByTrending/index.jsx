import { TrendingArticle } from "@/data";
import { Link, useParams } from "react-router";

export default function PostIdByTrending() {
  const { id } = useParams();
  const postId = parseInt(id);

  const post = TrendingArticle.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-red-600">Error 404</h1>
        <p className="text-gray-700 mt-2">
          پست مورد نظر (با شناسه {id}) پیدا نشد.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto flex justify-center flex-wrap gap-20 px-6 lg:px-10 py-10 relative ">
        <div className="order-1 h-[400px] sm:h-[550px] xl:sticky right-0 top-40 sm:static overflow-hidden rounded-3xl mb-8">
          <img
            src={post.trendingImg}
            className="object-cover rounded-full w-[500px] h-[500px] mb-4"
            alt={post.title}
          />
        </div>

        <article
          key={post.id}
          className="w-full lg:w-2/3 flex flex-col items-start justify-between my-12"
          style={{ maxWidth: "1000px" }}
        >
          <div className="flex flex-wrap items-center gap-x-6 mb-8">
            <div className="flex items-center gap-x-4">
              <img
                alt={post.author.name}
                src={post.author.imageUrl}
                className="size-12 rounded-full bg-gray-100 object-cover "
              />
              <div className="text-sm">
                <p className="font-semibold text-gray-900">
                  <a href={post.author.href} className="hover:text-gray-600">
                    {post.author.name}
                  </a>
                </p>
                <p className="text-gray-600 text-xs mt-1">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-x-3 text-xs mt-4 sm:mt-0">
              <time
                dateTime={post.datetime}
                className="text-gray-600 px-3 py-1 rounded-full font-medium"
              >
                {post.date}
              </time>
              <a
                href={post.category.href}
                className="relative z-10 px-3 py-1.5 font-medium text-gray-600 hover:text-gray-500"
              >
                {post.category}
              </a>
            </div>
          </div>
          <div className="text-gray-700 text-justify">
            <p className="font-mono">Trending</p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
              {post.title}
            </h3>
            <p className="mt-6 text-lg leading-7 text-gray-700">
              {post.description}
            </p>
          </div>
          <Link
            to="/"
            className="mt-10 rounded-lg bg-gray-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-700 transition duration-300"
          >
            Home
          </Link>
        </article>
      </div>
    </div>
  );
}
