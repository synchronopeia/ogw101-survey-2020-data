const anonymousRawEngagementReportSchema = [
  {
    fieldId: 'engagement-id',
    default: '',
  }, {
    fieldId: 'published-name',
    colLabel: 'Last Name',
    default: '',
  }, {
    fieldId: 'engagement-type-code',
    colLabel: 'Engagement Type',
    default: '',
  }, {
    fieldId: 'interest-rating',
    colLabel: 'Interest Rating',
    default: '',
  }, {
    fieldId: 'question-string',
    colLabel: 'Question Asked',
    default: '',
  }, {
    fieldId: 'answer-string',
    colLabel: 'Answer Given',
    default: '',
  },
];

export default anonymousRawEngagementReportSchema;
