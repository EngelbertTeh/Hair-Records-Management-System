export default function Panel({
  props,
  children,
  shadow = false,
}: {
  props: { title: string };
  children?: React.ReactNode;
  shadow?: boolean;
}) {
  return (
    <div className={`panel ${shadow && 'shadow-md'}`}>
      <div className="header">
        <h1>{props.title}</h1>
      </div>
      <div className="flex justify-center">{children}</div>
    </div>
  );
}
