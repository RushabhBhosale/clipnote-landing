import { ClipboardIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid size-7 place-items-center rounded-[8px] border border-white/10 bg-gradient-to-b from-[#1c1c22] to-[#131318] text-[#a5b0ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <ClipboardIcon className="size-4" strokeWidth={1.7} />
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-zinc-100">
        {siteConfig.name}
      </span>
    </span>
  );
}