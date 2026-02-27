'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/heroes', icon: '\u2655', label: 'Hero Stats' },
  { href: '/compare', icon: '\u2656', label: 'Hero Comparison' },
  { href: '/lane-matchup', icon: '\u2654', label: 'Lane Matchup' },
  { href: '/hero-trivia', icon: '\u25CE', label: 'Hero Trivia' },
  { href: '/simulator', icon: '\u25B6', label: 'Simulator' },
  { href: '/creep-quiz', icon: '\u265A', label: 'Creep Wave Timer' },
  { href: '/items', icon: '\u262F', label: 'Items' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-3 left-3 z-300 bg-sidebar border border-border text-text-primary px-2.5 py-2 rounded-md cursor-pointer text-xl leading-none hidden max-md:block"
        onClick={() => setOpen(!open)}
      >
        &#9776;
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-199"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`w-[220px] min-h-screen bg-sidebar border-r border-border flex flex-col fixed top-0 left-0 z-200 transition-transform duration-300 max-md:${open ? 'translate-x-0' : '-translate-x-full'}`}
        style={{
          transform: typeof window !== 'undefined' && window.innerWidth <= 768 && !open ? 'translateX(-100%)' : undefined,
        }}
      >
        <div className="px-4 py-5 border-b-2 border-accent text-center">
          <h2 className="text-[1.1rem] text-accent tracking-wide font-bold">DOTA 2</h2>
          <span className="text-[0.65rem] text-text-dim uppercase tracking-[2px]">Best Knowledge Base</span>
        </div>
        <nav className="py-3 flex-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-5 py-3 no-underline text-[0.9rem] transition-all duration-200 border-l-3 ${
                  isActive
                    ? 'text-accent bg-accent/10 border-l-accent'
                    : 'text-text-muted border-l-transparent hover:text-text-primary hover:bg-accent/5'
                }`}
                onClick={() => setOpen(false)}
              >
                <span className="w-5 text-center text-base">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
