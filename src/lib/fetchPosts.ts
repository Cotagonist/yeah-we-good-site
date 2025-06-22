import Parser from 'rss-parser';

const parser = new Parser();

export async function fetchPosts() {
  const feed = await parser.parseURL('https://medium.com/feed/@cotagonist');

  return feed.items.map((item) => ({
    title: item.title || 'Untitled',
    link: item.link || '#',
    date: item.pubDate || '',
    categories: item.categories || [],
  }));
}
