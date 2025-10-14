package entity

import (
	"gorm.io/gorm"
)

// Guest คือ entity สำหรับผู้เยี่ยมชมเว็บไซต์
type Guest struct {
	gorm.Model

	// GuestRandomID เป็น Random ID 10 หลักที่สร้างขึ้นสำหรับผู้เยี่ยมชมแต่ละคน
	GuestRandomID string `json:"guest_random_id" gorm:"type:varchar(10);uniqueIndex"`

	// DownloadCV เป็น boolean ที่เก็บสถานะการดาวน์โหลด CV
	DownloadCV bool `json:"downloadcv" gorm:"default:false"`

	// Like เป็น boolean ที่เก็บสถานะการกดไลค์
	Like bool `json:"like" gorm:"default:false"`
}
