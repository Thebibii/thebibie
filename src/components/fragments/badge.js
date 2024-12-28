const Badge = ({ children }) => {
  return (
    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-[10px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow hover:bg-black/80">
      {children}
    </div>
  );
};

export default Badge;
