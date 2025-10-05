package config

import (
	"chanchai/entity"
	"fmt"
	"log"
	"os"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

// ฟังก์ชันสำหรับเรียกใช้งานฐานข้อมูล
func DB() *gorm.DB {
	return db
}

// ฟังก์ชันเชื่อมต่อฐานข้อมูล
func ConnectDB() {
	var err error

	// อ่าน DB_NAME จาก environment variable
	dbName := os.Getenv("DB_NAME")
	if dbName == "" {
		dbName = "GOTNAJA.db" // default
	}

	database, err := gorm.Open(sqlite.Open(dbName+"?cache=shared"), &gorm.Config{})
	if err != nil {
		log.Fatal("❌ Failed to connect database:", err)
	}

	fmt.Printf("✅ Connected to database: %s\n", dbName)
	db = database
}


// ฟังก์ชันสร้างตารางในฐานข้อมูล
func SetupDatabase() {
	if db == nil {
		log.Fatal("❌ Database connection is nil. Please call ConnectDB() first.")
	}

	err := db.AutoMigrate(
		&entity.User{},
		&entity.Role{},
	)

	if err != nil {
		log.Fatal("❌ Failed to migrate database:", err)
	}

	fmt.Println("✅ Database migrated successfully!")

	SeedDatabase()

}

// ฟังก์ชันสร้างตารางในฐานข้อมูลสำหรับ Test Mode (ไม่มีข้อมูล mockup)
func SetupDatabaseTestMode() {
	if db == nil {
		log.Fatal("❌ Database connection is nil. Please call ConnectDB() first.")
	}

	err := db.AutoMigrate(
		&entity.User{},
		&entity.Role{},
	)

	if err != nil {
		log.Fatal("❌ Failed to migrate database:", err)
	}

	fmt.Println("✅ Database migrated successfully! (Test Mode - No mockup data)")
}

// ฟังก์ชันเพิ่มข้อมูลตัวอย่าง
func SeedDatabase() {

	// 🔹 ข้อมูล Role
	roles := []entity.Role{
		{Name: "Guest"},
		{Name: "Admin"},
	}
	for _, role := range roles {
		db.FirstOrCreate(&role, entity.Role{Name: role.Name})
	}

	// 🔹 ข้อมูล Users
	users := []entity.User{
		{

			FirstName: "Admin",
			LastName:  "Admin",
			Email:     "admin@gmail.com",
			Password:  "123456",
			RoleID:    2,
		},
		{
			FirstName: "Guest",
			LastName:  "1",
			Email:     "Guest@gmail.com",
			Password:  "123456",
			RoleID:    1, // Manager (ID 4)

		},
	}
	for i, user := range users {
		users[i].Password, _ = HashPassword(user.Password)
		db.FirstOrCreate(&users[i], entity.User{Email: user.Email})
	}

}
