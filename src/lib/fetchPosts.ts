export interface RssItem {
  title?: string;
  link?: string;
  pubDate?: string;
  category?: string | string[];
}

export async function fetchPosts() {
  const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cotagonist');
  if (!response.ok) {
    throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
  }

  const data = await response.json();

  const items: RssItem[] = data.items || [];

  return items.map((item: RssItem) => ({
    title: item.title || 'Untitled',
    link: item.link || '#',
    date: item.pubDate || '',
    categories: Array.isArray(item.category)
      ? item.category
      : item.category
      ? [item.category]
      : [],
  }));
}
