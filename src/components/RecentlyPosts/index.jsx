// library
import { Clock, User } from "lucide-react";
import { Link } from "react-router";

// img
import notFoundImage from "@/assets/img/notFound.png";

export default function RecentlyPosts({
  title,
  documentId,
  content,
  url,
  publishedAt,
  author,
}) {
  return (
    <>
      <div
        className="rounded-3xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col h-full"
        style={{ backgroundColor: "#EFF1F3" }}
      >
        <div className="h-[250px] w-full overflow-hidden rounded-t-3xl shrink-0">
          <img
            src={url || notFoundImage}
            alt={title}
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-5 flex flex-col grow">
          <h3 className="font-Popins font-semibold mb-2 text-xl line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-500 line-clamp-3 mb-4 grow">{content}</p>

          <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-200 text-gray-500 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span className="truncate max-w-20">{author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{new Date(publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
            <Link
              to={`/postId/${documentId}`}
              className="bg-gray-700 text-yellow-100 p-2 rounded-lg hover:bg-gray-600 transition-colors ease-in whitespace-nowrap ml-2"
            >
              Take a Look
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
