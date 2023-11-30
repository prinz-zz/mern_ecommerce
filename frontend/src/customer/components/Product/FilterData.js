
export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "white" },
      { value: "black", label: "black" },
      { value: "green", label: "green" },
      { value: "yellow", label: "yellow" },
      { value: "blue", label: "blue" },
      { value: "maroon", label: "maroon" },
      { value: "cream", label: "cream" },
      { value: "pink", label: "pink" },
    ],
  }
];

export const singleFilters = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "99-399", label: "₹99 to ₹399 " },
      { value: "399-999", label: "₹399 to ₹999 " },
      { value: "999-1999", label: "₹999 to ₹1999 " },
      { value: "1999-2999", label: "₹1999 to ₹2999 " },
      { value: "2999-3999", label: "₹2999 to ₹39999 " },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10% And Above " },
      { value: "20", label: "20% And Above " },
      { value: "30", label: "30% And Above " },
      { value: "40", label: "40% And Above " },
      { value: "50", label: "50% And Above " },
      { value: "60", label: "60% And Above " },
      { value: "70", label: "70% And Above " },
      { value: "80", label: "80% And Above " },
      { value: "90", label: "90% And Above " },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock " },
      { value: "out_of_stock", label: "Out of Stock " },
    ],
  },
];
