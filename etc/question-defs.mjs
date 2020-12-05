const questionDefs = [
  {
    questionId: 'how-informed',
    label: 'How Informed',
    text: 'How informed are you about careers in Mental Health?',
    modalities: ['pre', 'post'],
    choices: [
      { code: '', label: 'Unspecified', score: 0 },
      { code: 'very-uninformed', label: 'Very Uninformed', score: -2 },
      { code: 'somewhat-uninformed', label: 'Somewhat Uninformed', score: -1 },
      { code: 'somewhat-informed', label: 'Somewhat Informed', score: 1 },
      { code: 'very-informed', label: 'Very Informed', score: 2 },
    ],
    slug: 'how-informed',
  },
  {
    questionId: 'how-interested',
    label: 'How Interested',
    text: 'How interested are you in pursuing a career in Mental Health?',
    modalities: ['pre', 'post'],
    choices: [
      { code: '', label: 'Unspecified', score: 0 },
      { code: 'not-interested', label: 'Not Interested', score: -1 },
      { code: 'somewhat-interested', label: 'Somewhat Interested', score: 1 },
      { code: 'very-interested', label: 'Very Interested', score: 2 },
    ],
    slug: 'how-interested',
  },
  {
    questionId: 'which-career',
    label: 'Career Choice',
    text: 'Which of the following careers in Behavioral Health interests you most?',
    modalities: [],
    choices: [
      { code: '', label: 'Unspecified', score: null },
      { code: 'clinical-therapist', label: 'Clinical Therapist (MFT, LCSW, PCC)', score: null },
      { code: 'psychiatry', label: 'Psychiatry (Nurse, MD, Technician)', score: null },
      { code: 'community-advocate', label: 'Community Advocate (Peer Support, Behavioral Health Specialist)', score: null },
      { code: 'social-work', label: 'Social Work/Public Health Administration', score: null },
      { code: 'other', label: 'Other', score: null },
    ],
    slug: 'which-of',
  },
];

export default questionDefs;
