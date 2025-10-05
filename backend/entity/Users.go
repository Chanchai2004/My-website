package entity

import (
	"time"

	"gorm.io/gorm"
)

// User คือ entity สำหรับผู้ใช้ในระบบ
type User struct {
	gorm.Model

	FirstName       string `valid:"required"`
	LastName        string `valid:"required"`
	Email           string `valid:"email,required"`
	Password        string `valid:"required,password"`


	RoleID        uint
	Role          Role `gorm:"foreignKey:RoleID" valid:"-"`
	
	ResetToken       string
	ResetTokenExpiry time.Time

	
}
