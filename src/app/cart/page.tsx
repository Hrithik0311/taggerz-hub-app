/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Yw2uG5E3P4B
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <>
      <main className="container">
        <h2
          className="headline"
          style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '24px' }}
        >
          Your Cart
        </h2>
        <div id="cart-container">{/* Cart items will be injected here by JavaScript */}</div>
      </main>
    </>
  );
}
