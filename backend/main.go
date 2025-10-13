package main

import (
	"chanchai/config"
	"chanchai/controller"
	"chanchai/middlewares"
	"flag"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

const PORT = "8000"

func main() {
	// Parse command line flags
	testMode := flag.Bool("test", false, "Run in test mode (empty database, no mockup data)")
	flag.Parse()

	// โหลดค่าจาก .env ก่อนเชื่อมต่อฐานข้อมูล
	config.LoadEnv()
	config.ConnectDB()

	// Setup database with or without mockup data
	if *testMode {
		log.Println("🧪 Running in TEST MODE - Database will be empty (migrations only)")
		config.SetupDatabaseTestMode()
	} else {
		log.Println("🔄 Running in NORMAL MODE - Database with mockup data")
		config.SetupDatabase()
	}

	// ตั้งค่า CORS Middleware
	r := gin.Default()
	r.Use(CORSMiddleware())

	r.Static("/images", "./images")

	// 🌍 Public API (ไม่ต้องใช้ Token)
	public := r.Group("/")
	{
		public.POST("/auth/login", controller.UserLogin)

		// Send Email OTP
		public.POST("/send-otp-email", controller.ResetPasswordController)
		// Validate OTP
		public.POST("/validate-otp", controller.ValidateResetTokenController)

	}

	// 🔒 Protected API (ต้องใช้ Token) - Guest and Admin
	protected := r.Group("/")
	protected.Use(middlewares.Authorizes(middlewares.Guest)) // ✅ Middleware ตรวจสอบ Token
	{
		// Guest and Admin can access these endpoints
		protected.GET("/roles", controller.ListRoles)
		protected.GET("/profile", controller.GetProfile)
		protected.PUT("/profile", controller.UpdateProfile)
	}

	// 🔒 Admin Only API
	admin := r.Group("/")
	admin.Use(middlewares.Authorizes(middlewares.Admin)) // ✅ Middleware ตรวจสอบ Admin Token
	{
		// User Management (Admin only)
		admin.GET("/users", controller.GetUsers)
		admin.GET("/users/:id", controller.GetUser)
		admin.POST("/users", controller.CreateUser)
		admin.PUT("/users/:id", controller.UpdateUser)
		admin.DELETE("/users/:id", controller.DeleteUser)
	}

	// 🌍 Root Route
	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "🔥 AUTO-RELOAD WORKING! PORT: %s", PORT)
	})

	// 🚀 Start Server
	r.Run(":" + PORT) // ✅ Bind to all interfaces for Docker

}

// 🛠 CORS Middleware
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization, x-authorization")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, PATCH, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
