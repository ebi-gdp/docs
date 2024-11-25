---
sidebar_position: 1
sidebar_label: Browser
description: How to use your web browser to upload data
---

# Upload genomes with your web browser

Uploading with your web browser is good if:

* You're uploading smaller datasets (less than tens of gigabytes)
* You don't want to install a special application to transfer data

In other cases it may be better to [upload data with Globus Connect
Personal](gcp.md).

When uploading data with your web browser the transfer is protected with HTTPS
encryption to keep your data safe in transit.

:::tip
* If you'd like to test the platform we recommend using this [small synthetic dataset](https://ftp.ebi.ac.uk/pub/databases/spot/intervene/) ([HAPNEST](https://pubmed.ncbi.nlm.nih.gov/37647640/))
  * The synthetic data are genome build version `GRCh38`  
* The small HAPNEST synthetic data have been tested with the polygenic scores below:
  * [PGS000882](https://www.pgscatalog.org/score/PGS000882/) (vitamin D
  measurement)
  * [PGS001229](https://www.pgscatalog.org/score/PGS001229/)
  (standing height)
:::

## Step by step guide

### 1. Enter your Globus account identity

![](/img/web-upload/screen-1.png)

### 2. Download the public encryption key and encrypt your data
![](/img/web-upload/screen-2.png)

:::info
To keep your data safe, please follow these [**instructions**](../tutorial-encrypt/cli.md) to encrypt your data using the key and **only** upload encrypted data.
:::

### 3. View destination collection and upload youe data

![](/img/web-upload/screen-3.png)

### 4. Select web upload

![](/img/web-upload/screen-4.png)

### 5. Grant permission to Globus web application

![](/img/web-upload/screen-5.png)

### 6. Select files to upload

![](/img/web-upload/screen-6.png)

### 7. Wait for files to upload

![](/img/web-upload/screen-7.png)

### 8. Uploads complete

![](/img/web-upload/screen-8.png)

### 9. Check all files are in destination collection

![](/img/web-upload/screen-9.png)

### 10. Contiune to the next step
![](/img/web-upload/screen-10.png)


## How to resume data upload if you accidentally exit the Globus upload page

### 1. Go to the `PGS Calculator` page
![](/img/web-upload/screen-11.png)

### 2. Find the sample set you want to contiune to upload data
![](/img/web-upload/screen-12.png)

### 3. View destination collection and contiune to upload youe data
![](/img/web-upload/screen-13.png)