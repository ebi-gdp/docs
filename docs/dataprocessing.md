---
sidebar_position: 8
sidebar_label: Data processing
---

# Data processing

We collect information about who is interacting with the system so we can monitor and improve our services. Details about the data we collect can be found in our data privacy notices:

* http://www.ebi.ac.uk/data-protection/privacy-notice/geneticscoresorg-analysis-service
* http://www.ebi.ac.uk/data-protection/privacy-notice/geneticscoresorg-public-website
* http://www.ebi.ac.uk/data-protection/privacy-notice/geneticscoresorg-helpdesk
* http://www.ebi.ac.uk/data-protection/privacy-notice/geneticscoresorg-announce


If you choose to upload genetic data to use our [calculation service](https://calculate.geneticscores.org), you must first consent to our [Data Processing Agreement](dpa.md). In this case we temporarily store the genetic data you upload (see Data Retention Section). The calculation service runs the PGS Catalog Calculator (pgsc_calc) on your data, an overview of the service is [provided here](https://docs.geneticscores.org), full documentation of the [pipeline here](https://pgsc-calc.readthedocs.io/en/latest/), and the [code here](https://github.com/pgscatalog/pgsc_calc?tab=readme-ov-file).

## Sub-Processors

When you upload encrypted genetic data to our service it is temporarily stored on EMBL-EBI’s Globus server in the United Kingdom. Our services are hosted on Google Cloud Platform (GCP) in London, United Kingdom, therefore GCP is a data sub-processor as defined in the Data Processing Terms and Conditions. All data processing occurs on GCP infrastructure. You can find more information on CGP Security Measures in Section 7 and Appendix 2 to the [Cloud Data Processing Addendum](https://cloud.google.com/terms/data-processing-addendum?hl=en). GCP in turn may also use sub-processors as outlined in Section 11 and in Appendix 4 to the aforementioned Addendum, which provides more information on the engagement and identities of the GCP sub-processors. All users must also comply with GCP’s [Acceptable Use Policy](https://cloud.google.com/terms/aup?hl=en) as applicable at each time.

## Data retention

Server and application logs are retained for at most 60 days.

Genetic data is automatically deleted using a two stage approach. Datasets have an expiration date (set to 14 days after creation). When the expiration date passes the unique key pair that we hold is automatically deleted, which renders your data unreadable.  Secondly, expired datasets are regularly deleted.

You can also choose to delete your dataset at any time before the expiration date on the datasets dashboard.


## Contact us

If you wish to report a potential vulnerability or security concern, or have any other queries, please get in touch with us at intervene-helpdesk@ebi.ac.uk