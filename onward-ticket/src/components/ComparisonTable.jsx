import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import './ComparisonTable.css';

const rows = [
  { feature: 'Live PNR Generation', us: true, fake: false },
  { feature: 'Verifiable on Airline Website', us: true, fake: false },
  { feature: 'Accepted by Embassies', us: true, fake: false },
  { feature: 'Accepted by Airlines at Check-in', us: true, fake: false },
  { feature: '24/7 Human Support', us: true, fake: false },
  { feature: 'Automatic Cancellation After Use', us: true, fake: false },
  { feature: 'Risk of Visa Rejection / Ban', us: false, fake: true },
];

const ComparisonTable = () => {
  return (
    <section className="section comparison-section" id="comparison">
      <div className="container">
        <motion.div
          className="text-center section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="comparison-badge">Authority Proof</span>
          <h2 className="section-title comparison-heading">
            Why Onward Sky is the Safest Choice
          </h2>
          <p className="section-subtitle">
            Don't gamble your visa application on a forged PDF. See the difference that a real, verifiable PNR makes.
          </p>
        </motion.div>

        <motion.div
          className="comparison-table-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="feature-col">Feature</th>
                <th className="us-col">
                  <div className="col-header us-header">
                    <span className="winner-badge">✈ Onward Sky</span>
                  </div>
                </th>
                <th className="fake-col">
                  <div className="col-header fake-header">Fake / Edited PDFs</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={row.feature}
                  className="table-row"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <td className="feature-name">{row.feature}</td>
                  <td className="check-cell us-cell">
                    {row.us ? (
                      <CheckCircle2 size={22} className="icon-yes" />
                    ) : (
                      <XCircle size={22} className="icon-no" />
                    )}
                  </td>
                  <td className="check-cell fake-cell">
                    {row.fake ? (
                      <XCircle size={22} className="icon-no-fake" />
                    ) : (
                      <XCircle size={22} className="icon-no" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
