import React, { useState } from "react";
import type { Formula } from "../types";

interface Props {
    formulas: Formula[];
    onSelect: (formula: Formula) => void;
}

const FormulaTable: React.FC<Props> = ({ formulas, onSelect }) => {
    const [sortKey, setSortKey] = useState<keyof Formula>("name");
    const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
    const [query, setQuery] = useState("");

    const handleSort = (key: keyof Formula) => {
        if (sortKey === key) {
            setSortDir(sortDir === "asc" ? "desc" : "asc");
        } else {
            setSortKey(key);
            setSortDir("asc");
        }
    };

    const sorted = [...formulas]
        .filter(
            (f) =>
                f.name?.toLowerCase().includes(query.toLowerCase()) ||
                f.notes?.toLowerCase().includes(query.toLowerCase())
        )
        .sort((a, b) => {
            const av = (a[sortKey] || "") as string;
            const bv = (b[sortKey] || "") as string;
            if (av < bv) return sortDir === "asc" ? -1 : 1;
            if (av > bv) return sortDir === "asc" ? 1 : -1;
            return 0;
        });

    return (
        <div className="formula-table-container">
            <input
                type="text"
                placeholder="Search by name or notes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />
            <table className="formula-table">
                <thead>
                    <tr>
                        {(["name", "creator", "category", "createdAt"] as (keyof Formula)[]).map(
                            (key) => (
                                <th
                                    key={key}
                                    onClick={() => handleSort(key)}
                                    className="sortable-header"
                                >
                                    {key}
                                    {sortKey === key ? (sortDir === "asc" ? " ▲" : " ▼") : ""}
                                </th>
                            )
                        )}
                    </tr>
                </thead>
                <tbody>
                    {sorted.map((f, idx) => (
                        <tr
                            key={f.id}
                            onClick={() => onSelect(f)}
                            className={idx % 2 === 0 ? "row-even" : "row-odd"}
                        >
                            <td>{f.name}</td>
                            <td>{f.creator}</td>
                            <td>{f.category}</td>
                            <td>{f.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FormulaTable;
