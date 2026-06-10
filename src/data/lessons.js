export const lessons = [
  {
    id: 'intro',
    number: 1,
    title: 'Why We Are Moving to Toddle',
    paragraphs: [
      'Next academic year, we will be moving to Toddle as our main classroom experience platform for MYP Grades 6–10, instead of using Edunation for classroom communication and learning activities.',
      'Toddle will become the main platform for communicating with students and parents, sending assignments and assessments, sharing learning materials, organizing class content, following up on student learning, and making learning more visible.',
      'Toddle is not new to our school. MYP teachers already use it for unit planning, Grade 10 students use it for their Personal Project, PYP has used it for almost six years, and DP and CP started using it this year.',
      'Since your MYP unit plans are already on Toddle, you can connect teaching materials, resources, assignments, and assessments directly to your units. Toddle will also replace many things we currently use Microsoft Teams for — assigning tasks, sharing assessments, uploading materials, creating class folders, and collecting student work.',
    ],
    keyPoints: [
      'Toddle becomes the main MYP classroom platform next year',
      'Designed specifically for IB programmes',
      'Build on existing unit plans — no need to start from scratch',
      'Replaces Teams for classroom tasks and materials',
      'A testing class has been created for practice',
    ],
    uploadTask: null,
  },
  {
    id: 'teacher-interface',
    number: 2,
    title: 'Teacher Interface and Classes',
    paragraphs: [
      'When teachers log in, they will see the teacher interface. Currently, you may only see one class used mainly for unit planning.',
      'Next year, teachers will see their actual class sections on Toddle. The platform will be used not only for planning, but also for the daily classroom experience.',
    ],
    keyPoints: [
      'Teacher interface is your main workspace',
      'Next year you will see all your class sections',
      'Used for daily classroom work, not just planning',
    ],
    uploadTask: 'class-view',
  },
  {
    id: 'unit-plans',
    number: 3,
    title: 'Unit Plans',
    paragraphs: [
      'Start with unit plans — this is the area teachers are already familiar with. Toddle will import this year\'s units into next year\'s classes.',
      'The enhanced MYP unit planning template is already available on Toddle. When adding a new unit, choose the Beta version / enhanced template.',
      'Since unit plans already exist, you can easily connect resources, assessments, and class learning experiences to each unit. Fill in any missing details after Toddle moves the units to the new template.',
    ],
    keyPoints: [
      'This year\'s units will be imported to next year\'s classes',
      'Use the enhanced MYP unit planning template (Beta)',
      'Connect resources and assessments directly to units',
      'Fill in missing details after the template migration',
    ],
    uploadTask: 'unit-plan',
  },
  {
    id: 'weekly-planners',
    number: 4,
    title: 'Weekly Planners',
    paragraphs: [
      'Toddle includes an option to create weekly planners. These can be used to organize weekly learning plans and share planning with other teachers.',
      'You can potentially share weekly plans with students and parents. This feature can replace manual work when collecting weekly plans into one shared document.',
      'The goal is to make weekly planning more efficient, organized, and connected to the classroom experience.',
    ],
    keyPoints: [
      'Create and organize weekly learning plans',
      'Share plans with colleagues',
      'May be shared with students and parents',
      'Replaces manual weekly plan collection',
    ],
    uploadTask: null,
  },
  {
    id: 'assignments',
    number: 5,
    title: 'Assignments and Assessments',
    paragraphs: [
      'Assignments on Toddle work similarly to online assignments on Teams, but they are more connected to the IB learning experience.',
      'You can create assignments, choose the type, add instructions, attach resources, use or edit templates, add rubrics or grading tools, and review student submissions.',
      'Teachers can annotate student submissions directly and grade work on Toddle. Any assessment with a grading tool will automatically appear in the gradebook.',
    ],
    keyPoints: [
      'Create assignments with instructions and resources',
      'Attach templates and rubrics',
      'Students submit work; teachers annotate and grade',
      'Graded assessments appear in the gradebook automatically',
      'Use the assignment feature — not announcements — for tasks',
    ],
    uploadTask: 'assignment',
  },
  {
    id: 'portfolio',
    number: 6,
    title: 'Portfolio',
    paragraphs: [
      'The portfolio feature helps make learning more visible. Students can add work to their portfolio for teacher review. Teachers can review and decide whether to post or share it.',
      'Teachers can also add portfolio posts themselves. The portfolio showcases student learning, documents progress over time, and supports reflection.',
    ],
    keyPoints: [
      'Students add work for teacher review',
      'Teachers decide what to share with parents',
      'Showcases learning and documents progress',
      'Supports reflection and visibility',
    ],
    uploadTask: null,
  },
  {
    id: 'class-drive',
    number: 7,
    title: 'Class Drive',
    paragraphs: [
      'The Class Drive works like a shared drive for the class. Anything a teacher adds becomes directly visible to students.',
      'Use it to share files, handouts, presentations, reading materials, worksheets, and supporting resources. This can replace shared folders on Teams or OneDrive.',
    ],
    keyPoints: [
      'Shared drive visible to all students',
      'Share files, handouts, presentations, worksheets',
      'Replaces Teams/OneDrive class folders',
    ],
    uploadTask: 'class-drive',
  },
  {
    id: 'attendance',
    number: 8,
    title: 'Attendance',
    paragraphs: [
      'Teachers will be able to view attendance on Toddle, and possibly edit it depending on next year\'s school policy.',
      'The final process for attendance will depend on the policy and workflow confirmed for next year.',
    ],
    keyPoints: [
      'View attendance on Toddle',
      'Editing depends on next year\'s school policy',
      'Final workflow to be confirmed',
    ],
    uploadTask: null,
  },
  {
    id: 'gradebook',
    number: 9,
    title: 'Gradebook',
    paragraphs: [
      'The Toddle gradebook shows assessments and marks connected to classroom work. Any assignment or assessment with a grading tool will appear in the gradebook.',
      'Teachers can track student progress with marks and feedback in one place. For next academic year, report cards will remain on Edunation because of technical limitations in Toddle.',
      'Toddle supports classroom assessment tracking; official report cards will still be generated through Edunation.',
    ],
    keyPoints: [
      'All graded assessments appear in the gradebook',
      'Track progress and feedback in one place',
      'Report cards stay on Edunation next year',
      'Toddle is for classroom assessment tracking',
    ],
    uploadTask: null,
  },
  {
    id: 'announcements',
    number: 10,
    title: 'Class Announcements',
    paragraphs: [
      'Class announcements work similarly to announcements on Edunation. Use them for general class updates, reminders, and important notices.',
      'Announcements should not be used for assignments. Assignments should be created through the assignment feature so they appear properly for students, parents, calendars, and gradebooks.',
    ],
    keyPoints: [
      'Use for updates, reminders, and notices',
      'Do not use for assignments',
      'Assignments go through the assignment feature',
    ],
    uploadTask: null,
  },
  {
    id: 'calendar',
    number: 11,
    title: 'Calendar',
    paragraphs: [
      'The calendar gives teachers, students, and parents one shared view of school events, holidays, assignments, assessments, and important dates.',
      'The school calendar from the website can also be shared through Toddle. Teachers can also view the timetable through Toddle.',
    ],
    keyPoints: [
      'Shared view of events, holidays, and deadlines',
      'Assignments and assessments appear on the calendar',
      'School calendar can be integrated',
      'View timetable through Toddle',
    ],
    uploadTask: null,
  },
  {
    id: 'messages',
    number: 12,
    title: 'Messages',
    paragraphs: [
      'Toddle includes a messaging feature. Teachers can communicate with individual students, parents, and groups.',
      'This works similarly to tools we already use, but keeps school communication centralized and connected to the learning platform.',
    ],
    keyPoints: [
      'Message students, parents, and groups',
      'Centralized school communication',
      'Connected to the learning platform',
    ],
    uploadTask: null,
  },
  {
    id: 'notifications-help',
    number: 13,
    title: 'Notifications, Help, and Recycle Bin',
    paragraphs: [
      'Important tools to know: the Notifications icon for updates and alerts, the Help icon for guides and support materials, and the Recycle Bin to find and recover deleted items.',
      'These small features help teachers troubleshoot and find support while using the platform.',
    ],
    keyPoints: [
      'Notifications — check updates and alerts',
      'Help — access guides and support',
      'Recycle Bin — recover deleted items',
    ],
    uploadTask: null,
  },
  {
    id: 'mobile-app',
    number: 14,
    title: 'Mobile App',
    paragraphs: [
      'Teachers should install the Toddle Educator app on their phones. This helps access classes, check notifications, communicate when needed, and review updates on the go.',
      'Students and parents will use their own Toddle apps depending on their role.',
    ],
    keyPoints: [
      'Install the Toddle Educator app',
      'Access classes and notifications on the go',
      'Students and parents have their own apps',
    ],
    uploadTask: null,
  },
  {
    id: 'wrap-up',
    number: 15,
    title: 'Wrap-up and Next Steps',
    paragraphs: [
      'The goal is not to learn everything in one session. The main goal is to understand why we are moving to Toddle, see how it connects to what you already do, explore the main classroom features, practise using the platform, ask questions, and build confidence before next year.',
      'Toddle should make the classroom experience more organized, more connected, and more visible for teachers, students, and parents.',
    ],
    keyPoints: [
      'You don\'t need to learn everything today',
      'Build on what you already know',
      'Practise in the testing class',
      'Ask questions and build confidence',
      'Toddle makes learning more organized and visible',
    ],
    uploadTask: null,
  },
];

export const uploadTasks = [
  { id: 'class-view', label: 'Class view screenshot', lessonId: 'teacher-interface' },
  { id: 'unit-plan', label: 'Unit plan screenshot', lessonId: 'unit-plans' },
  { id: 'assignment', label: 'Assignment screenshot', lessonId: 'assignments' },
  { id: 'class-drive', label: 'Class Drive screenshot', lessonId: 'class-drive' },
];

export const TOTAL_LESSONS = lessons.length;
export const TOTAL_UPLOADS = uploadTasks.length;
export const QUIZ_PASS_THRESHOLD = 70;
