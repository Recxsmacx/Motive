export const AnimatedBellPreview = ({ size = 28, label = "Hover me" }) => {
  return (
    <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium group cursor-pointer transition-all hover:bg-violet-500/20">
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:rotate-12 origin-top"
      >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
      <span>{label}</span>
    </div>
  );
};

export default AnimatedBellPreview;
