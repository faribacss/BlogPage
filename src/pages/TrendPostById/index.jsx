import { Link, useParams } from "react-router";
import { GetPostById } from "@/services/posts";
import icon from "@/assets/img/icon.png";
import { Clock } from "lucide-react";

export default function TrendPostById() {
  const { documentId } = useParams();
  const { data: post, isLoading } = GetPostById(documentId);

  if (!post) {
    return isLoading ? (
      <p className="text-center mx-auto text-gray-500">Loading post...</p>
    ) : (
      <p className="text-center mx-auto text-gray-500">Post not found.</p>
    );
  }

  return (
    <div>
      <div className="mx-auto flex justify-center flex-wrap gap-20 px-6 lg:px-10 py-10 relative ">
        <div className="order-1 h-[400px] sm:h-[550px] xl:sticky right-0 top-40 sm:static overflow-hidden rounded-3xl mb-8">
          <img
            src={post.url}
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
                alt={post.author}
                src={icon}
                className="size-10 rounded-full bg-gray-100 object-cover "
              />
              <div className="text-sm">
                <p className="font-extrabold text-gray-900">
                  <a href="#" className="hover:text-gray-600">
                    {post.author}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-x-1 text-xs mt-4 sm:mt-0 font-medium text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              <a
                href="#"
                className="relative z-10 px-3 py-1.5 font-medium text-gray-600 hover:text-gray-500"
              >
                Category
              </a>
            </div>
          </div>
          <div className="text-gray-700 text-justify">
            <p className="font-mono">Trending</p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
              {post.title}
            </h3>
            <p className="mt-6 text-lg leading-7 text-gray-700">
              {post.content}
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
