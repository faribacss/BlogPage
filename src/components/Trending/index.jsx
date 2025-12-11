import { TrendingArticle } from "@/data";
import { Link } from "react-router";

export default function Trending() {
  return (
    <div className="py-5 mt-3 sm:py-3" style={{ backgroundColor: "#fff" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-2xl font-semibold text-pretty text-gray-900 sm:text-3xl">
            Trending Articles
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 border-t border-gray-500 gap-x-8 gap-y-16 sm:mt-4 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {TrendingArticle.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl shadow-2xl rounded-2xl p-3 flex-col items-start justify-between"
            >
              <div className="group relative grow">
                <img
                  src={post.trendingImg}
                  className="mt-2 rounded-2xl"
                  alt=""
                />
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <Link to={`/postTrending/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="flex items-center mt-3 gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
              </div>
              <div className="w-full mt-8 flex items-center gap-x-4 ">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="size-10 rounded-full bg-gray-50"
                />
                <div className=" gap-x-4 text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
                <Link
                  to={`/postTrending/${post.id}`}
                  className="rounded-full bg-gray-700 p-2 text-gray-200 hover:text-gray-300"
                >
                  See
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
