type Post = {
  title: string;
  link: string;
  date: string;
  categories: string[];
};

export default function Posts({ posts }: { posts: Post[] }) {
  if (!posts.length) {
    return <p className="text-center mt-6 text-gray-500">No posts found.</p>;
  }

  return (
    <section className="my-12">
      <h3 className="text-xl font-semibold mb-6">Latest posts</h3>
      <div className="space-y-4">
        {posts.map((post, idx) => (
          <a
            key={idx}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            <div className="flex justify-between">
              <h4 className="font-medium">{post.title}</h4>
              <span className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </span>
            </div>
            <div className="mt-2 space-x-2">
              {post.categories.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
