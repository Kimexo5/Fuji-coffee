# Fuji Coffee

A minimalist, single-page coffee shop site with a delivery-order cart for milkshakes, coffee and cheesecake.

## Preview

Open `index.html` directly in a browser, or serve the folder locally:

```powershell
cd fuji-coffee
python -m http.server 8000
```

Then visit <http://localhost:8000>.

No build step, no dependencies. Google Fonts loads Instrument Serif and Inter; system serif/sans fallbacks are used offline.

## What's included

- Two-second intro animation: sun, Mount Fuji, cloud and seigaiha waves assemble, then crossfade into `images/Logo.png`
  - Click or tap anywhere to skip, or press Escape / Enter / Space
  - Plays once per browser session (`sessionStorage`, key `fujiSplashSeen`)
- Logo in the header, with the same mountain/sun/cloud/wave motifs used across the page
- Filterable menu (All / Milkshakes / Frappuccinos / Coffee / Other drinks / Cheesecakes) with 31 items in DA
- “Manage availability” mode with a switch on every card, so items that run out can be marked sold out for the day
  - Sold-out cards show a badge and lose their add button; adding them is blocked
  - Marking an item sold out also removes it from the current order
  - Availability persists in `localStorage` (key `fuji-availability-v1`); everything is available by default
- Automatic shop open/closed status, with a banner and ordering lock
  - Ordering closes by itself at **8:00 PM shop time** (`Africa/Algiers`), independent of the visitor's device clock
  - The owner can also close or reopen the shop at any time from the admin area
  - While closed, the menu stays browsable but add-to-cart and checkout are disabled
- Portrait menu photos in a 4:5 frame, shown uncropped with a paper border, and a “photo coming soon” fallback for missing files
- Slide-out cart with quantity steppers, line removal, subtotal and total
- Customer name, phone number, delivery time and optional order notes
- Mock checkout with order number and delivery estimate
- Cart persists in `localStorage`, so a refresh doesn't lose the order
- Responsive layout (3 / 2 / 1 columns), keyboard/focus handling, reduced-motion support

## Menu layout

| Group | Items | Price range |
| --- | --- | --- |
| Milkshakes | 5 | 400–450 DA |
| Frappuccinos | 3 | 400 DA |
| Coffee | 5 | 50–250 DA |
| Other Beverages | 2 | 250–300 DA |
| Cheesecakes & Pastries | 16 | 180–800 DA |

## Marking items sold out

Click **Manage availability** above the menu to reveal a switch on every card. Turn a switch off to mark that item sold out for the day; turn it back on when it returns. Click **Done editing** to hide the switches again.

- Sold-out cards show a “Sold out” badge, fade their photo and hide the add button.
- If a sold-out item was already in an order, it is removed and a toast confirms it.
- The cart is also pruned of sold-out items when the page loads.

Availability is cached in the browser (`fuji-availability-v1`) and synced to the shared backend (Google Sheets via `/api/availability`), so marking an item unavailable reaches every customer — not just the browser where it was set. Without a deployed backend the switches still work locally.

## Shop open / closed

The site tracks whether the shop is taking orders and shows a full-width banner when it isn't.

- **Automatic closing.** At **8:00 PM shop time** (`Africa/Algiers`) ordering is paused automatically. The check runs on load, every minute, and whenever the tab regains focus. There is **no automatic re-opening** — once closed, the shop stays closed until the owner opens it.
- **Manual control.** In **Manage availability** mode the owner also sees a **Close shop** / **Open shop** button. Closing pauses ordering immediately; opening resumes it. Opening *after* 8 PM keeps the shop open for the rest of that night, and opening *before* 8 PM still lets the 8 PM rule close it as usual.
- **What customers see.** The menu stays fully browsable, but add-to-cart and the checkout button are disabled, and the banner and cart note explain that ordering is paused.

State is kept in `localStorage` (key `fuji-shop-v1`) as `{ closed, autoClosedOn }`, where `autoClosedOn` records the last day the 8 PM rule fired so it only fires once per day. The owner's manual open/close is also **shared with everyone** through the backend, so a toggle reaches all customers within about a minute (and immediately on their next page load); the 8 PM auto-close needs no backend because every visitor's browser runs the same rule against Algiers time.

## Images

Menu photos live in `images/`. The file name in each `MENU` entry must match the file on disk exactly, including spaces and capitalisation. Missing images fall back to a generated placeholder, so the layout never breaks.

`San Sebastian Cheesecake 2.png` is included but not used by the menu.

The tall 9:16 photos (Chocolate Milkshake, Strawberry Milkshake, Blackberry Cheesecake, Strawberry Cheesecake, Mango Milkshake, Raspberry Cheesecake, Brownies) are cropped to a 4:5 ratio so they fill the card frame. `Brownies.png` was a screenshot; its black bars were removed and the photo was cropped to the brownie. The chocolate, caramel and vanilla frappuccinos reuse the matching milkshake photos. Every menu item now has a photo. Originals are backed up in `fuji-coffee-originals/`.

## Customize

| What | Where |
| --- | --- |
| Menu items, descriptions, prices, image paths | `MENU` and `GROUPS` in `app.js` |
| Address, hours, email, social links | `index.html` → `#visit` (address and Instagram are placeholders) |
| Colors, fonts, spacing, splash timing | CSS variables and `.splash` rules in `styles.css` |
| Cart storage key | `STORAGE_KEY` in `app.js` |
| Availability storage key and defaults | `AVAILABILITY_KEY` and `loadAvailability()` in `app.js` |
| Shop closing time and timezone | `CLOSE_HOUR` and `SHOP_TZ` in `app.js` |
| Shop state storage key | `SHOP_KEY` in `app.js` |

## Deploy to Vercel (orders + availability)

1. Push this folder to a GitHub repository (already done: `Kimexo5/Fuji-coffee`).
2. Go to **vercel.com → Add New → Project** → import the repo. Framework preset: **Other**. Build command: none. Output directory: `.` (or leave default). Vercel auto-detects `api/` as serverless functions.
3. In **Project Settings → Environment Variables**, add:
   - `APPS_SCRIPT_URL` = your Google Apps Script web app URL (the one ending in `/exec`)
   - `ADMIN_PASSPHRASE` = `0123` (or your own)
4. In your Google Sheet's Apps Script, set the script property `ADMIN_PASSPHRASE` = `0123` (Project Settings → Script Properties). Replace the script code with [`google-apps-script.gs`](google-apps-script.gs) from this repo (it handles orders, availability and the shop open/closed status).
5. Deploy. Vercel builds automatically on every push to `main`.

Orders go to Google Sheets + email (via Apps Script). Availability and the shop open/closed status are stored in an "Availability" sheet tab — cell `A1` holds the item map, cell `A2` holds `{ closed, autoClosedOn }` — and synced through `/api/availability`.

Local test: `npm install` then `npx vercel dev` (reads `.env` with `APPS_SCRIPT_URL` and `ADMIN_PASSPHRASE`).

## Note on checkout

The checkout validates the form, calculates totals, shows a confirmation with an order number and clears the cart. Placing an order POSTs to the Google Apps Script web app (via the shared webhook), which records it in the sheet and sends a notification email. Order numbers are randomly generated (`#FJ-0000`).

When the shop is closed, the checkout button is disabled and submitting is blocked with a toast, so no order is sent.
