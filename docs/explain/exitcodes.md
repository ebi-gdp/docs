# Job error codes

If your workflow exits with an error the exit code will be included in your notification email.

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

The most common type of error is a match rate error. Making sure your target genomes are [imputed and in the correct genome build](https://pgsc-calc.readthedocs.io/en/latest/explanation/match.html) normally fixes this problem.

## What next?

If you're not sure what went wrong, please contact intervene-helpdesk@ebi.ac.uk including error message details to get more help.