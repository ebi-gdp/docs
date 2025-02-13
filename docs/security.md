---
sidebar_position: 7
sidebar_label: Security overview
---

# Security overview

`GeneticScores.org` handles human data and as such security is a prime concern.

This document provides an overview of our practices in ensuring the security of the data handled by `GeneticScores.org`.

The key points of `GeneticScores.org` security strategy are:

## 1. Regular Risk Assessment

`GeneticScores.org` regularly identifies and assesses risk related to the following:

* Breach of confidentiality
* Breach of privacy or autonomy
* Malicious or accidental corruption or destruction of data
* Disruption of services provided by `GeneticScores.org`

## 2. Risk mitigation

* `GeneticScores.org` implements and maintains safeguards to minimise the risks identified above in accordance with the 6 control objectives listed in Appendix 1 and outlined in the GA4GH Security and Infrastructure document.
* If a breach is discovered, `GeneticScores.org` applies a defined protocol to minimise damage.
* We perform vulnerability scans and application penetration tests to monitor the state of our service

## 3. Identity and authorisation management

* `GeneticScores.org` authenticates the identity of individuals or software accessing our services for processing data
* `GeneticScores.org` authorises only the submitter of data to access that data

## 4. Audit Logs

* `GeneticScores.org` maintains a set of logs recording:
  * Resource usage
  * Access logs
  * Service logs

## 5. Cryptography, communication  security, and data integrity

* All data transmitted to or from the GeneticScores.org is end-to-end encrypted and stored using strong encryption.
* Genetic data must be encrypted by the user before upload.
  * We generate unique [crypt4gh](https://www.ga4gh.org/news_item/crypt4gh-a-secure-method-for-sharing-human-genetic-data/) key pairs for each dataset, and users must use the public key to encrypt their data before upload. We use the matching private key to decrypt the data for processing.
* Encryption keys are not stored in the same system as the encrypted data.
  * Encryption keys expire after two weeks after creation (they are deleted by automated processes), which renders your data unreadable. The encrypted data is also automatically deleted after two weeks.
* Users may choose to delete their data at any time.

`GeneticScores.org` has a defined protocol defining the response in the event of a security breach.

The security measures implemented by our data sub-processor, Google Cloud Platform are outlined in [Appendix 2 of the Cloud Data Processing Addendum.](https://cloud.google.com/terms/data-processing-addendum?hl=en)

## Appendix 1

### GA4GH Control Objectives

* Control Objective 1: Implement technology safeguards to minimise the risk of unauthorised access, use, or disclosure of confidential and private data.

* Control Objective 2: Implement technology safeguards to minimise the risk of discovery, access, and use of individuals’ clinical and genomic data, and individual identities, other than as authorised by applicable jurisdictional law, institutional policy, and individual consents.

* Control Objective 3: Implement technology safeguards to minimise the risk of accidental or malicious corruption or destruction of data.

* Control Objective 4: Implement technology safeguards to minimise the risk of disruption, degradation, and interruption of services enabling access to data.

* Control Objective 5: Implement technology safeguards to minimise the risk of potential security attacks and misuse of authorised accesses and privileges.

* Control Objective 6: Implement technology safeguards to promptly detect the failure to attain the above control objectives and to respond with proper countermeasures.

