// app/components/CustomerForm.tsx
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

export default function CustomerForm() {
  const [email, setEmail] = useState<string>("");
  const [domainId, setDomainId] = useState<string>("");
  const [users, setUsers] = useState<string>(""); // We'll input users as comma-separated values
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Prepare the data to send to the backend

    const customerData = {
      email,
    };

    try {
      const response = await fetch("/api/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
      });

      if (response.ok) {
        setMessage("Customer created successfully!");
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error creating customer:", error);
      setMessage("Something went wrong, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Customer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex flex-col">
        <DialogHeader>
          <DialogTitle>Create Customer</DialogTitle>
          <DialogDescription>
            Create your customer and their email
          </DialogDescription>
        </DialogHeader>
        <div>
          {message && (
            <div
              className={`mb-4 p-3 rounded ${
                message.includes("Error") ? "bg-red-100" : "bg-green-100"
              }`}
            >
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter email"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Customer"}
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
