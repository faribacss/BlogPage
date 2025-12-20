// components
import Loading from "@/components/Loading";
import Trending from "@/components/Trending";

// services
import GetAllPost from "@/services/posts";

function TrendPosts() {
  const { data: posts, isLoading } = GetAllPost();
  const recentPosts = posts ? posts.slice(0, 3) : [];

  return (
    <div className="grid gap-8 py-5 mt-3 sm:py-3">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-2xl font-semibold text-pretty text-gray-900 sm:text-3xl py-5">
            Trending Articles
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 border-t border-gray-500 gap-x-8 gap-y-16 sm:mt-4 sm:pt-16 lg:max-w-none lg:grid-cols-3">
          {isLoading ? (
            <div className="col-span-full flex justify-center py-4">
              <Loading />
            </div>
          ) : (
            <>
              {recentPosts.map((post) => (
                <Trending key={post.documentId} {...post} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default TrendPosts;
