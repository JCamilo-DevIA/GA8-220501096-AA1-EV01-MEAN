// src/app/models/order.ts

import { Product } from "./product";

// Definición de la interfaz Order
export interface Order {
    _id?: string;
    products: Product[];
    total: number;
    status: string;
  }
  