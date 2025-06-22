'use client';

import { useEffect, useState } from 'react';

type Post = {
  title: string;
  link: string;
  date: string;
  categories: string[];
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPostsClient() {
      try {
        const res = await fetch('/api/posts');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPostsClient();
  }, []);

  if (loading) {
    return <p className="text-center mt-6 text-gray-500">Loading posts…</p>;
  }

  if (!posts.length) {
    return <p className="text-center mt-6 text-gray-500">No posts found.</p>;
  }

  return (
    <section className="my-12">
      <h3 className="text-xl font-semibold mb-6">Latest posts</h3>
      <div className="space-y-4">
        {posts.slice(0, visibleCount).map((post, idx) => (
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

      {visibleCount < posts.length && (
        <div className="mt-6 text-center">
          <button
            className="text-sm px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black"
            onClick={() => setVisibleCount((prev) => prev + 10)}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
