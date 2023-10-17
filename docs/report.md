---
sidebar_position: 4
sidebar_label: Explanation - PGS Report
---

# Results explanation

## View job

When your pipeline job has finished we'll send you an email. 

Once you've received the email, you can view your job and select <button name="button">`Download results`</button>:

![](/img/report/view.png)

:::caution
* If your job has failed (status: "Error") you won't be able to download any results
:::


---

## Download files

Three results files are available:

* A HTML report that you can open in a web browser
* A variant matching log, in gzip compressed CSV format
* Aggregated polygenic scores, in gzip compressed text format

![](/img/report/download.png)

If you double click the report it should open in your web browser. 

:::tip
* On macOS you may get Error 79 when trying to open the compressed CSV file
* You can use a program like [The Unarchiver](https://theunarchiver.com/) to open the file
:::

---

## Report structure

### Scoring file metadata

:::tip
Please remember to cite polygenic score authors and check the license of scores if you reuse them.
:::

![](/img/report/report-1.png)

### Variant matching details

:::tip
It's important that input target genomes match the scoring files well. This section describes how well your data overlap. 
:::

![](/img/report/report-2.png)

### Score distribution

:::tip
This density plot is a useful summary of the calculated scores.
:::

![](/img/report/report-3.png)

:::tip Dude, where's my scores?
Calculated scores are stored in the compressed CSV file, not the HTML report
:::
