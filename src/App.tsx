import { useState, useEffect } from "react";
import FormulaTable from "./components/FormulaTable";
import FormulaDetail from "./components/FormulaDetail";
import type { Formula } from "./types";
import { transformCSVToFormulas } from "./utils/transform";
import Papa from "papaparse";

const App = () => {
  const [formulas, setFormulas] = useState<Formula[]>([]);
  const [selected, setSelected] = useState<Formula | null>(null);

  useEffect(() => {
    Papa.parse("/fragrance.csv", {
      header: true,
      download: true,
      complete: (res) => {
        setFormulas(transformCSVToFormulas(res.data));
      },
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Fragrance Formula Manager</h1>
      {!selected ? (
        <FormulaTable formulas={formulas} onSelect={setSelected} />
      ) : (
        <FormulaDetail formula={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

export default App
