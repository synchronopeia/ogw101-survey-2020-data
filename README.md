# OGW-101 Survey Data, Definitions, and Scripts

## Overview

Client conducted a survey through a third party. Survey results were made available in an _Engagement Report_ spreadsheet, which listed each question/response as a separate row.

Client requested:

1. A version of the _Engagement Report_ spreadsheet with all occurrences of actual participant identifying information replaced by anonymous identifiers
2. A new spreadsheet organized with each participant occupying a single row so that survey responses occupy distinct columns corresponding to the question asked
3. Database storage of survey results so that subsequent surveys could be inserted enabling analysis and filtering of overall results

## Solution

### Task 1 - Replace Participant Names

A _Published Name_ of the form ```Student-${index}``` was generated for each unique participant. _Published Name_ was then used to replace the fields _Last Name_, _First Name_, _Phone Number_, _Email Address_ in the _Engagement Report_ spreadsheet. This [engagement-report](client-files/engagement-report.csv) thus becomes the basis for all further processing.

Note that a lookup spreadsheet listing _Published Name_ and the actual _Last Name_, _First Name_, _Phone Number_, _Email Address_information was provided to the client.

### Task 2 and 3 - Create a By-Participant Listing Structured for Database Storage

script [create-participant-dataset.mjs](scripts/create-participant-dataset.mjs) generates the following public files.

1. CSV [participant-recs.csv](public/csv/participant-recs.csv)
2. JSON [participant-recs.json](public/json/participant-recs.json).

## Configuration Files

1. [etc/engagement-report-schema.mjs](etc/engagement-report-schema.mjs)
2. [etc/participant-recs-schema.mjs](etc/participant-recs-schema.mjs)
3. [etc/question-defs.mjs](etc/question-defs.mjs)

## Requirements

We are using es6 modules (Node version >= 13.2.0).

See [Announcing core Node.js support for ECMAScript modules](https://medium.com/@nodejs/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663).
