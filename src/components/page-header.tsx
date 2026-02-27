interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="bg-linear-to-br from-header to-header-end p-5 text-center border-b-2 border-accent">
      <h1 className="text-2xl text-accent tracking-wide font-bold">{title}</h1>
    </header>
  );
}
