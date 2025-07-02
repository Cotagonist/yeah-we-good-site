import { XMLParser } from 'fast-xml-parser';

export async function fetchPosts() {
  // Fetch the RSS XML
  const res = await fetch('https://medium.com/feed/@cotagonist');
  const xml = await res.text();

  // Parse the XML into JS object
  const parser = new XMLParser({
    ignoreAttributes: false, // Keep attributes like "url"
  });
  const json = parser.parse(xml);

  // Medium's RSS feed structure:
  // json.rss.channel.item is the array of posts
  const items = json?.rss?.channel?.item || [];

  // Map to your simplified shape
  return items.map((item: any) => ({
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
