# PHARMORIS Dashboard

A production-grade single-page dashboard interface for a pharmaceutical intelligence platform built with Next.js, TypeScript, Tailwind CSS, and ShadCN.

## Project Architecture

- `app/`
  - `page.tsx` -> redirects to `/dashboard`
  - `dashboard/page.tsx` -> main dashboard page with all sections
- `components/`
  - `Header.tsx` -> sticky navigation bar with mobile menu
  - `KPICard.tsx` -> animated KPI metric cards (Framer Motion)
  - `DataTable.tsx` -> sortable medicine supply table (responsive, accessible)
  - `ChartSection.tsx` -> Recharts line chart
- `data/mockData.ts` -> mock dataset for KPIs, table rows, chart
- `types/index.ts` -> strongly typed interfaces (`KPIData`, `DrugData`, `ChartDataPoint`)
- `app/globals.css` -> Tailwind base styling and accessible focus states

## Feature Highlights

- Sticky header with responsive hamburger menu
- 4 KPI cards (desktop 4x1, tablet 2x2, mobile 1x4)
- Sortable table with status color badges and stable accessible design
- Animated responsive LineChart (cost savings over time)
- Framer Motion micro-animations (card entry, chart section load)
- Keyboard navigation and focus states
- Clean corporate/pharma UI (slate/blue palette)

## Performance Choices

- React `useMemo` for sorting in `DataTable`
- Component composition for reusability
- Avoids `any`; uses explicit types
- Client boundaries (`use client`) only where interactivity is needed
- Responsive layout with Tailwind grid utilities

## Animation Decisions

- `KPICard`: subtle `y` + `opacity` entry animation and hover elevation
- `ChartSection`: smooth fade-in + vertical slide
- `DataTable` & Nav: unified hover/active effects
- Motion design is minimal/conservative for professional look

## Optional Enhancements Included

- Responsive table wrapper with horizontal scroll
- Sticky header + table header
- Example alert feed
- Dark mode support via CSS variables (optional by toggling `.dark` class on `<html>`)

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open `http://localhost:3000`

4. Build production:

```bash
npm run build && npm run start
```

## Deploy to Vercel

1. Push repo to GitHub.
2. Go to https://vercel.com/new and import repository.
3. Ensure `Framework Preset` is `Next.js`.
4. Set build command `npm run build` and output directory `.` (default).
5. Deploy.

## File Structure

```
app/
  dashboard/page.tsx
  layout.tsx
  page.tsx
  globals.css
components/
  Header.tsx
  KPICard.tsx
  DataTable.tsx
  ChartSection.tsx
data/
  mockData.ts
/types/
  index.ts
README.md
package.json
```


