# Choosing which polygenic scores to calculate

The polygenic scores you can calculate using this service are sourced directly from the [PGS Catalog](https://pgscatalog.org). You can select the scores in three ways, by trait, by publication or by PGS ID.

Refer to the PGS Catalog for full information (meta-data on score development and performance metrics, trait information, and scoring files) on the scores you apply.

## Score selection methods

### Selection by trait

You can select scores by the traits they are created to predict. You can select all scores associated with a specific trait in the PGS Catalog (the mapped trait). You can inspect the detailed score information by visiting the PGS Catalog trait page (for example, [eye disease](https://www.pgscatalog.org/trait/EFO_0003966/))


:::tip

Trait information in the PGS Catalog is provided in two ways:

* The ‘reported trait’ - the author-reported trait (e.g. ‘started insulin within one year of diagnosis of diabetes’) that the PGS has been developed to predict.

* The ‘mapped trait’ - the reported trait is mapped to ontology terms (Experimental Factor Ontology (EFO)) and their respective identifiers by PGS Catalog curators (e.g. ‘insulin use measurement’, EFO_0600082 for the above example). Use of ontology terms facilitates searching, grouping and integration of the data.

:::

Searching on GeneticScores.org uses the mapped trait (ontology terms) to retrieve and group scores. The reported traits may be more specific than the mapped trait, so please inspect the reported trait of scores you are applying. For more information about trait representation see the [PGS Catalog documentation](https://www.pgscatalog.org/docs/#desc_trait).

### Selection by publication

You can select all scores that are associated with a publication in the PGS Catalog. You can search by Pubmed ID, doi, title or PGPID (each publication in the PGS Catalog is given a Polygenic Publication (PGP) ID).

### Selection by PGS ID

Each PGS in the PGS Catalog is given a unique Polygenic Score (PGS) ID to identify it. You can directly specify the PGS ID(s) that you wish to calculate.

## Limits

There is a limit of 100 scores that can be selected for each pipeline run. If you select a trait or publication that has >100 scores associated with it in the PGS Catalog you will receive an error message. If this happens, we suggest you inspect the list of scores via the PGS Catalog Publication page (e.g., [PGSP000604](https://www.pgscatalog.org/publication/PGP000604/)) and enter the required scores using the ‘select by PGS ID’ option.

Each user is allowed 5 job submissions (pipeline runs) per day. If you exceed this limit you will receive an error message. You can submit more jobs the next day (after midnight UTC).

