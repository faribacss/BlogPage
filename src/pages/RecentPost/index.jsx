import Loading from "@/components/Loading";
import RecentlyPosts from "@/components/RecentlyPosts";
import GetAllPost from "@/services/posts";

function RecentPost() {
  const { data: posts, isLoading } = GetAllPost();
  const recentPosts = posts ? posts.slice() : [];

  return (
    <section className="py-12 lg:py-16 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-Popins text-3xl font-semibold mb-4 text-gray-900">
            Latest Posts
          </h2>
          <p className="font-Popins text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest Posts and articles from our blog.
          </p>
        </div>

        {isLoading ? (
         <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <RecentlyPosts key={post.documentId} {...post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
export default RecentPost;
