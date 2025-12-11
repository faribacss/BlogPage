// library
import { Clock, User } from "lucide-react";

// data
import { PopularNews } from "@/data";

// router
import { Link } from "react-router";



export default function RecentlyPosts() {
  return (
    <>
      <article
        className="mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
        style={{ backgroundColor: "#DEDEDE" }}
      >
        <div className="m-auto text-center">
          <h2 className="font-Popins text-2xl font-Poppins font-semibold mb-4">
            Latest Posts
          </h2>
          <p className="font-Popins text-lg mb-12 text-gray-700">
            Stay updated with the latest Posts and articles from our blog.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {PopularNews.map((news) => (
            <div
              className="rounded-3xl shadow-lg hover:shadow-xl transition duration-300"
              style={{ backgroundColor: "#EFF1F3" }}
              key={news.id}
            >
              <div className="h-[350px] w-full overflow-hidden rounded-t-3xl">
                <img
                  src={news.image}
                  alt={news.title}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-Popins font-semibold mb-2 text-xl">
                  {news.title}
                </h3>
                <p className="text-gray-500 line-clamp-3">{news.excerpt}</p>

                <div className="flex items-center justify-between pt-8 text-gray-500 text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{news.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{news.readTime}</span>
                    </div>
                  </div>
                  <button className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors ease-in">
                    <Link to={`/postId/${news.id}`} className="text-yellow-100">
                      Take a Look
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
