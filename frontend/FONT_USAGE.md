# Font Usage Guide

## Fonts Installed
- **Lato**: Modern sans-serif font for English text
- **Noto Sans Thai**: Beautiful Thai font supporting all Thai characters

## Default Font Stack
```css
font-family: Lato, Noto Sans Thai, system-ui, -apple-system, sans-serif;
```

## How to Use

### 1. Default (No class needed)
All text will automatically use the Lato/Noto Sans Thai font stack.

### 2. Lato Font Classes

#### Regular Styles:
```html
<!-- Thin (100) -->
<div className="lato-thin">Thin text</div>

<!-- Light (300) -->
<div className="lato-light">Light text</div>

<!-- Regular (400) - Default -->
<div className="lato-regular">Regular text</div>

<!-- Bold (700) -->
<div className="lato-bold">Bold text</div>

<!-- Black (900) -->
<div className="lato-black">Black text</div>
```

#### Italic Styles:
```html
<div className="lato-thin-italic">Thin italic text</div>
<div className="lato-light-italic">Light italic text</div>
<div className="lato-regular-italic">Regular italic text</div>
<div className="lato-bold-italic">Bold italic text</div>
<div className="lato-black-italic">Black italic text</div>
```

### 3. Noto Sans Thai Font Classes

```html
<!-- Thin (100) -->
<div className="noto-sans-thai-thin">บาง</div>

<!-- Extra Light (200) -->
<div className="noto-sans-thai-extralight">บางพิเศษ</div>

<!-- Light (300) -->
<div className="noto-sans-thai-light">บาง</div>

<!-- Regular (400) - Default -->
<div className="noto-sans-thai-regular">ปกติ</div>

<!-- Medium (500) -->
<div className="noto-sans-thai-medium">กลาง</div>

<!-- Semi Bold (600) -->
<div className="noto-sans-thai-semibold">หนาพอสมควร</div>

<!-- Bold (700) -->
<div className="noto-sans-thai-bold">หนา</div>

<!-- Extra Bold (800) -->
<div className="noto-sans-thai-extrabold">หนาพิเศษ</div>

<!-- Black (900) -->
<div className="noto-sans-thai-black">หนามาก</div>
```

### 4. Using with Tailwind Classes

You can combine with Tailwind's font-weight utilities:

```html
<!-- Using Tailwind utilities (will use default font) -->
<h1 className="font-thin">Heading</h1>
<h2 className="font-light">Heading</h2>
<h3 className="font-normal">Heading</h3>
<h4 className="font-bold">Heading</h4>
<h5 className="font-black">Heading</h5>

<!-- Or use custom classes for explicit font control -->
<h1 className="lato-black text-4xl">Heading</h1>
<p className="noto-sans-thai-regular">เนื้อหาภาษาไทย</p>
```

### 5. Examples

```tsx
// English content
<div className="lato-bold text-2xl">
  Welcome to My Website
</div>

// Thai content
<div className="noto-sans-thai-medium text-xl">
  ยินดีต้อนรับสู่เว็บไซต์ของฉัน
</div>

// Mixed content (will auto-detect)
<div className="font-normal">
  Welcome ยินดีต้อนรับ
</div>

// Italic style
<div className="lato-bold-italic">
  Emphasized text in italic
</div>
```

## Technical Details

### Font Loading
- Fonts are loaded via Next.js font optimization
- Uses `font-display: swap` for better performance
- Preconnects to Google Fonts for faster loading

### Font Variables
Available CSS variables:
```css
--font-lato
--font-noto-sans-thai
```

### Performance
- Both fonts are optimized by Next.js
- Subset loading for better performance
- Variable font for Noto Sans Thai (smaller file size)

