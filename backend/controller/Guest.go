package controller

import (
	"chanchai/config"
	"chanchai/entity"
	"math/rand"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
)

// CreateGuest สร้าง Guest ใหม่ (ไม่มี input, สร้างอัตโนมัติ)
func CreateGuest(c *gin.Context) {
	var guest entity.Guest

	// สร้าง Random ID 10 หลักสำหรับ Guest
	guest.GuestRandomID = generateRandomID()
	guest.DownloadCV = false // default เป็น false
	guest.Like = false       // default เป็น false

	// เชื่อมต่อฐานข้อมูล
	db := config.DB()

	// บันทึกลงฐานข้อมูล
	if err := db.Create(&guest).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create guest"})
		return
	}

	// Response เฉพาะ GuestRandomID เท่านั้น
	c.JSON(http.StatusCreated, gin.H{
		"guest_random_id": guest.GuestRandomID,
	})
}

// GetGuest ดึงข้อมูล Guest ตาม ID
func GetGuest(c *gin.Context) {
	guestID := c.Param("id")

	db := config.DB()
	var guest entity.Guest

	if err := db.First(&guest, guestID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Guest not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"guest": guest,
	})
}

// UpdateGuestDownloadCV อัปเดตสถานะการดาวน์โหลด CV
func UpdateGuestDownloadCV(c *gin.Context) {
	guestID := c.Param("id")

	db := config.DB()
	var guest entity.Guest

	// ค้นหา Guest
	if err := db.First(&guest, guestID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Guest not found"})
		return
	}

	// อัปเดตสถานะการดาวน์โหลด CV
	guest.DownloadCV = true

	if err := db.Save(&guest).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update guest"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Download CV status updated successfully",
		"guest":   guest,
	})
}

// UpdateGuestLike อัปเดตสถานะการไลค์
func UpdateGuestLike(c *gin.Context) {
	guestID := c.Param("id")

	db := config.DB()
	var guest entity.Guest

	// ค้นหา Guest
	if err := db.First(&guest, guestID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Guest not found"})
		return
	}

	// สลับสถานะการไลค์
	guest.Like = !guest.Like

	if err := db.Save(&guest).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update guest"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Like status updated successfully",
		"guest":   guest,
	})
}

// UpdateGuest PATCH อัปเดต Guest ตาม input ที่ส่งมา
func UpdateGuest(c *gin.Context) {
	// รับ input จาก request body
	var updateData struct {
		GuestRandomID string `json:"guest_random_id"`
		DownloadCV    *bool  `json:"downloadcv"` // ใช้ pointer เพื่อแยกแยะระหว่าง false และไม่ได้ส่งมา
		Like          *bool  `json:"like"`       // ใช้ pointer เพื่อแยกแยะระหว่าง false และไม่ได้ส่งมา
	}

	// Bind JSON input
	if err := c.ShouldBindJSON(&updateData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input format"})
		return
	}

	// ตรวจสอบว่าต้องมี guest_random_id
	if updateData.GuestRandomID == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "guest_random_id is required"})
		return
	}

	db := config.DB()
	var guest entity.Guest

	// ค้นหา Guest ตาม guest_random_id
	if err := db.Where("guest_random_id = ?", updateData.GuestRandomID).First(&guest).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Guest not found"})
		return
	}

	// อัปเดตเฉพาะฟิลด์ที่ส่งมา
	if updateData.DownloadCV != nil {
		guest.DownloadCV = *updateData.DownloadCV
	}

	if updateData.Like != nil {
		guest.Like = *updateData.Like
	}

	// บันทึกการเปลี่ยนแปลง
	if err := db.Save(&guest).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update guest"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Guest updated successfully",
		"guest":   guest,
	})
}

// GetAllGuests ดึงข้อมูล Guest ทั้งหมด (สำหรับ Admin)
func GetAllGuests(c *gin.Context) {
	db := config.DB()
	var guests []entity.Guest

	if err := db.Find(&guests).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch guests"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"guests": guests,
		"count":  len(guests),
	})
}

// DeleteGuest ลบ Guest
func DeleteGuest(c *gin.Context) {
	guestID := c.Param("id")

	db := config.DB()

	if err := db.Delete(&entity.Guest{}, guestID).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete guest"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Guest deleted successfully",
	})
}

// generateRandomID สร้าง Random ID 10 หลัก
func generateRandomID() string {
	r := rand.New(rand.NewSource(time.Now().UnixNano()))

	const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	b := make([]byte, 10)

	for i := range b {
		b[i] = charset[r.Intn(len(charset))]
	}

	return string(b)
}

// DownloadCV ดาวน์โหลดไฟล์ CV โดยรับ guest_random_id และอัปเดต DownloadCV เป็น true
func DownloadCV(c *gin.Context) {
	// รับ guest_random_id จาก request body
	var requestData struct {
		GuestRandomID string `json:"guest_random_id"`
	}

	// Bind JSON input
	if err := c.ShouldBindJSON(&requestData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input format"})
		return
	}

	// ตรวจสอบว่าต้องมี guest_random_id
	if requestData.GuestRandomID == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "guest_random_id is required"})
		return
	}

	db := config.DB()
	var guest entity.Guest

	// ค้นหา Guest ตาม guest_random_id
	if err := db.Where("guest_random_id = ?", requestData.GuestRandomID).First(&guest).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Guest not found"})
		return
	}

	// อัปเดตสถานะการดาวน์โหลด CV เป็น true
	guest.DownloadCV = true
	if err := db.Save(&guest).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update download status"})
		return
	}

	// กำหนด path ของไฟล์ CV (ใน Docker container จะอยู่ที่ /root/files/resume/)
	cvFilePath := "./files/resume/CV RESUME.pdf"

	// ตรวจสอบว่าไฟล์มีอยู่จริงหรือไม่
	if !fileExists(cvFilePath) {
		c.JSON(http.StatusNotFound, gin.H{"error": "CV file not found"})
		return
	}

	// ส่งไฟล์กลับไป
	c.Header("Content-Description", "File Transfer")
	c.Header("Content-Transfer-Encoding", "binary")
	c.Header("Content-Disposition", "attachment; filename=CV_Chanchai_Lertsri.pdf")
	c.Header("Content-Type", "application/pdf")
	c.File(cvFilePath)
}

// fileExists ตรวจสอบว่าไฟล์มีอยู่จริงหรือไม่
func fileExists(filename string) bool {
	_, err := os.Stat(filename)
	return !os.IsNotExist(err)
}

// ListAnalytic นับจำนวน Guest ทั้งหมดและจำนวนที่ดาวน์โหลด CV
func ListAnalytic(c *gin.Context) {
	db := config.DB()

	// นับจำนวน Guest ทั้งหมด
	var totalGuests int64
	if err := db.Model(&entity.Guest{}).Count(&totalGuests).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to count total guests"})
		return
	}

	// นับจำนวน Guest ที่ดาวน์โหลด CV (DownloadCV = true)
	var downloadedCVCount int64
	if err := db.Model(&entity.Guest{}).Where("download_cv = ?", true).Count(&downloadedCVCount).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to count downloaded CV"})
		return
	}

	// คำนวณเปอร์เซ็นต์การดาวน์โหลด CV
	var downloadPercentage float64
	if totalGuests > 0 {
		downloadPercentage = float64(downloadedCVCount) / float64(totalGuests) * 100
	}

	// ส่งข้อมูลสถิติกลับไป
	c.JSON(http.StatusOK, gin.H{
		"total_guests":        totalGuests,
		"downloaded_cv_count": downloadedCVCount,
		"download_percentage": downloadPercentage,
		"analytics": gin.H{
			"total_guests":        totalGuests,
			"downloaded_cv_count": downloadedCVCount,
			"download_percentage": downloadPercentage,
		},
	})
}
