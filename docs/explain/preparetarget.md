# Preparing your target genomes

## Data requirements

You will upload a set of genomes/genotyping data that you want to calculate polygenic scores for. These genomes should be distinct from those used to develop the polygenic scores originally (i.e., those used to derive the risk alleles and weights), as overlapping samples will inflate common metrics of PGS accuracy.

Once your data is uploaded you will name this set of files as a sample set to indicate they belong to the same group of people.

Your data **must**:

- Encrypted using crypt4gh (the public encryption key can be downloaded from the 'Transfer Your Data' page).

- Must be in PLINK1 (bed / bim / fam) or PLINK2 (pgen / pvar / psam) format.

- Contain chromosomes 1 to 22, X and Y only in a single fileset (uploading data split by chromosome is not supported).

- Use human genome reference build GRCh38 or GRCh37 coordinates.

## Data recommendations

### Genetic imputation

For best results we suggest that your data be imputed. The success of the calculation pipeline is dependent on the variants in the scoring file being present in your target genomic data. Using imputed data, which includes many more variants, will increase your chances of getting more accurate results.

The **scoring calculation will fail** if there is an insufficient overlap between the scoring file and the target variants.

### Compression

Compressed files will upload and be processed faster. You can use plink2 to compress your files using zstandard.