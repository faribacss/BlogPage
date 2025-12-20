// library
import { Link } from "react-router";

// image icon
import icon from "@/assets/img/icon.png";

export default function Trending({
  title,
  documentId,
  content,
  url,
  publishedAt,
  author,
}) {
  return (
    <article
      key={documentId}
      className="flex max-w-xl shadow-2xl rounded-2xl p-3 flex-col items-start justify-between"
    >
      <div className="group relative grow">
        <img src={url} className="mt-2 rounded-2xl" alt="" />
        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
          <Link to={`/postTrending/${documentId}`}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{content}</p>
      </div>
      <div className="flex items-center mt-3 gap-x-4 text-xs">
        <time dateTime={publishedAt} className="text-gray-500">
          {new Date(publishedAt).toLocaleDateString()}
        </time>
      </div>
      <div className="w-full mt-8 flex items-center gap-x-4 ">
        <img
          src={icon}
          className="size-7 rounded-full bg-gray-50"
        />
        <div className=" gap-x-4 text-sm/6">
          <p className="font-semibold text-gray-900">
            <span className="absolute inset-0" />
            {author}
          </p>
        </div>
        <Link
          to={`/postTrending/${documentId}`}
          className="rounded-full bg-gray-700 p-2 text-gray-200 hover:text-gray-300"
        >
          See
        </Link>
      </div>
    </article>
  );
}
