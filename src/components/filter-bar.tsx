'use client';

interface FilterOption {
  value: string;
  label: string;
  colorClass?: string;
}

interface FilterBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  filters: FilterOption[];
  activeFilter: string;
  onFilterChange: (value: string) => void;
  extraButtons?: React.ReactNode;
}

export default function FilterBar({
  searchValue,
  onSearchChange,
  searchPlaceholder = 'Search...',
  filters,
  activeFilter,
  onFilterChange,
  extraButtons,
}: FilterBarProps) {
  return (
    <div className="flex justify-center gap-3 px-5 py-4 bg-header flex-wrap">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={searchPlaceholder}
        className="px-4 py-2 rounded-md border border-border bg-primary text-text-primary text-[0.95rem] w-[260px] outline-none focus:border-accent"
      />
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onFilterChange(f.value)}
          className={`px-[18px] py-2 rounded-md border text-[0.85rem] cursor-pointer transition-all duration-200 ${
            activeFilter === f.value
              ? f.colorClass
                ? `${f.colorClass} text-white`
                : 'bg-accent border-accent text-white'
              : 'bg-primary border-border text-text-primary hover:bg-border'
          }`}
        >
          {f.label}
        </button>
      ))}
      {extraButtons}
    </div>
  );
}
