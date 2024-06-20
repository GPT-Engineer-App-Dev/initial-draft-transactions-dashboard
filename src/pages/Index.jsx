import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import { DatePicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format, isWithinInterval } from 'date-fns';

const transactions = [
  { customer: 'Liam Johnson', email: 'liam@example.com', type: 'Sale', status: 'Approved', date: '2023-06-23', amount: 250.00 },
  { customer: 'Olivia Smith', email: 'olivia@example.com', type: 'Refund', status: 'Declined', date: '2023-06-24', amount: 150.00 },
  { customer: 'Noah Williams', email: 'noah@example.com', type: 'Subscription', status: 'Approved', date: '2023-06-25', amount: 350.00 },
  { customer: 'Emma Brown', email: 'emma@example.com', type: 'Sale', status: 'Approved', date: '2023-06-26', amount: 450.00 },
  { customer: 'Liam Johnson', email: 'liam@example.com', type: 'Sale', status: 'Approved', date: '2023-06-27', amount: 550.00 },
];

const Index = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const filteredTransactions = transactions.filter(transaction => {
    if (!startDate || !endDate) return true;
    const transactionDate = new Date(transaction.date);
    return isWithinInterval(transactionDate, { start: startDate, end: endDate });
  });
  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <header className="w-full flex justify-between items-center py-4 border-b">
        <h1 className="text-2xl font-bold">Transactions Dashboard</h1>
      </header>
      <main className="w-full flex flex-col items-center mt-8">
        <div className="flex space-x-4 mb-4">
          <div>
            <label className="block mb-2">Start Date</label>
            <DatePicker selected={startDate} onSelect={setStartDate} />
          </div>
          <div>
            <label className="block mb-2">End Date</label>
            <DatePicker selected={endDate} onSelect={setEndDate} />
          </div>
        </div>
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
                {filteredTransactions.map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="font-medium">{transaction.customer}</div>
                      <div className="text-sm text-muted-foreground">{transaction.email}</div>
                    </TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{transaction.status}</Badge>
                    </TableCell>
                    <TableCell>{format(new Date(transaction.date), 'yyyy-MM-dd')}</TableCell>
                    <TableCell className="text-right">${transaction.amount.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;