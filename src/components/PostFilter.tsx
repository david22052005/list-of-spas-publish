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
      />
    </div>
  );
}
