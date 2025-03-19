# Crypt4GH encryption

* You [must use crypt4gh](/category/encrypt/) to encrypt your data before you send it to us for processing
* crypt4gh is the [Global Alliance for Genomics and Health (GA4GH) approved secure method for sharing human genetic data](https://www.ga4gh.org/news_item/crypt4gh-a-secure-method-for-sharing-human-genetic-data/)
* Every dataset created on `GeneticScores.org` is encrypted with a unique key
* This means that while your data is stored on our service it is encrypted at rest and during transfer
* We delete keys regularly (and users can request key deletion) to ensure we don't persist any private data on the platform

## High level explanation

* We use crypt4gh to implement [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography)
* When you create a new dataset we generate a linked key pair consisting of a public key and a secret key
* We take the secret key, encrypt it, and store it in a secure vault on the `GeneticScores.org` platform
* We provide the public key for you to download
    * The public key is not sensitive data
* Anybody with the public key can encrypt data with it
* Only the holder of the linked secret key (`GeneticScores.org`) can decrypt the data
