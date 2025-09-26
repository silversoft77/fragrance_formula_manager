# Fragrance Formula Manager

A React + TypeScript app for browsing and understanding fragrance formulas.  


## Demo

- Local: run on [http://localhost:5173](http://localhost:5173) (Vite default)
- No hosted demo included (can be deployed easily to Vercel/Netlify)

---

## Setup

1. **Clone repo**
   ```bash
   git clone <your-repo-url>
   cd fragrance-formula-manager

2. **Install dependencies**
   ```bash
   npm install

3. **Run dev server**
   ```bash
   npm run dev

4. **Open browser**
  Go to the UR printed in the terminal

## Data

Place your `fragrance.csv` in the `public/` folder so it is served at `/fragrance.csv`.

### Example CSV

```csv
formula_id,formula_name,creator,category,notes,created_at,material_id,material_name,quantity,unit_cost
1,Fresh Morning,Anna,Fresh,"Bright citrus with a soft dry-down",2025-09-01,101,Lemon Oil,5,2.5
1,Fresh Morning,Anna,Fresh,"Bright citrus with a soft dry-down",2025-09-01,102,Orange Blossom,3,4.0
2,Woody Nights,Marco,Woody,"Warm woody base with spice",2025-09-05,201,Cedarwood,4,3.0
