import { fetchPosts } from '../../../lib/fetchPosts';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = await fetchPosts();
  return NextResponse.json(posts);
}
