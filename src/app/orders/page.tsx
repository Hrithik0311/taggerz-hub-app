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
          My Orders
        </h2>
        <p style={{ textAlign: 'center' }}>
          A list of your past purchases from Taggerz Hub.
        </p>
        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Status</th>
              <th>Items</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TGZ-86753</td>
              <td>2024-07-15</td>
              <td className="status-delivered">Delivered</td>
              <td>Polar Ice (x2), Classic Bubble (x1)</td>
              <td>$8.97</td>
            </tr>
            <tr>
              <td>TGZ-84119</td>
              <td>2024-06-28</td>
              <td className="status-delivered">Delivered</td>
              <td>Berry Burst (x3)</td>
              <td>$10.47</td>
            </tr>
            <tr>
              <td>TGZ-09871</td>
              <td>2024-07-28</td>
              <td className="status-shipped">Shipped</td>
              <td>Winterfresh (x2), Cinnamon Surge (x2)</td>
              <td>$14.96</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}
