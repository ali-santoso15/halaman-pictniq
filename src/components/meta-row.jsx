export function MetaRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-4 rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
      <div className="mt-1 flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
        <Icon className="size-4 text-cyan-200" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-white/40">{label}</p>
        <p className="mt-2 whitespace-pre-line text-sm leading-7 text-white/72">{value}</p>
      </div>
    </div>
  );
}
