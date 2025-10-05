// Authentication utility functions

export const getRole = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('role');
  }
  return null;
}

export const isAdmin = (): boolean => getRole() === 'Admin'
export const isGuest = (): boolean => getRole() === 'Guest'

export const isLoggedIn = (): boolean => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('isLogin') === 'true';
  }
  return false;
}

export const getUser = () => {
  if (typeof window !== 'undefined') {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }
  return null;
}

export const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
}
