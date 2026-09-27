# United For The Game

Site for United For The Game, a free youth soccer showcase in Las Vegas
where selected players compete in front of MLS and Liga MX academy scouts.

- Live: https://united-for-the-game.pages.dev
- Instagram: https://www.instagram.com/united_for_the_game/

## Files

- `public/index.html` - the page
- `public/styles.css` - styles
- `public/script.js` - English/Spanish toggle

## Preview locally

```
python3 -m http.server 8000 --directory public
```

Then open http://localhost:8000

## Deploy

Hosted on Cloudflare Pages (project `united-for-the-game`). After committing changes:

```
npx wrangler pages deploy
```
