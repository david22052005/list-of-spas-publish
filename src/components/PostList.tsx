import type { Post } from '../pages/PostsPage';
import { useCallback } from 'react';

interface PostListProps {
  posts: Post[];
  onSelect: (post: Post) => void;
  filter: string;
}

/* =====================
   Highlight seguro
===================== */
const highlightText = (text: string, query: string) => {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark
        key={index}
        className="
          bg-yellow-300/70 dark:bg-yellow-400/30
          text-gray-900 dark:text-yellow-200
          px-1 rounded
        "
      >
        {part}
      </mark>
    ) : (
      <span key={index}>{part}</span>
    )
  );
};

export default function PostList({ posts, onSelect, filter }: PostListProps) {
  const handleSelect = useCallback(
    (post: Post) => () => onSelect(post),
    [onSelect]
  );

  return (
    <section className="post-grid">
      {posts.map(post => (
        <article
          key={post.id}
          onClick={handleSelect(post)}
          onKeyDown={e => e.key === 'Enter' && onSelect(post)}
          tabIndex={0}
          role="button"
          aria-label={`Ver detalles de ${post.title}`}
          className="
            bg-white dark:bg-gray-800
            border border-gray-200 dark:border-gray-700
            rounded-xl p-4
            cursor-pointer
            transition
            hover:scale-[1.02]
            hover:shadow-lg
            hover:ring-2 hover:ring-indigo-400
            focus:outline-none focus:ring-2 focus:ring-indigo-500
          "
        >
          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
            {highlightText(post.title, filter)}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
            {highlightText(post.body, filter)}
          </p>
        </article>
      ))}
    </section>
  );
}
