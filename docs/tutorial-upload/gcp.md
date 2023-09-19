---
sidebar_position: 2
sidebar_label: Globus Personal Connect
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

* If you'd like to test the platform we recommend using this [small synthetic dataset](https://drive.google.com/drive/folders/1GsRZFB6V4ifi7PcVtdMX4ZphQgUrDI0n?usp=sharing) ([HAPNEST](https://pubmed.ncbi.nlm.nih.gov/37647640/))
  
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
* Once Globus Personal Connect is installed, you need to configure preferences to
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





