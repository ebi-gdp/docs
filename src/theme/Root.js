import React from 'react';

export default function Root({children}) {
  return <>
    <aside className="retirement-notice" aria-label="Calculation service retirement notice">
      The GeneticScores.org calculation service has been retired. Use the local-install <a href="https://github.com/PGScatalog/pgsc_calc/">PGS Catalog Calculator (pgsc_calc)</a> instead.
    </aside>
    {children}
  </>;
}
