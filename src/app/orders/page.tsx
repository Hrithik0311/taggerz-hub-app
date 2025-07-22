import { userOrders } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function OrdersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">My Orders</CardTitle>
        <CardDescription>A list of your past purchases from Taggerz Hub.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <Badge
                    variant={order.status === 'Delivered' ? 'default' : 'secondary'}
                    className={cn(
                      order.status === 'Delivered' && 'bg-green-500/20 text-green-700',
                      order.status === 'Shipped' && 'bg-blue-500/20 text-blue-700',
                      order.status === 'Processing' && 'bg-yellow-500/20 text-yellow-700',
                       'border-none'
                    )}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <ul className="list-disc list-inside">
                    {order.items.map((item, index) => (
                      <li key={index}>{item.flavor.name} (x{item.quantity})</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
