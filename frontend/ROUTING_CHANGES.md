# Routing Changes - Temporary Login Disable

## Changes Made

### 1. Middleware Update (`src/middleware.ts`)
- **Before**: Redirected unauthenticated users to `/login`
- **After**: All routes redirect to `/` (Home page)
- **Purpose**: Disable login functionality temporarily

### 2. Home Page Update (`src/pages/Home.tsx`)
- **Before**: "Get Access" button redirected to `/login`
- **After**: Button is disabled with "Coming Soon" message
- **Purpose**: Prevent users from accessing login page

## Current Behavior

1. **Any URL** → Redirects to Home page (`/`)
2. **Home page** → Shows portfolio in Guest mode
3. **Get Access button** → Disabled with alert message
4. **Login page** → Not accessible (redirects to Home)

## To Re-enable Login

1. Revert `src/middleware.ts` to original authentication logic
2. Update "Get Access" button in `src/pages/Home.tsx` to redirect to `/login`
3. Remove disabled state and "Coming Soon" text

## Files Modified

- `src/middleware.ts` - Routing logic
- `src/pages/Home.tsx` - Button behavior
- `src/app/login/page.tsx` - Still exists but not accessible

## Notes

- Login functionality is preserved but not accessible
- All existing code remains intact
- Easy to re-enable when needed
