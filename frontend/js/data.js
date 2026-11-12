export const demoEmployees = [
  { id: "DL-1001", name: "محمود", nameEn: "Mahmoud", department: "المراجعة", departmentEn: "Audit", title: "موظف ميداني", titleEn: "Field Employee", initial: "م", color: "#eee9f7", ink: "#664d92", manager: "بلال" },
  { id: "DL-1002", name: "بلال", nameEn: "Belal", department: "المراجعة", departmentEn: "Audit", title: "مدير القسم", titleEn: "Department Manager", initial: "ب", color: "#e5f2ee", ink: "#307963", manager: "عمرو" },
  { id: "DL-1003", name: "عمرو", nameEn: "Amr", department: "الإدارة", departmentEn: "Administration", title: "مدير النظام", titleEn: "System Administrator", initial: "ع", color: "#fff0e2", ink: "#a66b30", manager: "—" },
];

export const demoAttendance = [
  { id: "AT-DEMO-001", employeeId: "DL-1001", date: "2026-11-12", time: "08:45", lat: "30.0444", lng: "31.2357", accuracy: 18, address: "وسط البلد، القاهرة", status: "reviewed", statusEn: "Reviewed" },
];

export const demoDepartments = [
  { ar: "المراجعة", en: "Audit", head: "بلال", count: 1, present: 1, color: "#55b8b2" },
];

export const demoRoles = {
  admin: { ar: "مدير النظام", en: "System Administrator", employeeId: "DL-1003" },
  manager: { ar: "مدير القسم", en: "Department Manager", employeeId: "DL-1002" },
  employee: { ar: "موظف", en: "Employee", employeeId: "DL-1001" },
};
