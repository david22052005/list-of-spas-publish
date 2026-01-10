import type { Post } from '../pages/PostsPage';

interface Props {
  post: Post;
  onClose: () => void;
}

export default function PostModal({ post, onClose }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal zoom-in" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
