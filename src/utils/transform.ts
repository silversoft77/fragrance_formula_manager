import type { Formula } from "../types";

export function transformCSVToFormulas(rows: any[]): Formula[] {
  const grouped: Record<string, Formula> = {};
  rows.forEach((row) => {
    const fid = row.formula_id;
    if (!grouped[fid]) {
      grouped[fid] = {
        id: fid,
        name: row.formula_name,
        creator: row.creator,
        category: row.category,
        notes: row.notes,
        createdAt: row.created_at,
        materials: [],
      };
    }
    grouped[fid].materials.push({
      id: row.material_id,
      name: row.material_name,
      quantity: Number(row.quantity),
      unitCost: row.unit_cost ? Number(row.unit_cost) : undefined,
    });
  });
  return Object.values(grouped);
}
