import { PrimaryAttr } from '@/types/hero';

const attrColors: Record<PrimaryAttr, string> = {
  str: 'bg-attr-str',
  agi: 'bg-attr-agi',
  int: 'bg-attr-int',
  all: 'bg-attr-uni',
};

interface AttributeIndicatorProps {
  attr: PrimaryAttr;
  className?: string;
}

export default function AttributeIndicator({ attr, className = '' }: AttributeIndicatorProps) {
  return (
    <span
      className={`w-3.5 h-3.5 rounded-full border border-white/30 ${attrColors[attr]} ${className}`}
    />
  );
}
