---
aliases:
  - /tools
---

# Calculate polygenic scores locally

We help to develop many polygenic score (PGS) tools which are open source, permissively licensed, and can run in your local environment. This means it's always possible to bring our code to your data.

## The PGS Catalog Calculator

[The PGS Catalog Calculator (`pgsc_calc`)](https://github.com/PGScatalog/pgsc_calc) is a bioinformatics best-practice analysis pipeline for calculating polygenic [risk] scores on samples with imputed genotypes using existing scoring files from the PGS Catalog and/or user-defined PGS/PRS.

When users upload target genomes to the `GeneticScores.org` calculation service it uses `pgsc_calc` to calculate and adjust PGS.

:::tip Documentation

[Check out the full documentation to learn more](https://pgsc-calc.readthedocs.io/en/v2.2.0/index.html)

:::

## pygscatalog

[This repository contains Python applications and libraries](https://github.com/PGScatalog/pygscatalog) for working with polygenic scores and the PGS Catalog, an open database of polygenic scores and the relevant metadata required for accurate application and evaluation.

`pgsc_calc` uses these applications internally.