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

Availability is stored in the browser (`fuji-availability-v1`), so it survives refreshes but **only in the browser where it was set**. Customers on other devices see the defaults (everything available). For availability that all customers see, the switches need to write to a shared backend or a data file — the same caveat as the mock checkout below.

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

## Deploy to Vercel (orders + availability)

1. Push this folder to a GitHub repository (already done: `Kimexo5/Fuji-coffee`).
2. Go to **vercel.com → Add New → Project** → import the repo. Framework preset: **Other**. Build command: none. Output directory: `.` (or leave default). Vercel auto-detects `api/` as serverless functions.
3. In **Project Settings → Environment Variables**, add:
   - `APPS_SCRIPT_URL` = your Google Apps Script web app URL (the one ending in `/exec`)
   - `ADMIN_PASSPHRASE` = `0123` (or your own)
4. In your Google Sheet's Apps Script, set the script property `ADMIN_PASSPHRASE` = `0123` (Project Settings → Script Properties). Replace the script code with the version that includes availability handling (doGet + doPost with action=availability).
5. Deploy. Vercel builds automatically on every push to `main`.

Orders go to Google Sheets + email (via Apps Script). Availability is stored in an "Availability" sheet tab and synced through `/api/availability`.

Local test: `npm install` then `npx vercel dev` (reads `.env` with `APPS_SCRIPT_URL` and `ADMIN_PASSPHRASE`).

## Note on checkout

The checkout validates the form, calculates totals, shows a confirmation with an order number and clears the cart. On Netlify it also submits the order to Netlify Forms (email + dashboard) and offers a WhatsApp button. Order numbers are randomly generated (`#FJ-0000`) for the prototype.
