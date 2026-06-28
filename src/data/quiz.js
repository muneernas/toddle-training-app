export const quizQuestions = [
  {
    id: 'q1',
    type: 'single',
    question: 'What is Toddle for MYP Grades 6–10 this academic year?',
    options: [
      'A replacement for Edunation report cards only',
      'The main classroom experience platform',
      'A tool only for unit planning',
      'A replacement for the school website',
    ],
    correct: 1,
    explanation: 'Toddle is the main classroom platform for communication, assignments, materials, and learning activities.',
  },
  {
    id: 'q2',
    type: 'truefalse',
    question: 'MYP teachers are already using Toddle for unit planning.',
    correct: true,
    explanation: 'MYP teachers already use Toddle for unit planning, so the transition builds on existing work.',
  },
  {
    id: 'q3',
    type: 'multiselect',
    question: 'Which tasks can Toddle replace that we currently do on Microsoft Teams? (Select all that apply)',
    options: [
      'Assigning online tasks',
      'Sharing summative assessments',
      'Uploading materials',
      'Generating official report cards',
    ],
    correct: [0, 1, 2],
    explanation: 'Toddle replaces Teams for classroom tasks and materials. Teams is still used for online meetings and live classes. Report cards stay on Edunation this year.',
  },
  {
    id: 'q4',
    type: 'fillblank',
    question: 'When adding a new unit, teachers should choose the ______ version / enhanced template.',
    correct: ['beta', 'Beta'],
    explanation: 'The enhanced MYP unit planning template (Beta) is the recommended template for new units.',
  },
  {
    id: 'q5',
    type: 'single',
    question: 'Where should teachers create assignments (not announcements)?',
    options: [
      'Class Announcements',
      'Messages',
      'Assignment feature',
      'Class Drive',
    ],
    correct: 2,
    explanation: 'Assignments must be created through the assignment feature so they appear in calendars and gradebooks.',
  },
  {
    id: 'q6',
    type: 'truefalse',
    question: 'Report cards remain on Edunation this academic year.',
    correct: true,
    explanation: 'Due to technical limitations, official report cards will still be generated through Edunation.',
  },
  {
    id: 'q7',
    type: 'matching',
    question: 'Match each Toddle feature to its main purpose:',
    pairs: [
      { left: 'Class Drive', right: 'Share files visible to students' },
      { left: 'Portfolio', right: 'Showcase and document student learning' },
      { left: 'Gradebook', right: 'Track assessment marks and feedback' },
      { left: 'Calendar', right: 'View events, deadlines, and timetable' },
    ],
    explanation: 'Each feature serves a distinct purpose in the classroom experience.',
  },
  {
    id: 'q8',
    type: 'single',
    question: 'What happens when an assessment has a grading tool attached?',
    options: [
      'It is sent to parents automatically',
      'It appears in the gradebook automatically',
      'It is added to the portfolio only',
      'It is deleted after grading',
    ],
    correct: 1,
    explanation: 'Any assessment with a grading tool automatically appears in the gradebook.',
  },
  {
    id: 'q9',
    type: 'fillblank',
    question: 'Teachers can ______ student submissions directly on Toddle.',
    correct: ['annotate', 'Annotate'],
    explanation: 'Teachers can annotate student submissions directly when reviewing work.',
  },
  {
    id: 'q10',
    type: 'multiselect',
    question: 'What can weekly planners be used for? (Select all that apply)',
    options: [
      'Organizing weekly learning plans',
      'Sharing planning with families and other teachers',
      'Replacing the gradebook',
      'Sharing plans directly with students',
    ],
    correct: [0, 1],
    explanation: 'Weekly planners help organize and share planning with colleagues and families. They are not shared directly with students.',
  },
  {
    id: 'q11',
    type: 'truefalse',
    question: 'Class announcements should be used to assign homework and assessments.',
    correct: false,
    explanation: 'Announcements are for updates and notices. Assignments should use the assignment feature.',
  },
  {
    id: 'q12',
    type: 'single',
    question: 'Who should install the Toddle Educator app?',
    options: [
      'Students only',
      'Parents only',
      'Teachers',
      'School administrators only',
    ],
    correct: 2,
    explanation: 'Teachers should install the Toddle Educator app. Students and parents have their own apps.',
  },
  {
    id: 'q13',
    type: 'matching',
    question: 'Match each tool to what it helps you do:',
    pairs: [
      { left: 'Notifications icon', right: 'Check updates and alerts' },
      { left: 'Help icon', right: 'Access guides and support' },
      { left: 'Recycle Bin', right: 'Recover deleted items' },
    ],
    explanation: 'These tools help teachers stay informed and troubleshoot issues.',
  },
  {
    id: 'q14',
    type: 'fillblank',
    question: 'Anything added to the Class Drive becomes directly ______ to students.',
    correct: ['visible', 'Visible'],
    explanation: 'Class Drive files are immediately visible to all students in the class.',
  },
  {
    id: 'q15',
    type: 'single',
    question: 'What is the main advantage of Toddle for IB teachers?',
    options: [
      'It is cheaper than other platforms',
      'It is designed specifically for IB programmes',
      'It replaces all school systems',
      'It only works on mobile devices',
    ],
    correct: 1,
    explanation: 'Toddle is designed for IB programmes, aligning with how MYP teachers plan, teach, and assess.',
  },
  {
    id: 'q16',
    type: 'multiselect',
    question: 'Who can teachers communicate with through Toddle Messages? (Select all that apply)',
    options: [
      'Individual students',
      'Parents',
      'Groups',
      'External email addresses only',
    ],
    correct: [0, 1, 2],
    explanation: 'Toddle messaging supports communication with students, parents, and groups within the platform.',
  },
  {
    id: 'q17',
    type: 'truefalse',
    question: 'PYP teachers, students, and parents have been using Toddle for almost six years.',
    correct: true,
    explanation: 'PYP has used Toddle for nearly six years, so the platform is well established at our school.',
  },
  {
    id: 'q18',
    type: 'single',
    question: 'What should teachers do after Toddle moves units to the new template?',
    options: [
      'Delete all existing units and start over',
      'Fill in the missing details',
      'Export units back to Edunation',
      'Disable the enhanced template',
    ],
    correct: 1,
    explanation: 'After migration, teachers should fill in any missing details in the enhanced template.',
  },
  {
    id: 'q19',
    type: 'single',
    question: 'What is the portfolio mainly used for?',
    options: [
      'Storing attendance records',
      'Making learning visible and documenting progress',
      'Sending report cards to parents',
      'Managing the school calendar',
    ],
    correct: 1,
    explanation: 'The portfolio showcases student learning and documents progress over time.',
  },
  {
    id: 'q20',
    type: 'truefalse',
    question: 'The goal of this training is to learn every Toddle feature in one session.',
    correct: false,
    explanation: 'The goal is to understand the main features, practice, and build confidence — not learn everything at once.',
  },
];

export function scoreAnswer(question, answer) {
  switch (question.type) {
    case 'single':
      return answer === question.correct;
    case 'truefalse':
      return answer === question.correct;
    case 'multiselect': {
      if (!Array.isArray(answer) || answer.length !== question.correct.length) return false;
      const sorted = [...answer].sort();
      const expected = [...question.correct].sort();
      return sorted.every((v, i) => v === expected[i]);
    }
    case 'fillblank':
      return question.correct.some(
        (c) => c.toLowerCase() === String(answer || '').trim().toLowerCase()
      );
    case 'matching': {
      if (!answer || typeof answer !== 'object') return false;
      return question.pairs.every((pair) => answer[pair.left] === pair.right);
    }
    default:
      return false;
  }
}

export function calculateScore(answers) {
  let correct = 0;
  quizQuestions.forEach((q) => {
    if (scoreAnswer(q, answers[q.id])) correct++;
  });
  return Math.round((correct / quizQuestions.length) * 100);
}
