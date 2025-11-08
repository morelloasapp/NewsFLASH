# Design Guidelines: Modern Romanian News Website

## Design Approach

**Reference-Based Approach**: This project draws primary inspiration from **Fox News** for overall structure and layout patterns, combined with **golazo.com's** dramatic hero presentation style. The design balances authoritative news presentation with modern, visually engaging elements.

### Key Design Principles
- **Visual Hierarchy**: Bold, immediate impact with clear content prioritization
- **Information Density**: Efficient news presentation without overwhelming users
- **Fluidity**: Smooth transitions and modern effects throughout
- **Trustworthiness**: Professional layout that conveys credibility

---

## Typography System

### Font Families
- **Primary**: "Poppins" for headings and UI elements (weights: 400, 600, 700, 900)
- **Secondary**: "Roboto Condensed" for article text and descriptions (weights: 300, 400, 700)
- **Implementation**: Google Fonts CDN

### Type Scale
- **Hero Title**: 3.5rem (desktop) / 2rem (mobile), Poppins Bold (700), with text-shadow for mobile
- **Section Headlines**: 2.25rem (desktop) / 1.5rem (mobile), Poppins SemiBold (600)
- **Article Titles**: 1.5rem (desktop) / 1.25rem (mobile), Poppins Medium (600)
- **Body Text**: 1rem, Roboto Condensed Regular (400), line-height 1.6
- **Metadata** (dates, authors): 0.875rem, Roboto Condensed Light (300)
- **Navigation**: 0.95rem, Poppins Medium (600), uppercase tracking

---

## Layout System

### Spacing Units
Use Tailwind spacing with consistent rhythm: **4, 6, 8, 12, 16, 20, 24, 32** units
- Component internal padding: 4-8 units
- Section spacing: 16-24 units
- Page margins: 20-32 units

### Grid Structure

**Desktop Layout** (Fox News inspired):
- Container: max-w-7xl with px-6
- Main content area: 8/12 columns (66%)
- Sidebar: 4/12 columns (33%)
- Article grids: 3-column for category sections

**Mobile Layout**:
- Full-width content stack
- Single column flow
- Generous padding (px-4)

### Header Specifications
- **Height**: 80px (desktop) / 64px (mobile)
- **Position**: Sticky with backdrop-blur-md
- **Background**: Navy blue at 85% opacity
- **Layout**: 
  - Logo: Left-aligned, max-height 50px
  - Navigation: Right-aligned horizontal menu (desktop) / hamburger (mobile)
  - Search bar: Integrated within navigation, expandable on click
  - Donate button: Heart icon (Heroicons) with yellow border (2px), text "Donează", positioned before navigation items

---

## Component Library

### Hero Section (Main Story - golazo.com style)

**Desktop**:
- Full-width container with aspect ratio 21:9
- Large background image with gradient overlay (navy blue to transparent, bottom to top)
- Content positioned in lower third: title, description, "Citește mai mult" button
- Subtle parallax scroll effect on image

**Mobile**:
- Carousel with auto-advance (5 seconds per slide)
- Full-viewport-height image display
- Title overlay with prominent drop-shadow (shadow-2xl equivalent)
- Description below image in card format
- Animated arrow button with bounce animation
- Swipe gestures enabled

### Article Cards

**Grid Cards** (category sections):
- Image: 16:9 aspect ratio, object-cover
- Category tag: Small pill badge (top-left corner overlay)
- Title: 2 lines max with ellipsis
- Metadata: Date + author in small text
- Hover: Subtle lift effect (transform scale 1.02) and shadow increase

**List Cards** (sidebar/mobile):
- Horizontal layout: thumbnail (4:3 ratio) + text content
- Compact spacing
- Border-bottom separator between items

### YouTube Video Embed
- Responsive 16:9 aspect ratio container
- Centered on page between main story and secondary news
- Max-width: 900px
- Shadow effect for depth

### Live Updates Timeline
- Vertical checkpoint design with connecting line
- Each update: timestamp (bold), description text
- Circle markers on timeline
- Latest update highlighted with accent treatment
- Scrollable container if updates exceed viewport

### Floating WhatsApp Button
- Position: fixed bottom-right (bottom-6 right-6)
- Size: 64px circle
- WhatsApp green background (#25D366)
- Icon: WhatsApp logo (Font Awesome)
- Shadow: large drop shadow
- Hover: Slight scale animation (1.1x)
- Z-index: 50

### Navigation Menu (Drag & Drop)
**Desktop**:
- Horizontal list with gap-6
- Each item: clickable link with hover underline animation
- Drag handles visible on hover (subtle grab cursor)
- Active category: underline indicator
- Search icon: triggers expandable search input

**Mobile**:
- Hamburger menu icon (Heroicons)
- Slide-in drawer from right
- Full-height overlay
- Vertical list with large touch targets (min-height: 48px)
- Drag reorder with visual feedback

### Donate Button Specifications
- Icon: Heart outline (Heroicons)
- Border: 2px solid yellow (#FFD700)
- Text: "Donează" in Poppins Medium
- Padding: px-4 py-2
- Hover: Background fill yellow with navy text transition

---

## Animations & Transitions

### Global Transitions
- Standard duration: 300ms
- Easing: ease-in-out
- Apply to: hover states, menu toggles, card interactions

### Specific Effects
- **Hero Carousel**: Crossfade transition between slides (1s duration)
- **Scroll Reveals**: Fade-up animation for articles as they enter viewport
- **Menu Drawer**: Slide transition with backdrop fade
- **Buttons**: Scale on active state (0.95x)
- **Drop Shadow Effects**: Apply to mobile hero title text for readability

---

## Page Layouts

### Homepage Structure
1. Sticky Header
2. Hero Section (main story with carousel)
3. YouTube Video Embed (centered, full-width container)
4. Constanța County News Section
   - Featured article with large image
   - Live Updates Timeline below
5. Category Grid Sections (repeat pattern)
   - Section header with category name
   - 3-column grid of article cards (desktop) / stack (mobile)
6. Sidebar (desktop only, runs alongside grids)
   - "Trending" widget
   - Category quick links
   - Ad placement areas
7. Footer (minimal, links and copyright)

### Article Page Structure
- Breadcrumb navigation
- Hero image (16:9, full-width)
- Article title + metadata (date, author)
- Article body (max-width: 65ch for readability)
- Related articles grid (3 cards)
- Social share buttons (sticky on desktop, inline on mobile)

---

## Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile-Specific Adaptations
- Stack all multi-column layouts
- Enlarge touch targets (min 44x44px)
- Simplify navigation to drawer
- Prioritize vertical scroll over horizontal
- Reduce text sizes proportionally
- Enable swipe gestures for carousals and image galleries

---

## Images

### Image Requirements

**Hero Section**:
- **Quantity**: 3-5 rotating images for carousel
- **Dimensions**: 1920x810px (21:9 ratio)
- **Content**: Dramatic news photography - breaking news scenes, local events, impactful moments
- **Treatment**: Apply subtle vignette overlay for text readability
- **Placement**: Full-width background of hero section

**Article Cards**:
- **Dimensions**: 800x450px (16:9 ratio)
- **Content**: Relevant news imagery - match article topic
- **Treatment**: Consistent cropping and quality

**Category Section Headers**:
- Optional background patterns or textures in navy blue tones

**Sidebar/Trending**:
- Thumbnail images: 300x225px (4:3 ratio)

---

## Admin Panel Design

### Dashboard Layout
- **Sidebar Navigation**: Fixed left sidebar (240px width)
  - Logo at top
  - Menu items: Dashboard, Articles, Categories, Settings, Logout
  - Icons from Heroicons
- **Main Content Area**: Right-side workspace
  - Top bar: Page title + user profile
  - Content cards with shadows and rounded corners
  - Data tables with modern styling

### Article Editor
- **Layout**: Two-column (desktop) - form inputs left, preview right
- **Form Elements**: 
  - Large textarea for article body
  - Image upload with drag-drop zone
  - Category dropdown with multi-select
  - Toggle switches for featured/published status
- **Action Buttons**: Save, Preview, Publish (prominent CTAs)

### Drag & Drop Interface
- Visual grab handles (6-dot grid icon)
- Highlight drop zones
- Smooth reordering animations
- Save confirmation toast notification

This design creates a modern, authoritative news platform with engaging visual elements while maintaining professional credibility and excellent mobile usability.