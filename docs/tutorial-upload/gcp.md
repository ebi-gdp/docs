---
sidebar_label: Globus Connect Personal
description: How to use Globus Connect Personal to upload data
---

# Upload genomes with Globus Connect Personal

Uploading data with [Globus Connect
Personal](https://www.globus.org/globus-connect-personal) (GCP) is good if:

* You need to transfer large amounts of data (tens or hundreds of gigabytes)
* You want to be able to automatically pause and resume your data transfer
  * This is also useful if you have a poor internet connection
* You are happy to install a special application to transfer data

In other cases it may be simpler to [upload data using your web browser](web.md).

:::tip
* If you'd like to test the platform we recommend using this [small synthetic dataset](https://ftp.ebi.ac.uk/pub/databases/spot/intervene/) ([HAPNEST](https://pubmed.ncbi.nlm.nih.gov/37647640/))
  * The synthetic data are genome build version `GRCh38`
* The small HAPNEST synthetic data have been tested with the polygenic scores below:
  * [PGS000882](https://www.pgscatalog.org/score/PGS000882/) (vitamin D
  measurement)
  * [PGS001229](https://www.pgscatalog.org/score/PGS001229/)
  (standing height)
:::

## Before you start

* You'll need to install [Globus Connect
Personal](https://www.globus.org/globus-connect-personal)
* Please take note of the owner identity (email address) that you use to log in to
Globus
  * You'll need to enter this later on the platform
* In Globus terminology a collection is a named set of files, hierarchically
organized in folders, associated with a specific storage gateway.
  * Practically speaking this is your computer
* Once Globus Connect Personal is installed, you need to configure preferences to
give Globus permission to access the location where your data are (step 3) one time only

:::note

The examples below are from a computer running macOS. If you use Linux or
Windows GCP may look different. Full Globus configuration instructions are
available for
[macOS](https://docs.globus.org/how-to/globus-connect-personal-mac/#configuration),
[Windows](https://docs.globus.org/how-to/globus-connect-personal-windows/#configuration),
and [Linux](https://docs.globus.org/how-to/globus-connect-personal-linux/)
users.

:::

## Step by step guide

### 1. Enter your Globus account identity

![](/img/web-upload/screen-1.png)

### 2. View destination collection

![](/img/web-upload/screen-2.png)

### 3. Grant Globus permission to access your files

![](/img/app-upload/screen-3.png)

![](/img/app-upload/screen-5.png)

### 4. Find your local collection

![](/img/app-upload/screen-6.png)

![](/img/app-upload/screen-7.png)

### 5. Find the folder containing your data

![](/img/app-upload/screen-8.png)

### 6. Select files to upload

![](/img/app-upload/screen-9.png)

### 7. Start data transfer

![](/img/app-upload/screen-10.png)

### 8. Check if your files have uploaded

![](/img/app-upload/screen-11.png)

## Globus Connect Personal Troubleshooting

For any issues encountered while transferring data using the Globus Connect Personal (GCP) app, we recommend first consulting the official Globus documentation: [Globus Connect Personal Troubleshooting Guide](https://docs.globus.org/globus-connect-personal/troubleshooting-guide/#troubleshooting_problems_accessing_a_file_directory_or_removable_drive) for possible solutions.

Additionally, if you find that your collection is classified as a **High Assurance Collection** and you are unable to transfer data to the collection we created for you, we provide the following solution:

* If you encounter a transfer issue due to the High Assurance setting (as shown in the figure):
  ![](/img/app-upload/screen-12.png)
1. Delete the existing Globus Connect Personal (GCP) configuration
  ![](/img/app-upload/screen-13.png)

2. Re-login and create a new local collection

  * When setting up the new collection, ensure that the High Assurance option is **NOT** selected.
  ![](/img/app-upload/screen-14.png)
