---
sidebar_position: 1
sidebar_label: crypt4gh CLI
description: How to use the crypt4gh CLI to encrypt data
---

# Encrypt your data with the crypt4gh CLI

Encrypting your data with the crypt4gh command line interface (CLI) is good when:

* You are comfortable working with a terminal
* You are encrypting a lot of files

**You must encrypt your data if you want to use the PGS calculation service**.

Encrypting your data on your computer before uploading it is important to keep your data safe.

:::tip
Users unfamiliar with terminals and CLIs might prefer to use [`crypt4gh-gui`](./gui)
:::

## Step by step guide

### 1. Install the crypt4gh utility

[crypt4gh is a Python tool](https://github.com/EGA-archive/crypt4gh) to encrypt, decrypt or re-encrypt files, according to the [GA4GH encryption file format](https://www.ga4gh.org/news_item/crypt4gh-a-secure-method-for-sharing-human-genetic-data/).

You can install it from the [Python Package Index (PyPI)](https://pypi.org/project/crypt4gh/):

```
$ pipx install crypt4gh  # preferred - installs into an isolated environment
$ pip install --user crypt4gh  # if pipx is not installed
```

:::tip
You only need to install the crypt4gh utility once
:::

:::caution
You need Python 3.6 or higher installed on your computer to use the crypt4gh utility
:::


### 2. Download your unique public key from the platform

* [View your existing sample sets](https://gcp.intervenegeneticscores.org/pgs-calculator/datasets)
    * If you haven't created a sampleset yet, start [the data upload process](https://gcp.intervenegeneticscores.org/pgs-calculator/dataset)
    * If you're unsure how to start uploading your data, check out the [data upload tutorial here](/category/upload/)
* Click "Launch job" to view details about your existing sampleset
* Download your public key (it will appear in your downloads folder, e.g. `INTD00000000027.pub`)

:::tip
* Each public key has a linked secret key, which we store securely on the platform
* We use the secret key to temporarily decrypt your data and calculate PGS when you submit jobs
* The secret key automatically expires 2 weeks after it's created to keep your data safe
* Any encrypted data with an expired secret key cannot be decrypted and are automatically deleted on the platform
* You'll need to restart the data encryption process with a new public key if more than 2 weeks have passed since you started the data upload process
:::


### 3. Use the public key to encrypt your files

```
$ cd /path/to/your/genomes
$ crypt4gh encrypt --recipient_pk ~/Downloads/INTD00000000024.pub < hapnest.pvar > hapnest.pvar.c4gh
$ crypt4gh encrypt --recipient_pk ~/Downloads/INTD00000000024.pub < hapnest.pgen > hapnest.pgen.c4gh
$ crypt4gh encrypt --recipient_pk ~/Downloads/INTD00000000024.pub < hapnest.psam > hapnest.psam.c4gh
```

:::caution
* It's important to include the `.c4gh` suffix on the new encrypted files
* Don't forget to include the original suffix (e.g. `.pvar`) or we won't be able to recognise your files
:::

### 4. Continue to upload your encrypted data

You're now ready to [upload your encrypted data](/category/upload/).


:::warning
* **Always** encrypt your data, even if the data are not sensitive and publicly available (e.g. 1000 Genomes)
* If you submit jobs using unencrypted data, they will always fail after some time
:::