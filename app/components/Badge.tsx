export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 rounded-full px-3 py-1">
      {children}
    </span>
  );
}
