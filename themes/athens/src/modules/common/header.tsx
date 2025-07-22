import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-stone-200">
      <div className="container flex h-12 items-center justify-between px-4 uppercase">
        <Link href="/" className="font-semibold">
          Westmore
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/account" className="flex items-start gap-1">
            Account
          </Link>
        </nav>
      </div>
    </header>
  );
}
