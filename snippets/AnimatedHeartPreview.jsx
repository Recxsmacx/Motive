export const AnimatedHeartPreview = ({ size = 28, label = "Click me" }) => {
  return (
    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-pink-500/30 bg-pink-500/10 text-pink-400 text-sm font-medium group cursor-pointer transition-all hover:bg-pink-500/20 active:scale-95">
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:scale-125"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
      <span>{label}</span>
    </div>
  );
};

export default AnimatedHeartPreview;
