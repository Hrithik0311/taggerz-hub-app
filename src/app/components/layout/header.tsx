import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/" className="logo">
          <i data-lucide="sparkles"></i>
          <h1>Taggerz Hub</h1>
        </Link>
        <nav>
          <Link href="/">Flavors</Link>
          <Link href="/orders">My Orders</Link>
        </nav>
        <div className="header-actions">
          <Link href="/cart" className="cart-link">
            <i data-lucide="shopping-cart"></i>
            <span id="cart-count-badge" className="badge">
              0
            </span>
          </Link>
          <Link href="/login">
            <i data-lucide="user"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}
