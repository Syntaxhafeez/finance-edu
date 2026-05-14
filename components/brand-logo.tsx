import Link from "next/link";

export function BrandLogo() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-3 tracking-normal" aria-label="LedgerWise home">
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[14px] bg-[#071816] shadow-sm ring-1 ring-emerald-400/25 dark:bg-emerald-400">
        <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/12 to-transparent dark:from-white/30" />
        <svg viewBox="0 0 48 48" aria-hidden="true" className="relative h-9 w-9">
          <path
            d="M13.5 13.8c0-2 1.6-3.6 3.6-3.6h17.4c1.7 0 3 1.3 3 3v21.6c0 1.7-1.3 3-3 3H17.1c-2 0-3.6-1.6-3.6-3.6V13.8Z"
            className="fill-white/10 stroke-emerald-300 dark:fill-emerald-950/10 dark:stroke-emerald-950"
            strokeWidth="3"
          />
          <path
            d="M18.5 32.8V25M24 32.8V19.4M29.5 32.8V15.4"
            className="stroke-white dark:stroke-emerald-950"
            strokeLinecap="round"
            strokeWidth="3.4"
          />
          <path
            d="M18.5 23.9 23 20l4.8 2.9 6-7.5"
            className="stroke-emerald-300 dark:stroke-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.8"
          />
          <path
            d="M18.2 38h19.3"
            className="stroke-emerald-300/75 dark:stroke-emerald-950/70"
            fill="none"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
      </span>
      <span className="truncate text-2xl font-semibold tracking-normal">LedgerWise</span>
    </Link>
  );
}
