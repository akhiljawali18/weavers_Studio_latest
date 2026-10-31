# Commented-out code: missing main-site files

## The issue

Opening `/sarong-to-sari/programme` failed with:

```
Module not found: Can't resolve '@/app/api/home/route'
```

Parts of this microsite were copied from the main Weavers Studio site and still
import code that only exists there. Once the dev server hits the error, **every
page returns 500** (home, voices, the journey, and so on) until the server is
restarted. That is why the whole site looked broken, not just the programme page.

## The fix (for now)

Every line that needs main-site code is commented out, not deleted. The programme
pages show the microsite's "page not found"; all other pages work as normal.

The files the main site has and this repo does not:

| Missing file | Needed for |
| --- | --- |
| `app/api/home/route.ts` | Loading tickets and events from the CMS (`GET_ALL_ITEMS`, `GET_ITEM`, `GET_SEO_DATA`), and the cart (`ADD_TO_CART`, `GET_CART`, `UPDATE_CART`) |
| `app/common/hooks/createGuestUser.ts` | Booking tickets without an account |
| `app/common/hooks/useGetBuyingType.ts` | Booking tickets |
| `Reducers/NavbarReducer.ts`, `Reducers/UserReducer.ts` | The cart count and logged-in user (Redux) |
| `app/components/shared/Image.tsx` | Event photographs |
| `app/components/layout/header/ActionButtons.tsx` | The cart / account buttons in the header |
| `app/components/layout/sidebar.tsx` | The main site's sidebar |

## What was commented, file by file

Line numbers are as of this note. Paths are from the project root.

### 1. `app/sarong-to-sari/programme/page.tsx` (programme list)

| Lines | What is commented | Needs |
| --- | --- | --- |
| 5–6 | Imports of `MicrositeProgrammePage` and `GET_ALL_ITEMS` | `app/api/home/route.ts` |
| 17–28 | Fetching the active tickets and rendering the list | `app/api/home/route.ts` |

Line 15, `notFound();`, was **added** so the page shows "page not found" for now.

### 2. `app/sarong-to-sari/programme/[slug]/page.tsx` (single event page)

| Lines | What is commented | Needs |
| --- | --- | --- |
| 5–6 | Imports of `GET_ITEM`, `GET_SEO_DATA` and `MicrositeProgrammeEventPage` | `app/api/home/route.ts` |
| 18–35 | `generateMetadata`, the page title and SEO data from the CMS | `app/api/home/route.ts` |
| 41–55 | Fetching the event by its slug and rendering it | `app/api/home/route.ts` |

**Added** for now: the fixed `metadata` at lines 12–16, the `eslint-disable` comment
at line 37, and `notFound();` at line 39. Remove these when you uncomment the code above.

### 3. `app/components/sarong-to-sari/pages/ProgrammeEventPage.tsx` (event page layout)

| Lines | What is commented | Needs |
| --- | --- | --- |
| 6 | `import TicketPicker` | `TicketPicker` uses all of the API, hooks and reducers above |
| 11 | `import Image from "../../shared/Image"` | `app/components/shared/Image.tsx` |
| 66–70 | Event photograph on phones | `shared/Image` |
| 81–85 | Event photograph on desktop | `shared/Image` |
| 129 | `<TicketPicker … />`, the ticket booking box | `TicketPicker` |

`components/programme/TicketPicker.tsx` itself is **not** commented. It is simply not
imported, so it does no harm. Its lines 7–11 are the imports that need the missing files.

### 4. `app/components/sarong-to-sari/components/MicrositeHeader.tsx` (header)

| Lines | What is commented | Needs |
| --- | --- | --- |
| 13 | `import ActionButtons` | `layout/header/ActionButtons.tsx` |
| 80 | Reading the `Navbar` state from Redux | Redux store + `NavbarReducer` |
| 101–103 | `bagCount`, the number shown on the cart | Redux store + `NavbarReducer` |
| 145 | `<ActionButtons bagCount={bagCount} />`, the cart / account buttons | `ActionButtons` |

### 5. `app/components/sarong-to-sari/layouts/MicrositeLayout.tsx` (page shell)

| Lines | What is commented | Needs |
| --- | --- | --- |
| 5 | `import Sidebar` | `app/components/layout/sidebar.tsx` |
| 17 | `<Sidebar skip={["sidebar"]} />` | `sidebar` |

## Turning it all back on

1. Copy the missing files above from the main site into the same paths here, along
   with anything they import (for example the Redux store and its provider).
2. Uncomment the lines listed for each file, and remove the lines marked **added**.
3. Restart `npm run dev` and check `/sarong-to-sari/programme` and one event page.
