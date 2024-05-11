export default function PageContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="page-content">{children}</div>;
}
