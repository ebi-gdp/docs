# How to test the platform with small synthetic genomes

If you'd like to test the platform, we recommend using the [small HAPNEST dataset](https://pubmed.ncbi.nlm.nih.gov/37647640/).

## Synthetic HAPNEST data

Synthetic genomes don't contain any private or sensitive information but are compatible with bioinformatics tools like our platform.

A copy of the small HAPNEST dataset is available to download from:

https://ftp.ebi.ac.uk/pub/databases/spot/intervene/

There are three files to download:

* `hapnest.pgen`
* `hapnest.pvar`
* `hapnest.psam`

This triplet of files contains genotypes (`.pgen`), variants (`.pvar`), and sample data (`.psam`) in [PLINK 2 format](https://www.cog-genomics.org/plink/2.0/).

When you work with these files it's important to keep all of the files together.

:::tip
* These genomes are in genome build **GRCh38**.
* Not all scores will work on the small HAPNEST dataset.
* For testing these selections will work : scores PGS001994,PGS000006, traits 'Abnormality of the eye'/HP_0000478 or 'estrogen-receptor negative breast cancer'/EFO_1000650, publication PGP000002
:::

## Other genomes

:::caution

* Please do not upload sensitive data - like real sequenced genomes - to the platform
* It's OK to upload publicly available and permissively licensed data, like [1000 Genomes](https://www.cog-genomics.org/plink/2.0/resources)
* The platform and documentation is being **actively developed and tested** so things might go wrong when you submit jobs

:::
