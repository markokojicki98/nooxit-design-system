/**
 * Preview routes are shown inside an iframe on a docs page, so they render
 * bare: no docs chrome, no navigation. The root layout still supplies <html>,
 * the fonts and the theme, which is the point — a preview has to be rendered
 * by the same stylesheet as the rest of the site to be worth looking at.
 */
export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-svh bg-background">{children}</div>;
}
