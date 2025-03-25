---
sidebar_label: crypt4gh GUI
description: How to use the crypt4gh GUI to encrypt data
---

# Encrypt your data with the crypt4gh GUI

Encrypting your data with the crypt4gh graphical user interface (GUI) is good when:

* You don't want to use a terminal
* You are testing the platform. Note the GUI can only encrypt one file at a time.

**You must encrypt your data if you want to use the PGS calculation service**.

:::tip
Users that prefer to work with terminals and CLIs might prefer to use the [`crypt4gh`](./cli) python package
:::

## Step by step guide

### 1. Install crypt4gh-gui

* Navigate to the [crypt4gh-gui repository](https://github.com/CSCfi/crypt4gh-gui)
* Select the most recent release

![](/img/crypt4gh-gui/releases.png)

* Download the release for your platform (Linux, macOS, or Windows)
* Extract the archive and open the executable file

:::note
* macOS users may get a warning that the executable file is not verified
* Many open source applications like `crypt4gh-gui` are unsigned and will trigger this warning
* To bypass the warning you must open Privacy & Security in the settings menu, then scroll to the bottom and select "open anyway"
:::


### 2. Download your unique public key from the platform

* [View your existing sample sets](https://calculate.geneticscores.org/pgs-calculator/datasets)
    * If you haven't created a sampleset yet, start [the data upload process](https://calculate.geneticscores.org/pgs-calculator/dataset)
    * If you're unsure how to start uploading your data, check out the [data upload tutorial here](/category/upload/)
* Click "Launch job" to view details about your existing sampleset
* Download your public key (it will appear in your downloads folder, e.g. `INTD00000000027.pub`)

:::tip
* Each public key has a linked secret 'private' key, which we store securely on the platform
* We use the secret key to temporarily decrypt your data and calculate PGS when you submit jobs
* The secret key automatically expires 2 weeks after it's created to keep your data safe
* Any encrypted data with an expired secret key cannot be decrypted and are automatically deleted on the platform
* You'll need to restart the data encryption process with a new public key if more than 2 weeks have passed since you started the data upload process
:::


### 3. Load the public key

![](/img/crypt4gh-gui/loadkey.png)

### 4. Select the file you want to encrypt

![](/img/crypt4gh-gui/selectfile.png)

:::note
* Only one file can be encrypted at a time, meaning for e.g. a triplet of .psam, .pvar and .pgen files you will need to encrypt each file one by one.
:::

### 5. Encrypt the file

![](/img/crypt4gh-gui/encrypt.png)

:::note
* The GUI will give the error message: 'No private key supplied, temporary private key will be generated'
* This is expected and not something to worry about.
:::


### 6. Continue to upload your encrypted data

You're now ready to [upload your encrypted data](/category/upload/).

:::warning
* **Always** encrypt your data, even if the data are not sensitive and publicly available (e.g. 1000 Genomes)
* If you submit jobs using unencrypted data, they will always fail after some time
:::
