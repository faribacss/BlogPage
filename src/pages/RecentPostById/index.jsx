// library
import { Clock, User } from "lucide-react";
import { Link, useParams } from "react-router";

// services
import { GetPostById } from "@/services/posts";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";

export default function RecentPostById() {
  const { documentId } = useParams();
  const { data: post, isLoading } = GetPostById(documentId);

  if (!post) {
    return (
      <div className="py-50 text-center">
        {isLoading ? (
          <Loading />
        ) : (
         <NotFound />
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto flex justify-center flex-wrap px-6 lg:px-10 py-10 relative ">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl font-mono m-4 mx-0">Article</p>
          <h1 className="text-4xl font-Popins font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-500 text-sm mb-8 border-b pb-4">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 w-4 h-4 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6Z"
                />
              </svg>
              <span>Category</span>
            </div>
          </div>
          <div className="flex justify-center bg-gray-100 overflow-hidden rounded-3xl mb-8">
            <img
              src={post.url}
              alt={post.title}
              className="h-full object-cover"
            />
          </div>
          <div className="text-lg text-gray-700 leading-relaxed">
            <h1 className="mb-4 font-semibold">{post.title}</h1>
            <p className="mb-4 text-justify">{post.content}</p>
          </div>
          <button className="mt-8 bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors ease-in">
            <Link to="/" className="text-yellow-100">
              Back to Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
