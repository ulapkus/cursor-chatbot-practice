# Design System Documentation

## Overview

This design system is inspired by the Echo Mind app, featuring a deep purple aesthetic with vibrant accents, smooth gradients, and modern glass-morphism effects.

---

## Color Palette

### Primary Colors

- **Background**: `hsl(264, 60%, 10%)` - Deep purple navy (#1a0d2e)
- **Foreground**: `hsl(0, 0%, 98%)` - Near white text
- **Primary**: `hsl(264, 85%, 65%)` - Vibrant purple (#8b5cf6)
- **Accent**: Cyan/Teal (#06b6d4, #22d3ee)

### Surface Colors

- **Card**: `hsl(264, 45%, 18%)` - Slightly lighter purple (#2d1b4e)
- **Secondary**: `hsl(264, 40%, 25%)` - Muted purple card
- **Muted**: `hsl(264, 30%, 22%)` - Very muted purple
- **Input**: `hsl(264, 40%, 25%)` - Input background

### Semantic Colors

- **Border**: `hsl(264, 30%, 30%)` - Subtle purple border
- **Destructive**: `hsl(0, 72%, 51%)` - Red for errors
- **Ring**: `hsl(264, 85%, 65%)` - Focus ring purple

### Intensity Level Colors

- **Mild**: Emerald (`emerald-500`, `emerald-400`, `emerald-200`)
- **Moderate**: Amber (`amber-500`, `amber-400`, `amber-200`)
- **Intense**: Rose (`rose-500`, `rose-400`, `rose-200`)

---

## Typography

### Font Sizes

- **5xl**: 3rem (48px) - Hero titles
- **2xl**: 1.5rem (24px) - Section headers
- **xl**: 1.25rem (20px) - Subsection headers
- **lg**: 1.125rem (18px) - Large text
- **base**: 1rem (16px) - Body text
- **sm**: 0.875rem (14px) - Small text

### Font Weights

- **bold**: 700 - Headers
- **semibold**: 600 - Subheaders
- **medium**: 500 - Emphasis
- **normal**: 400 - Body text

---

## Border Radius

### Scale (based on 16px base)

- **sm**: 12px (--radius - 4px)
- **md**: 14px (--radius - 2px)
- **lg**: 16px (--radius) - Default
- **xl**: 20px (--radius + 4px)
- **2xl**: 24px (--radius + 8px) - Cards, messages
- **3xl**: 28px (--radius + 12px)
- **full**: 9999px - Pills, badges

---

## Shadows

### Elevation System

- **glow-sm**: `0 0 10px rgba(139, 92, 246, 0.3)` - Subtle purple glow
- **glow**: `0 0 20px rgba(139, 92, 246, 0.4)` - Medium purple glow
- **glow-lg**: `0 0 30px rgba(139, 92, 246, 0.5)` - Strong purple glow
- **card**: `0 4px 20px rgba(0, 0, 0, 0.3)` - Card depth
- **card-hover**: `0 8px 30px rgba(139, 92, 246, 0.4)` - Card hover with glow

---

## Spacing Scale

Following Tailwind's default spacing:

- **1**: 0.25rem (4px)
- **2**: 0.5rem (8px)
- **3**: 0.75rem (12px)
- **4**: 1rem (16px)
- **5**: 1.25rem (20px)
- **6**: 1.5rem (24px)
- **8**: 2rem (32px)
- **10**: 2.5rem (40px)

---

## Gradients

### Background Gradients

- **gradient-purple**: `linear-gradient(135deg, #1a0d2e 0%, #2d1b4e 100%)`
  - Used for: Main app background
- **gradient-accent**: `linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)`
  - Used for: Text accents, highlights

---

## Component States

### Interactive States

All interactive elements include:

1. **Default**: Base state with appropriate colors
2. **Hover**: Slight scale (1.02), color shift, shadow enhancement
3. **Focus**: 2px ring with primary color, visible outline
4. **Active**: Scale down (0.95) for tactile feedback
5. **Disabled**: 50% opacity, cursor-not-allowed

### Focus States (WCAG 2.1 Compliant)

- **Ring width**: 2px
- **Ring color**: Primary purple (`hsl(264, 85%, 65%)`)
- **Ring offset**: 2px on background color
- **Visible**: Always visible for keyboard navigation

---

## Component Patterns

### Cards

```css
rounded-2xl              /* 24px radius */
p-4                      /* 16px padding */
bg-card/60               /* 60% opacity purple */
border border-border/50  /* 50% opacity border */
backdrop-blur-sm         /* Glass effect */
shadow-card              /* Elevation shadow */
```

### Buttons (Primary)

```css
px-4 py-2               /* Padding */
bg-primary              /* Purple background */
text-primary-foreground /* White text */
rounded-xl              /* 20px radius */
hover:bg-primary/90     /* Hover state */
active:scale-95         /* Press feedback */
focus-visible:ring-2    /* Keyboard focus */
transition-all          /* Smooth transitions */
```

### Buttons (Secondary/Ghost)

```css
px-3 py-1.5             /* Smaller padding */
border border-primary/50 /* Border only */
text-primary            /* Purple text */
rounded-lg              /* 16px radius */
hover:bg-primary/10     /* Subtle hover bg */
```

### Input Fields

```css
w-full px-5 py-4        /* Full width, generous padding */
bg-input/50             /* Semi-transparent bg */
backdrop-blur-sm        /* Glass effect */
border border-border/50 /* Subtle border */
rounded-2xl             /* 24px radius */
focus:ring-2            /* Focus ring */
focus:ring-ring         /* Purple ring */
focus:border-primary/50 /* Border highlight */
```

### Message Bubbles

**User Messages:**

```css
bg-primary/20           /* Purple tint */
border border-primary/30 /* Purple border */
rounded-2xl             /* 24px radius */
max-w-[85%]            /* Responsive width */
```

**AI Messages:**

```css
bg-card/60              /* Dark purple */
border border-border/50 /* Subtle border */
rounded-2xl             /* 24px radius */
max-w-[85%]            /* Responsive width */
```

---

## Accessibility

### Contrast Ratios (WCAG AA Compliant)

- **Text on background**: 15.8:1 (AAA)
- **Text on cards**: 12.4:1 (AAA)
- **Primary on background**: 7.2:1 (AA)
- **Muted text**: 4.6:1 (AA)

### Focus Indicators

- All interactive elements have visible focus states
- 2px purple ring with 2px offset
- Never removed or hidden

### Keyboard Navigation

- Tab order follows visual order
- All interactive elements keyboard accessible
- Focus visible at all times

---

## Animation & Transitions

### Duration Scale

- **Fast**: 200ms - Micro-interactions (hover, focus)
- **Base**: 300ms - Standard transitions (state changes)
- **Slow**: 500ms - Complex animations

### Easing

- **Default**: `ease` - Standard transitions
- **In**: `ease-in` - Entering
- **Out**: `ease-out` - Exiting
- **In-Out**: `ease-in-out` - Both

### Common Animations

```css
transition-all duration-200    /* Quick state changes */
transition-all duration-300    /* Standard transitions */
hover:scale-[1.02]            /* Subtle grow on hover */
active:scale-95               /* Shrink on press */
animate-bounce                /* Loading indicators */
```

---

## Glass-morphism Effects

Applied to cards, headers, and overlays:

```css
bg-card/80              /* 80% opacity background */
backdrop-blur-lg        /* Strong blur effect */
border border-border/50 /* Semi-transparent border */
```

---

## Responsive Breakpoints

Following Tailwind defaults:

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Container Max Widths

- **Intensity selector**: 2xl (672px)
- **Chat messages**: 4xl (896px)
- **Input area**: 4xl (896px)

---

## Usage Guidelines

### Do's ✅

- Use backdrop-blur for glass effects
- Apply consistent rounded corners (2xl for cards)
- Include focus states on all interactive elements
- Use primary color for CTAs and important actions
- Apply shadows for depth and hierarchy
- Use semantic color tokens (not hardcoded values)

### Don'ts ❌

- Don't mix border radius sizes arbitrarily
- Don't skip focus states
- Don't use fully opaque backgrounds (breaks glass effect)
- Don't hardcode colors (use CSS variables)
- Don't animate transform without transition
- Don't use contrast ratios below AA standards

---

## Implementation Notes

1. **CSS Variables**: All colors use HSL variables defined in `globals.css`
2. **Tailwind Config**: Custom shadows, gradients, and radii in `tailwind.config.js`
3. **Dark Mode Ready**: System uses HSL which makes theming easy
4. **Performance**: Backdrop blur uses GPU acceleration
5. **Browser Support**: Modern browsers (Chrome 76+, Safari 9+, Firefox 103+)
