export interface Customer {        // Required field
  id: string;           // Required field
  name: string;          // Required field
  email: string;         // Required field
  phone?: string;        // Optional field
  address?: string;      // Optional field
}
