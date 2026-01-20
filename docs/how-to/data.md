# Test the platform with small synthetic genomes

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
* Not all scores will work on the small HAPNEST dataset. Due to the low number of variants in the small dataset many scores will fail to pass the matching threshold (75%).
* For testing the platform these selections will produce results : scores- PGS002299,PGS004891; trait- triple negative breast cancer (EFO_0005537). 
:::

## Other genomes

* Other publicly available and permissively licensed data, like [1000 Genomes](https://www.cog-genomics.org/plink/2.0/resources), can also be used to test the calculation service.
* Read more about [publicly available and synthetic genomes](https://methods.geneticscores.org/tutorials/synthetic.html)

:::
