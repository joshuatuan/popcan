function SummaryStat({ label, children, logo }) {
  return (
    <div className="flex cursor-default items-center gap-2 rounded-2xl bg-primary-500 px-2 py-1 text-sm md:block md:h-[110px] md:min-h-[100px] md:w-[170px] md:min-w-0 md:p-3 md:text-base">
      <p
        role="logo"
        className="text-2xl md:mb-1 md:ml-[-4px] md:self-start md:text-3xl"
      >
        {logo}
      </p>
      <div>
        <p className="inline">{label}</p>
        <span className="font-semibold"> {children}</span>
      </div>
    </div>
  );
}

export default SummaryStat;
