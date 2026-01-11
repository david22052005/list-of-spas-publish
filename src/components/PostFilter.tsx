interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function PostFilter({ value, onChange }: Props) {
  return (
    <div className="filter-wrapper">
      <input
        type="text"
        placeholder="Buscar publicaciones por título o contenido…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full rounded-md px-3 py-2
          bg-white text-gray-900 placeholder-gray-400
          border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-blue-500

          dark:bg-gray-900 dark:text-gray-100
          dark:placeholder-gray-400 dark:border-gray-700
        "
      />
    </div>
  );
}
