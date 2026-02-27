const attrColors: Record<number, string> = {
  0: 'bg-attr-str',
  1: 'bg-attr-agi',
  2: 'bg-attr-int',
  3: 'bg-attr-uni',
};

interface AttributeIndicatorProps {
  attr: number;
  className?: string;
}

export default function AttributeIndicator({ attr, className = '' }: AttributeIndicatorProps) {
  return (
    <span
      className={`w-3.5 h-3.5 rounded-full border border-white/30 ${attrColors[attr] ?? ''} ${className}`}
    />
  );
}
