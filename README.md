# Shree Jagannath Medicos — Pharmacy Website

A modern, white-based pharmacy website built with **HTML + CSS + JS + Bootstrap 5.3**,
using **Swiper 11** for product/review carousels and **Font Awesome 6** icons.
All vendor libraries, fonts and images are **local** — no CDN required, works offline.

## Folder structure

```
site/
├── index.html                  ← the whole homepage (single page)
├── README.md
└── assets/
    ├── css/
    │   ├── bootstrap.min.css   ← Bootstrap 5.3.8 (untouched)
    │   ├── fontawesome.min.css ← Font Awesome 6 icons
    │   ├── swiper-bundle.min.css
    │   └── style.css           ← YOUR theme: colours, components, overrides
    ├── js/
    │   ├── bootstrap.bundle.min.js
    │   ├── swiper-bundle.min.js
    │   └── main.js             ← swiper init, sticky nav, reveal, search, back-to-top
    ├── fonts/                  ← self-hosted Inter + Manrope + FA webfonts
    └── img/
        ├── products/           ← DEMO product images (SVG placeholders — replace later)
        └── pages/              ← DEMO hero / store / blog images (replace later)
```

## 🎨 Changing the colour theme

Open `assets/css/style.css` and edit the variables at the very top — the entire
site (buttons, icons, badges, backgrounds, hovers…) follows them:

```css
:root {
  --clr-primary:       #1e6ae1;   /* main brand blue – buttons, links, icons  */
  --clr-primary-dark:  #12509f;   /* hover / dark shade                       */
  --clr-primary-light: #eaf2fe;   /* soft tint – section & card backgrounds   */
  --clr-accent:        #0ea5a5;   /* secondary accent – pills, highlights     */
  --clr-accent-light:  #e4f6f6;
  --clr-success:       #188a42;   /* prices / discount %                      */
  --clr-warning:       #f5a40b;   /* star ratings                             */
  --clr-heading:       #0f2440;   /* headings                                 */
  --clr-body:          #5c6b81;   /* paragraph text                           */
  --clr-border:        #e4ebf5;   /* hairlines & card borders                 */
  --clr-bg:            #ffffff;   /* page background (white based theme)      */
  --clr-surface:       #f5f8fd;   /* alternating section background           */
  --clr-dark:          #0b1f3a;   /* footer                                   */
  --radius-md:         12px;      /* button / card roundness                  */
  --shadow-md:         0 10px 30px rgba(15,36,64,.10);
}
```

Example — switch the whole site to green: change `--clr-primary` to `#188a42`,
`--clr-primary-dark` to `#0f6b31`, `--clr-primary-light` to `#eaf7ee`
(and keep `--clr-primary-rgb` in sync, e.g. `24, 138, 66`).

## 🖼 Replacing the demo images

* Product cards: swap the `src` of `<img>` tags inside `#trendingSwiper` and
  `#bestselling` (square images, ~600×600 px work best).
* Hero: `assets/img/pages/hero.svg` · About/store: `pages/store.svg`
* Blog thumbs: `pages/blog-1.svg … blog-3.svg`

## 📞 Contact number

The phone number appears in the header, hero services, emergency card, the final
"Call Us Now" band and the footer. Search `+91 79490 82435` / `tel:+917949082435`
in `index.html` to update it everywhere.

## Page section order (as per design references)

1. Top utility bar → 2. Header (logo + search + call/quote, **no account/cart**)
→ 3. Nav → 4. Hero + offer sticker → 5. Category strip (homepage category component)
→ 6. Top Services For You → 7. Trending Health Products (**Swiper**) → 8. Promo banners
→ 9. Best Selling Products + assurance bar → 10. Shop by Concern → 11. Reviews (**Swiper**)
→ 12. Why Choose Us + mission + emergency call card → 13. Health Tips & News + CTA banner
→ 14. **Contact phone band** → 15. Footer.
