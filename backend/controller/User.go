package controller

import (
	"chanchai/config"
	"chanchai/entity"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// GetUsers - Get all users (Admin only)
func GetUsers(c *gin.Context) {
	var users []entity.User

	// Get users with their roles
	if err := config.DB().Preload("Role").Find(&users).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to fetch users"})
		return
	}

	// Convert to response format
	var result []map[string]interface{}
	for _, user := range users {
		userData := map[string]interface{}{
			"ID":        user.ID,
			"FirstName": user.FirstName,
			"LastName":  user.LastName,
			"Email":     user.Email,
			"RoleID":    user.RoleID,
			"Role":      user.Role.Name,
			"CreatedAt": user.CreatedAt,
			"UpdatedAt": user.UpdatedAt,
		}
		result = append(result, userData)
	}

	c.JSON(http.StatusOK, result)
}

// GetUser - Get user by ID (Admin only)
func GetUser(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID"})
		return
	}

	var user entity.User
	if err := config.DB().Preload("Role").First(&user, uint(id)).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	userData := map[string]interface{}{
		"ID":        user.ID,
		"FirstName": user.FirstName,
		"LastName":  user.LastName,
		"Email":     user.Email,
		"RoleID":    user.RoleID,
		"Role":      user.Role.Name,
		"CreatedAt": user.CreatedAt,
		"UpdatedAt": user.UpdatedAt,
	}

	c.JSON(http.StatusOK, userData)
}

// CreateUser - Create new user (Admin only)
func CreateUser(c *gin.Context) {
	var userData struct {
		FirstName string `json:"firstName" binding:"required"`
		LastName  string `json:"lastName" binding:"required"`
		Email     string `json:"email" binding:"required,email"`
		Password  string `json:"password" binding:"required,min=6"`
		RoleID    uint   `json:"roleId" binding:"required"`
	}

	if err := c.ShouldBindJSON(&userData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Check if email already exists
	var existingUser entity.User
	if err := config.DB().Where("email = ?", userData.Email).First(&existingUser).Error; err == nil {
		c.JSON(http.StatusConflict, gin.H{"error": "Email already exists"})
		return
	}

	// Hash password
	hashedPassword, err := config.HashPassword(userData.Password)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}

	// Create user
	user := entity.User{
		FirstName: userData.FirstName,
		LastName:  userData.LastName,
		Email:     userData.Email,
		Password:  hashedPassword,
		RoleID:    userData.RoleID,
	}

	if err := config.DB().Create(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create user"})
		return
	}

	// Load role for response
	config.DB().Preload("Role").First(&user, user.ID)

	response := map[string]interface{}{
		"ID":        user.ID,
		"FirstName": user.FirstName,
		"LastName":  user.LastName,
		"Email":     user.Email,
		"RoleID":    user.RoleID,
		"Role":      user.Role.Name,
		"CreatedAt": user.CreatedAt,
	}

	c.JSON(http.StatusCreated, response)
}

// UpdateUser - Update user (Admin only)
func UpdateUser(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID"})
		return
	}

	var userData struct {
		FirstName string `json:"firstName"`
		LastName  string `json:"lastName"`
		Email     string `json:"email"`
		Password  string `json:"password"`
		RoleID    uint   `json:"roleId"`
	}

	if err := c.ShouldBindJSON(&userData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var user entity.User
	if err := config.DB().First(&user, uint(id)).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	// Update fields if provided
	if userData.FirstName != "" {
		user.FirstName = userData.FirstName
	}
	if userData.LastName != "" {
		user.LastName = userData.LastName
	}
	if userData.Email != "" {
		// Check if email already exists (excluding current user)
		var existingUser entity.User
		if err := config.DB().Where("email = ? AND id != ?", userData.Email, user.ID).First(&existingUser).Error; err == nil {
			c.JSON(http.StatusConflict, gin.H{"error": "Email already exists"})
			return
		}
		user.Email = userData.Email
	}
	if userData.Password != "" {
		hashedPassword, err := config.HashPassword(userData.Password)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
			return
		}
		user.Password = hashedPassword
	}
	if userData.RoleID != 0 {
		user.RoleID = userData.RoleID
	}

	if err := config.DB().Save(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update user"})
		return
	}

	// Load role for response
	config.DB().Preload("Role").First(&user, user.ID)

	response := map[string]interface{}{
		"ID":        user.ID,
		"FirstName": user.FirstName,
		"LastName":  user.LastName,
		"Email":     user.Email,
		"RoleID":    user.RoleID,
		"Role":      user.Role.Name,
		"UpdatedAt": user.UpdatedAt,
	}

	c.JSON(http.StatusOK, response)
}

// DeleteUser - Delete user (Admin only)
func DeleteUser(c *gin.Context) {
	id, err := strconv.ParseUint(c.Param("id"), 10, 32)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid user ID"})
		return
	}

	var user entity.User
	if err := config.DB().First(&user, uint(id)).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	if err := config.DB().Delete(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete user"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "User deleted successfully"})
}

// GetProfile - Get current user profile (Guest and Admin)
func GetProfile(c *gin.Context) {
	userEmail, exists := c.Get("user_email")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "User not authenticated"})
		return
	}

	var user entity.User
	if err := config.DB().Preload("Role").Where("email = ?", userEmail).First(&user).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	userData := map[string]interface{}{
		"ID":        user.ID,
		"FirstName": user.FirstName,
		"LastName":  user.LastName,
		"Email":     user.Email,
		"RoleID":    user.RoleID,
		"Role":      user.Role.Name,
		"CreatedAt": user.CreatedAt,
	}

	c.JSON(http.StatusOK, userData)
}

// UpdateProfile - Update current user profile (Guest and Admin)
func UpdateProfile(c *gin.Context) {
	userEmail, exists := c.Get("user_email")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "User not authenticated"})
		return
	}

	var userData struct {
		FirstName string `json:"firstName"`
		LastName  string `json:"lastName"`
		Email     string `json:"email"`
		Password  string `json:"password"`
	}

	if err := c.ShouldBindJSON(&userData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var user entity.User
	if err := config.DB().Where("email = ?", userEmail).First(&user).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	// Update fields if provided
	if userData.FirstName != "" {
		user.FirstName = userData.FirstName
	}
	if userData.LastName != "" {
		user.LastName = userData.LastName
	}
	if userData.Email != "" {
		// Check if email already exists (excluding current user)
		var existingUser entity.User
		if err := config.DB().Where("email = ? AND id != ?", userData.Email, user.ID).First(&existingUser).Error; err == nil {
			c.JSON(http.StatusConflict, gin.H{"error": "Email already exists"})
			return
		}
		user.Email = userData.Email
	}
	if userData.Password != "" {
		hashedPassword, err := config.HashPassword(userData.Password)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
			return
		}
		user.Password = hashedPassword
	}

	if err := config.DB().Save(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update profile"})
		return
	}

	response := map[string]interface{}{
		"ID":        user.ID,
		"FirstName": user.FirstName,
		"LastName":  user.LastName,
		"Email":     user.Email,
		"RoleID":    user.RoleID,
		"UpdatedAt": user.UpdatedAt,
	}

	c.JSON(http.StatusOK, response)
}
