import type { Post } from '../pages/PostsPage';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Error al obtener publicaciones');
  }

  return response.json();
}
