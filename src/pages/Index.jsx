import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <header className="w-full flex justify-between items-center py-4 border-b">
        <h1 className="text-2xl font-bold">Transactions Dashboard</h1>
      </header>
      <main className="w-full flex flex-col items-center mt-8">
        <Card className="w-full max-w-4xl">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Liam Johnson</div>
                    <div className="text-sm text-muted-foreground">liam@example.com</div>
                  </TableCell>
                  <TableCell>Sale</TableCell>
                  <TableCell>
                    <Badge variant="outline">Approved</Badge>
                  </TableCell>
                  <TableCell>2023-06-23</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Olivia Smith</div>
                    <div className="text-sm text-muted-foreground">olivia@example.com</div>
                  </TableCell>
                  <TableCell>Refund</TableCell>
                  <TableCell>
                    <Badge variant="outline">Declined</Badge>
                  </TableCell>
                  <TableCell>2023-06-24</TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Noah Williams</div>
                    <div className="text-sm text-muted-foreground">noah@example.com</div>
                  </TableCell>
                  <TableCell>Subscription</TableCell>
                  <TableCell>
                    <Badge variant="outline">Approved</Badge>
                  </TableCell>
                  <TableCell>2023-06-25</TableCell>
                  <TableCell className="text-right">$350.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Emma Brown</div>
                    <div className="text-sm text-muted-foreground">emma@example.com</div>
                  </TableCell>
                  <TableCell>Sale</TableCell>
                  <TableCell>
                    <Badge variant="outline">Approved</Badge>
                  </TableCell>
                  <TableCell>2023-06-26</TableCell>
                  <TableCell className="text-right">$450.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Liam Johnson</div>
                    <div className="text-sm text-muted-foreground">liam@example.com</div>
                  </TableCell>
                  <TableCell>Sale</TableCell>
                  <TableCell>
                    <Badge variant="outline">Approved</Badge>
                  </TableCell>
                  <TableCell>2023-06-27</TableCell>
                  <TableCell className="text-right">$550.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;