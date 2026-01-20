# Pipeline error codes

If your pipeline workflow exits with an error the exit code will be included in your notification email.

The most common type of error is a match rate error. On the calculation service the threshold for matching between score and target is 75%, which is the default in the PGS Catalog Calculator. Making sure your target genomes are imputed and in the correct genome build normally fixes this problem. If you are using the small synthetic HAPNEST dataset for testing, we [suggest some scores that will pass the threshold](https://docs.geneticscores.org/how-to/data). See the [PGS Catalog Calculator documentation](https://pgsc-calc.readthedocs.io/en/latest/explanation/match.html) for more information on variant matching.

If you submit a pipeline with more than one score: if any one score runs successfully the pipeline will succeed and you will recieve results and report. Consult the report to assess which of the scores ran successfully and which did not.


## Exit code table

| Exit code | Exception type         | Description                                                                          |
|-----------|------------------------|--------------------------------------------------------------------------------------|
| 1         | Generic exception      | There was a general problem and the workflow was unable to finish                    |
| 8         | ScoreDownloadError     | There was a problem downloading scores from the PGS Catalog                          |
| 9         | ScoreFormatError       | There was a problem with the format of the downloaded score                          |
| 10        | ScoreChecksumError     | The downloaded score was corrupt, and redownloading didn't help                      |
| 11        | QueryError             | There was a problem querying the PGS Catalog API                                     |
| 12        | InvalidAccessionError  | The provided accession doesn't exist in the PGS Catalog API                          |
| 13        | DuplicateMatchError    | Multiple matches for the same variant were found and these couldn't be deduplicated  |
| 14        | MatchRateError         | There was an insufficient variant overlap between the target genome and scoring file |
| 15        | ZeroMatchesError       | No scores passed the match rate threshold                                            |
| 16        | MatchValueError        | Bad data detected during the matching process                                        |
| 17        | BuildError             | Inconsistent genome build detected in scoring file header                            |
| 19        | GenomesNotFound        | Target genomes could not be found                                                    |
| 20        | SamplesheetFormatError | There was a problem with the structure of the input metadata                         |

## Other exit codes

If you see an exit code that's not in this table there was an error with an internal application (probably plink). The trace name of the crashing process can give you an idea of what went wrong. For example, exit code 3 can happen when plink2 fails to process an invalid VCF file. 

## What next?

If you're not sure what went wrong, please contact intervene-helpdesk@ebi.ac.uk including error message details to get more help.
