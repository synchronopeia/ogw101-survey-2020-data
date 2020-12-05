/* eslint-disable import/extensions */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import csv from 'csv';

import slugify from '@synchronopeia/slugify';
import { fromCsv, toCsv } from '@synchronopeia/csv-recordset';

import anonymousRawEngagementReportSchema from '../etc/engagement-report-schema.mjs';
import responseByParticipantSchema from '../etc/participant-recs-schema.mjs';
import questionDefs from '../etc/question-defs.mjs';

const INPUT_CSV_FILE = join('client-files', 'engagement-report.csv');
const OUTPUT_CSV_FILE = join('public', 'csv', 'participant-recs.csv');
const OUTPUT_JSON_FILE = join('public', 'json', 'participant-recs.json');

const whichCareerQuestionChoices = questionDefs.find((def) => (def.questionId === 'which-career')).choices;

const CAREER_CODES = whichCareerQuestionChoices.filter((q) => q.code).map((q) => q.code); // this excludes the non-response ''

const createRec = (schemaDefs, participantId) => {
  const rec = {};
  schemaDefs.forEach((schemaDef) => {
    if (schemaDef.fieldId === 'participant-id') rec[schemaDef.fieldId] = participantId;
    else rec[schemaDef.fieldId] = schemaDef.default;
  });
  return rec;
};

const parseFieldId = (questionString) => {
  let fieldId = '';
  const slugSegments = questionString.toLowerCase().split(' ');
  const isPost = (slugSegments[slugSegments.length - 1] === '(post)');
  const slug = slugSegments.splice(0, 2).join('-');
  if (slug === 'which-of') fieldId = 'which-career-code';
  else if (slug === 'what-school') fieldId = 'school-code';
  else if (slug === 'how-interested') fieldId = `${(isPost ? 'post' : 'pre')}-how-interested-code`;
  else if (slug === 'how-informed') fieldId = `${(isPost ? 'post' : 'pre')}-how-informed-code`;
  return fieldId;
};

const buildParticipantRecordset = (engagementRecs) => {
  const recs = [];
  engagementRecs.forEach((srcRec) => {
    const participantId = srcRec['published-name'].toLowerCase();
    let rec = recs.find((r) => (r['participant-id'] === participantId));
    if (!rec) {
      rec = createRec(responseByParticipantSchema, participantId);
      rec['published-name'] = srcRec['published-name'];
      rec['engagement-type-code'] = slugify(srcRec['engagement-type-code']);
      rec['interest-rating'] = slugify(srcRec['interest-rating']);
      recs.push(rec);
    }
    const fieldId = parseFieldId(srcRec['question-string']);
    const answerCode = slugify(srcRec['answer-string']);
    if (!fieldId) {
      return;
    }
    if (fieldId === 'which-career-code') {
      if (!answerCode) return; // '' is already the default
      // otherwise try to match the a code mapped into CAREER_CODES
      const careerCode = CAREER_CODES.find((s) => answerCode.startsWith(s));
      if (careerCode === undefined) throw Error(`MISSING_CAREER_CODE: couldn't find '${answerCode}'.`);
      rec[fieldId] = careerCode;
      return;
    }
    rec[fieldId] = answerCode;
  });

  return recs;
};

csv.parse(readFileSync(INPUT_CSV_FILE, 'utf-8'), {
  columns: false,
  skip_empty_lines: true,
  trim: true,
  from: 1,
}, (parseErr, inputTable) => {
  if (parseErr) throw Error(parseErr);
  const engagementRecs = fromCsv(inputTable, anonymousRawEngagementReportSchema);
  const participantRecs = buildParticipantRecordset(engagementRecs);

  writeFileSync(OUTPUT_JSON_FILE, JSON.stringify(participantRecs));

  const participantTable = toCsv(participantRecs, responseByParticipantSchema);
  csv.stringify(participantTable, (stringifyErr, participantTableString) => {
    if (stringifyErr) throw Error(stringifyErr);
    writeFileSync(OUTPUT_CSV_FILE, participantTableString);
  });
});
