// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้

// 1. แก้ไขจำนวนสินค้า Apple จาก 100 เป็น 200
inventory.apple.quantity = 200;

// 2. เพิ่มสินค้าใหม่ที่ชื่อ "orange"
inventory.orange = { price: 20, quantity: 300 };

// 3. คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
let totalValue = 0;
for (let item in inventory) {
  totalValue += inventory[item].price * inventory[item].quantity;
}

// 4. แสดงผลมูลค่ารวมทางหน้าจอ Console
console.log(`Total inventory value: ${totalValue} baht`);