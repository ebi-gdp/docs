---
sidebar_position: 5
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

## Why have my results disappeared?

Rsults are only stored on your `GeneticScores.org` account for about 2 weeks after a job finishes.

After this any results are automatically deleted to help keep your data safe.

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


This section provides a high level overview of the report structure. The report is explained in more detail [in the PGS Catalog Calculator documentation](https://pgsc-calc.readthedocs.io/en/latest/explanation/output.html#report)

An example report generated from synthetic test data [is available here.](pathname:///files/test_report.html)

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
