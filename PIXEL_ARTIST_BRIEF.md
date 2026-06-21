# Aztec Pixel Agents — Pixel Artist Commission Brief

## Project

Reskinning an open-source VS Code pixel art office extension with an Aztec temple aesthetic.
The office is a top-down 2D pixel grid (16px tiles) where animated characters sit at desks.

## Color Palette

- **Jade green**: #2E8B57 (primary surfaces)
- **Aztec gold**: #D4A017 / #FFC83A (accents, trim)
- **Turquoise**: #20A6A6 (screens, glowing elements)
- **Obsidian**: #2C2520 / #4A3F38 (dark stone, shadows)
- **Terracotta**: #C75B2A (pottery, warm accents)
- **Skin tones**: Brown/tan range for all characters

---

## 1. Characters (5 sprites)

### Format

- **Sprite sheet**: 112 x 96 pixels (7 frames wide x 3 rows tall)
- **Each frame**: 16w x 32h pixels
- **Rows**: Row 1 = facing down, Row 2 = facing up, Row 3 = facing right
- Left-facing is auto-mirrored from right-facing by the engine.

### Frame layout per row (7 frames):

| Frame | 0    | 1      | 2      | 3      | 4      | 5      | 6    |
| ----- | ---- | ------ | ------ | ------ | ------ | ------ | ---- |
| Use   | Idle | Walk 1 | Walk 2 | Walk 3 | Type 1 | Type 2 | Read |

### Character designs

**char_0 — Warrior (Male)**

- Shaved sides, straight bangs, long topknot hairstyle
- Warrior chest armor with Aztec geometric embroidery
- Brown/tan skin
- Gold accents on armor

**char_1 — Feather (Female)**

- Tall feather headdress (quetzal-inspired, jade green + gold feathers)
- Embroidered huipil (traditional top)
- Brown/tan skin

**char_2 — Buns (Female)**

- Double bun hairstyle
- Patterned dress with geometric Aztec motifs
- Brown/tan skin
- Turquoise jewelry

**char_3 — Flower (Female)**

- Flower crown with braided hair
- Flowing embroidered outfit
- Brown/tan skin
- Warm terracotta/gold flower colors

**char_4 — Bow (Female)**

- Large decorative bow in hair + dangling earrings
- Decorated blouse with Aztec patterns
- Brown/tan skin
- Gold earrings

**char_5 — (spare slot, can duplicate or create a 6th variant)**

### Reference

See `webview-ui/public/assets/characters/char_0.png` through `char_5.png` for the exact sprite sheet format. The new characters must match this exact layout.

---

## 2. Floor Tiles (9 tiles)

### Format

- **Each tile**: 16 x 16 pixels
- Files: `floor_0.png` through `floor_8.png`
- Tiles are colorized by the engine via HSB shifting, so design them as **grayscale or neutral-toned base** that looks good when tinted jade/gold/turquoise.

### Designs

| File        | Design                             |
| ----------- | ---------------------------------- |
| floor_0.png | Smooth carved stone (default)      |
| floor_1.png | Stone with jade inlay pattern      |
| floor_2.png | Cobblestone / rough temple stone   |
| floor_3.png | Stone with turquoise mosaic accent |
| floor_4.png | Checkered stone pattern            |
| floor_5.png | Geometric Aztec step-fret pattern  |
| floor_6.png | Obsidian-style dark polished stone |
| floor_7.png | Gold-trimmed ceremonial tile       |
| floor_8.png | Stone with serpent motif           |

---

## 3. Wall Tile (1 tile set)

### Format

- **Tile**: 64 x 32 pixels (4 columns x 1 row of 16x32 pieces)
- File: `walls/wall_0.png`
- The engine uses a 4-bit bitmask auto-tiling system. Each 16x32 column represents a wall piece variant.

### Design

Stone pyramid wall blocks with:

- Aztec geometric frieze/border pattern along the top
- Carved stone texture
- Gold accent line where wall meets floor

---

## 4. Furniture (priority pieces)

Each furniture piece has its own folder with a `manifest.json` (don't modify the JSON, just replace the PNGs at the same dimensions).

### High priority — replace these:

| Piece                | Dimensions   | Aztec replacement                                        |
| -------------------- | ------------ | -------------------------------------------------------- |
| DESK (front)         | 48 x 32      | Carved stone desk with gold trim                         |
| DESK (side)          | 16 x 64      | Same desk, side view                                     |
| PC (front, 3 frames) | 16 x 32 each | Stone tablet/codex with turquoise glow (animated screen) |
| PC (back)            | 16 x 32      | Back of stone tablet                                     |
| PC (side)            | 16 x 32      | Side of stone tablet                                     |
| BOOKSHELF            | 32 x 32      | Pyramid-style stone shelf with codex scrolls             |
| DOUBLE_BOOKSHELF     | 48 x 48      | Larger version                                           |
| LARGE_PAINTING       | 48 x 32      | Aztec sun stone / calendar mural                         |
| SMALL_PAINTING       | 16 x 32      | Quetzalcoatl carving                                     |
| SMALL_PAINTING_2     | 16 x 32      | Jaguar warrior carving                                   |

### Medium priority:

| Piece                          | Dimensions            | Aztec replacement                       |
| ------------------------------ | --------------------- | --------------------------------------- |
| PLANT                          | 16 x 32               | Agave or nopal cactus in terracotta pot |
| PLANT_2                        | 16 x 32               | Marigold / cempasuchil in pot           |
| HANGING_PLANT                  | 16 x 32               | Hanging jade vines                      |
| SOFA (front/back/side)         | 32x16 / 32x16 / 16x32 | Stone bench with woven textile cushion  |
| CUSHIONED_BENCH                | 32 x 16               | Woven reed mat / petate                 |
| COFFEE_TABLE                   | 16 x 16               | Low stone altar table                   |
| WOODEN_CHAIR (front/back/side) | 16x32 each            | Carved stone stool                      |

### Low priority (can keep originals):

- BIN, CLOCK, COFFEE, POT, SMALL_TABLE, TABLE_FRONT, WHITEBOARD, WOODEN_BENCH, CACTUS

---

## 5. Delivery format

- All files as **PNG with transparency**
- Exact pixel dimensions as listed (the engine renders pixel-perfect, no scaling)
- Name files identically to the originals (drop-in replacement)
- No anti-aliasing — hard pixel edges only (this is pixel art)

## References

- Original sprites are in `webview-ui/public/assets/` for exact format reference
- Aztec concept art provided separately (5 reference images from our design session)
