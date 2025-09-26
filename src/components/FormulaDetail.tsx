import React from "react";
import type { Formula } from "../types";

interface Props {
    formula: Formula | null;
    onClose: () => void;
}

const FormulaDetail: React.FC<Props> = ({ formula, onClose }) => {
    if (!formula) return null;

    const totalCost = formula.materials.reduce(
        (acc, m) => acc + (m.unitCost || 0) * m.quantity,
        0
    );

    return (
        <div className="detail-card">
            <button onClick={onClose} className="back-button">
                ← Back
            </button>

            <h2 className="detail-title">{formula.name}</h2>
            <div className="detail-meta">
                <p><strong>Creator:</strong> {formula.creator}</p>
                <p><strong>Category:</strong> {formula.category}</p>
                <p><strong>Notes:</strong> {formula.notes}</p>
                <p><strong>Created At:</strong> {formula.createdAt}</p>
            </div>

            <h3 className="materials-heading">Materials</h3>
            <table className="materials-table">
                <thead>
                    <tr>
                        <th>Material</th>
                        <th>Quantity</th>
                        <th>Unit Cost</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {formula.materials.map((m) => (
                        <tr key={m.id}>
                            <td>{m.name}</td>
                            <td>{m.quantity}</td>
                            <td>{m.unitCost ? `$${m.unitCost.toFixed(2)}` : "-"}</td>
                            <td>
                                {m.unitCost ? `$${(m.unitCost * m.quantity).toFixed(2)}` : "-"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <p className="total-cost">
                <strong>Total Formula Cost:</strong> ${totalCost.toFixed(2)}
            </p>
        </div>
    );
};

export default FormulaDetail;
