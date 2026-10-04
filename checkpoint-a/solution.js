// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. every order from the database
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Alexandria AND cancelled
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Alexandria" && order.status === "cancelled"
  );
}

// 3. highest single price, 0 for an empty list
export function summarize(orders) {
  return orders.reduce((max, order) => (order.price > max ? order.price : max), 0);
}

// 4. label for one order, or the fallback if the lookup rejects
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student}: ${order.item} x${order.quantity}`;
  } catch (error) {
    return `No order with id ${id}`;
  }
}

// 5. JSON text with only student and item, in that order
export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map((order) => ({ student: order.student, item: order.item }))
  );
}