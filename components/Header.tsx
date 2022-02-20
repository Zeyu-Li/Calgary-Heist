import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <Link href="/">Study Buddy</Link>
      <Link href="/game">Login</Link>
    </div>
  );
}
