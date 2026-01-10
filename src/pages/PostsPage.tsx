import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import PostFilter from '../components/PostFilter';
import PostList from '../components/PostList';
import PostModal from '../components/PostModal';
import PostSkeleton from '../components/PostSkeleton';
import DarkModeToggle from '../components/DarkModeToggle';

export interface Post {
  id: number;
  title: string;
  body: string;
}

const ITEMS_PER_LOAD = 8;

export default function PostsPage() {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const observerRef = useRef<HTMLDivElement | null>(null);

  /* =====================
     FETCH POSTS
  ===================== */
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then((data: Post[]) => {
        setAllPosts(data);
        setDisplayedPosts(data.slice(0, ITEMS_PER_LOAD));
      })
      .finally(() => setLoading(false));
  }, []);

  /* =====================
     FILTRO (memoizado)
  ===================== */
  const filteredPosts = useMemo(() => {
    if (!filter) return allPosts;

    const value = filter.toLowerCase();

    return allPosts.filter(
      post =>
        post.title.toLowerCase().includes(value) ||
        post.body.toLowerCase().includes(value)
    );
  }, [filter, allPosts]);

  /* =====================
     LOAD MORE (scroll)
  ===================== */
  const loadMore = useCallback(() => {
    const source = filter ? filteredPosts : allPosts;
    const currentLength = displayedPosts.length;

    if (currentLength >= source.length) return;

    setLoadingMore(true);

    setTimeout(() => {
      setDisplayedPosts(prev => [
        ...prev,
        ...source.slice(currentLength, currentLength + ITEMS_PER_LOAD),
      ]);
      setLoadingMore(false);
    }, 500);
  }, [displayedPosts.length, filter, filteredPosts, allPosts]);

  /* =====================
     RESET AL CAMBIAR FILTRO
  ===================== */
  useEffect(() => {
    const source = filter ? filteredPosts : allPosts;
    setDisplayedPosts(source.slice(0, ITEMS_PER_LOAD));
  }, [filter, filteredPosts, allPosts]);

  /* =====================
     INTERSECTION OBSERVER
  ===================== */
  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loadingMore && !loading) {
          loadMore();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [loadMore, loadingMore, loading]);

  /* =====================
     RENDER
  ===================== */
  return (
    <div className="page">
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Publicaciones
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explora contenido consumido desde una API pública
          </p>
        </div>

        <DarkModeToggle />
      </header>


      <PostFilter value={filter} onChange={setFilter} />

      {/* Skeleton inicial */}
      {loading && (
        <div className="post-grid">
          {Array.from({ length: ITEMS_PER_LOAD }).map((_, i) => (
            <PostSkeleton key={i} />
          ))}
        </div>
      )}

      {/* Posts */}
      {!loading && displayedPosts.length > 0 && (
        <PostList
          posts={displayedPosts}
          filter={filter}
          onSelect={setSelectedPost}
        />
      )}

      {/* Empty state */}
      {!loading && displayedPosts.length === 0 && filter && (
        <div className="empty-state">
          <h3>🔍 Sin resultados</h3>
          <p>
            No encontramos publicaciones que coincidan con{' '}
            <strong>“{filter}”</strong>.
          </p>
          <span>Intenta con otro término</span>
        </div>
      )}

      {/* Skeleton al cargar más */}
      {loadingMore && (
        <div className="post-grid">
          {Array.from({ length: 4 }).map((_, i) => (
            <PostSkeleton key={i} />
          ))}
        </div>
      )}

      {/* Trigger scroll */}
      <div ref={observerRef} />

      {/* Modal */}
      {selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
}
