const posts = [
  {
    title: 'Creating a NFT mint site from zero',
    date: 'January 4, 2022',
    tags: ['React', 'Angular'],
  },
  {
    title: 'How to add a connect wallet button to your website',
    date: 'January 4, 2022',
    tags: ['MongoDB', 'Node'],
  },
  {
    title: 'Using WordPress vs. building a website from scratch',
    date: 'January 4, 2022',
    tags: ['GraphQL'],
  },
  {
    title: 'React vs. Angular vs. Vue comparison',
    date: 'January 4, 2022',
    tags: ['Next.js', 'React'],
  },
];

export default function Posts() {
  return (
    <section className="my-12">
      <h3 className="text-xl font-semibold mb-6">Latest posts</h3>
      <div className="space-y-4">
        {posts.map((post, idx) => (
          <div key={idx} className="p-4 border rounded">
            <div className="flex justify-between">
              <h4 className="font-medium">{post.title}</h4>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>
            <div className="mt-2 space-x-2">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
