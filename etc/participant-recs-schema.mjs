const responseByParticipantSchema = [
  {
    fieldId: 'participant-id',
    default: '',
  }, {
    fieldId: 'published-name',
    default: '',
    colLabel: 'Published Name',
    colOutputMode: 'include',
  }, {
    fieldId: 'school-code',
    default: '',
    colLabel: 'School',
    colOutputMode: 'include',
  }, {
    fieldId: 'engagement-type-code',
    default: '',
    colLabel: 'Engagement Type',
    colOutputMode: 'include',
  }, {
    fieldId: 'interest-rating',
    default: '',
    colLabel: 'Interest Rating',
    colOutputMode: 'include',
  }, {
    fieldId: 'pre-how-informed-code',
    default: '',
    colLabel: 'Pre How Informed',
    colOutputMode: 'include',
  }, {
    fieldId: 'post-how-informed-code',
    default: '',
    colLabel: 'Post How Informed',
    colOutputMode: 'include',
  }, {
    fieldId: 'pre-how-interested-code',
    default: '',
    colLabel: 'Pre How Interested',
    colOutputMode: 'include',
  }, {
    fieldId: 'post-how-interested-code',
    default: '',
    colLabel: 'Post How Interested',
    colOutputMode: 'include',
  }, {
    fieldId: 'which-career-code',
    default: '',
    colLabel: 'Which Career',
    colOutputMode: 'include',
  },
];

export default responseByParticipantSchema;
