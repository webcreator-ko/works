export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang?: string;
  };
}) {
  console.log(params.lang);
  return children;
}
