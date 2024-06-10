export  const menuItems = [
  { key: "1", label: "Dashboard", path: "/", subMenu:[] },
  { key: "2", label: "Data", 
    path: "/data", 
    subMenu:[
      {key: "3", label: "Kelembagaan", path: "/data"},
      {key: "4", label: "Penutupan Lahan", path: "/data"},
      {key: "5", label: "Potensi Tegakan", path: "/data"},
      {key: "6", label: "Potensi Fauna", path: "/data"},
      {key: "7", label: "Potensi Flora", path: "/data"},
      {key: "8", label: "Potensi Sosial Budaya", path: "/data"},      
    ]
  },
  { key: "9", label: "User Management", path: "/user-management",
    subMenu:[
      {key: "10", label: "Users", path: "/dashboard/user/users"},
      {key: "11", label: "User Roles", path: "/dashboard/user/roles"},
    ]
  }
];

export default menuItems;