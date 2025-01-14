---
sidebar_position: 1
slug: /
---

# About the `GeneticScores.org` calculation service


:::caution

* This service is not yet suitable for sensitive data. Do not upload private genomes to the platform.
* You can use [publicly available or synthetic genomes for testing](./data)

:::

## What does it do?

This tool:

* Calculates polygenic scores from existing scoring files in the PGS Catalog (i.e. the application of weights specified in an existing polygenic score to the variants present in target genomes that you supply)

It does this by running the [PGS Catalog Calculator pipeline](https://github.com/pgscatalog/pgsc_calc) on your input genomes that you upload.

## What doesn’t it do?

* This tool does not create new polygenic scores (the list of variants and weights, otherwise known as polygenic scoring files).
* This tool does not estimate absolute risk

## Who should use this service?

This service is aimed at AI developers or human health researchers looking to calculate polygenic scores in cohort data.

## What do I put in?

* Target genomes of a group of individuals
* Genome build of your target genomes

## What do I get out?

After the calculation has finished:

* Individual level scores (one number per score per person)

A report describing:

* Pipeline parameters used
* Scoring file information
* How well variants matched target genomes
* Example PGS distributions if enough samples are present

[An explanation of the output report is available here.](report.md) The report is a HTML file that [opens in your web browser.](pathname:///files/test_report.html)


:::note

Although the PGS Catalog Calculator supports genetic ancestry similarity analysis, `GeneticScores.org` does not support this currently.

:::


## What is the process?

* You log in
  * We use the Life Sciences AAI so you can use your institutional log in or other single sign in providers (e.g. Google, ORCID) to log in
* You agree to our terms of use and sign a data processing agreement
* You encrypt your target genomes [using crypt4gh and a unique public key we make for you](category/encrypt)
* You upload your encrypted [target genomes to us via secure transfer](category/upload)
  * We use Globus to transfer data securely from your system to ours. To do this you need to download Globus Personal Connect onto your local machine
  * You must upload encrypted data only. You must encrypt your data using Crypt4GH.
* You tell us the genome build of your target genomes
* You select PGS Catalog polygenic scores to apply to your target genomes
  * You can select scores by trait, publication or PGS Catalog ID
  * You can modify pipeline parameters if you wish
  Details
* You initiate the analysis and [wait for your results](report.md)

## How long does it take?

Calculation can take several hours to finish depending on the size of your uploaded genomes and how busy the service is.

## Who makes this?

The platform is a product of the INTERVENE consortium, it has been created by the team at EMBL-EBI, in collaboration with the University of Cambridge for `pgsc_calc`. It runs on Google Cloud Platform.

## Can I run this in my own environment?

The calculation pipeline run by the platform, the PGS Catalog Calculator, as well as associated tools and libraries, are available to be run in [offline local environments.](./tools)

## How do I get help?

If you need help contact us at [intervene-helpdesk@ebi.ac.uk](mailto:intervene-helpdesk@ebi.ac.uk).

## Funding statement

INTERVENE has received funding from the European Union's Horizon 2020 research and innovation programme under grant agreement No 101016775

