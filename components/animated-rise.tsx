export function AnimatedRise({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div className="animate-rise" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
