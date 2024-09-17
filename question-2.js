// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้

// 1. เพิ่ม Task ใหม่
userTaskList.push({ id: 5, task: "Walk the dog" });

// 2. แก้ไขชื่อ Task ที่มี id เป็น 4
userTaskList[3].task = "Go to the gym";

// 3. ลบ Task สุดท้าย
userTaskList.pop();

// 4. Log ข้อความของ Task ตัวสุดท้าย
const lastTask = userTaskList[userTaskList.length - 1];
console.log(`Task id: ${lastTask.id}, ${lastTask.task}`);