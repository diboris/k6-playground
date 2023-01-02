# K6 playground [![Build Actions Status](https://github.com/diboris/k6-playground/actions/workflows/actions.yaml/badge.svg)](https://github.com/diboris/k6-playground/actions)

Showcase project tests [test.k6](https://test.k6.io/) using [k6](https://k6.io/)

To run locally:

```bash
k6 cloud stages-test.js && k6 cloud thresholds-test.js
```

## Reports

HTML reports are generated to k6-playground root directory. [k6-reporter](https://github.com/benc-uk/k6-reporter) library is used for reporting.
