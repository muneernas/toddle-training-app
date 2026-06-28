export const lessons = [
  {
    id: 'intro',
    number: 1,
    title: 'Why We Are Moving to Toddle',
    paragraphs: [
      'This academic year, Toddle is our main classroom experience platform for MYP Grades 6–10, instead of using Edunation for classroom communication and learning activities.',
      'Toddle is the main platform for communicating with students and parents, sending assignments and assessments, sharing learning materials, organizing class content, following up on student learning, and making learning more visible.',
      'Toddle is not new to our school. MYP teachers already use it for unit planning, Grade 10 students use it for their Personal Project, PYP has used it for almost six years, and DP and CP started using it last year.',
      'Since your MYP unit plans are already on Toddle, you can connect teaching materials, resources, assignments, and assessments directly to your classroom — not only to units. Toddle replaces many things we currently use Microsoft Teams for — assigning tasks, sharing assessments, uploading materials, creating class folders, and collecting student work. **Microsoft Teams is still used for online meetings and live classes.**',
    ],
    keyPoints: [
      'Toddle is the main MYP classroom platform this year',
      'Designed specifically for IB programmes',
      'Build on existing unit plans — no need to start from scratch',
      'Replaces Teams for classroom tasks and materials',
      'Teams remains for online meetings and live classes',
    ],
    showTryInToddle: true,
  },
  {
    id: 'teacher-interface',
    number: 2,
    title: 'Teacher Interface and Classes',
    paragraphs: [
      'When you log in, you see the teacher interface. You will find your classes on Toddle the platform is used not only for planning, but also for the daily classroom experience.',
      'The screenshot below shows the main teacher homepage your starting point for modules, projects, and class sections.',
    ],
    keyPoints: [
      'Teacher interface is your main workspace',
      'You can see all your class sections',
      'Used for daily classroom work, not just planning',
    ],
    media: [
      {
        type: 'image',
        src: 'media/lessons/dashboard.png',
        alt: 'Toddle teacher homepage with modules, projects, and class cards',
        step: 1,
        title: 'Explore the teacher homepage',
        description:
          'After logging in, you land on the teacher homepage. Use the Modules section for school-wide tools (announcements, calendar, messaging, timetable, and more). Scroll down to Projects and Classes to open the class sections you teach. This is your main workspace for daily classroom work.',
      },
    ],
  },
  {
    id: 'unit-plans',
    number: 3,
    title: 'Unit Plans',
    paragraphs: [
      'Start with unit plans this is the area teachers are already familiar with. Your units for this year are available in your Toddle classes.',
      'Existing unit plans are being migrated to the enhanced MYP unit planning template. After migration, open each unit and review every section to make sure all required fields are complete.',
      'The enhanced MYP unit planning template is available on Toddle. When adding a new unit, choose the Beta version / enhanced template.',
      'Since unit plans already exist, you can connect resources, assessments, and class learning experiences directly to each unit. Fill in any missing details after Toddle moves the units to the new template.',
    ],
    keyPoints: [
      'Review migrated units in the enhanced MYP template (Beta)',
      'Use the Beta / enhanced template for new units',
      'Connect resources and assessments directly to units',
      'Complete any missing fields after the template migration',
    ],
    media: [
      {
        type: 'image',
        src: 'media/lessons/beta-version.png',
        alt: 'Create menu showing Subject specific unit and MYP Beta Planner template',
        step: 1,
        title: 'Choose the MYP Beta Planner template',
        description:
          'Open Unit planning inside your class, then click + Create. Select Subject specific unit, then choose MYP Beta Planner (the enhanced template). Use this Beta version for all new units so your planning matches the updated MYP format.',
      },
    ],
  },
  {
    id: 'weekly-planners',
    number: 4,
    title: 'Weekly Planners',
    paragraphs: [
      'Toddle includes an option to create weekly planners. These can be used to organize weekly learning plans and share planning with other teachers.',
      'Weekly plans can be shared with **families and other teachers** not with students. This feature can replace manual work when collecting weekly plans into one shared document.',
      'The goal is to make weekly planning more efficient, organized, and connected to the classroom experience.',
      'Watch the walkthrough below to see how weekly planners work in Toddle.',
    ],
    keyPoints: [
      'Create and organize weekly learning plans',
      'Share plans with colleagues and families',
      'Not shared directly with students',
      'Replaces manual weekly plan collection',
    ],
    media: [
      {
        type: 'video',
        src: 'media/lessons/weekly-planner.mp4',
        alt: 'Video walkthrough of creating a weekly planner in Toddle',
        step: 1,
        title: 'Create and organize a weekly plan',
        description:
          'This video walks through opening the weekly planner, adding learning for each day of the week, linking activities to your unit, and organizing the plan so it can be shared with colleagues and families.',
      },
    ],
  },
  {
    id: 'assignments',
    number: 5,
    title: 'Assignments and Assessments',
    paragraphs: [
      'Assignments on Toddle work similarly to online assignments on Teams, but they are more connected to the IB learning experience.',
      'You can create assignments, choose the type, add instructions, attach resources, use or edit templates, add rubrics or grading tools, and review student submissions.',
      'Teachers annotate student submissions directly and grade work on Toddle. Any assessment with a grading tool automatically appears in the gradebook.',
      'Watch the walkthrough below to see how to create and publish an assignment. For more guidance, see the [Toddle Educator Help Center](https://helpcenter.toddleapp.com/en/collections/15991091-educators).',
    ],
    keyPoints: [
      'Create assignments with instructions and resources',
      'Attach templates and rubrics',
      'Students submit work; teachers annotate and grade',
      'Graded assessments appear in the gradebook automatically',
      'Use the assignment feature — not announcements — for tasks',
    ],
    assignmentTypes: true,
    media: [
      {
        type: 'video',
        src: 'media/lessons/assignments.mp4',
        alt: 'Video walkthrough of creating assignments and assessments in Toddle',
        step: 1,
        title: 'Create and publish an assignment',
        description:
          'This video shows how to open Assignments from the Classroom menu, click Create, choose the assignment type, add instructions and attached resources, set a rubric or grading tool, choose a due date, and publish the task so students can submit their work.',
      },
      {
        type: 'image',
        src: 'media/lessons/microsoft-account.png',
        alt: 'Connecting a Microsoft account in Toddle settings',
        step: 2,
        title: 'Connect your Microsoft account',
        description:
          'To import files from OneDrive or SharePoint when creating assignments, connect your Microsoft account in Toddle settings first. This one-time setup lets you browse and attach files from your school Microsoft drive without leaving Toddle.',
      },
    ],
  },
  {
    id: 'portfolio',
    number: 6,
    title: 'Portfolio',
    paragraphs: [
      'The portfolio feature helps make learning more visible. You can document evidence by creating **class portfolio posts**, and students can also create posts — but student posts require **teacher approval** before they are published.',
      'Teachers review student submissions and decide whether to post or share them. The portfolio showcases student learning, documents progress over time, and supports reflection.',
      'Portfolio is a valuable addition for classes that benefit from documenting process, reflection, and visible learning over time — especially where you want families to see growth beyond graded work.',
      'The steps below show how to open Portfolio, create posts, and review student work.',
    ],
    keyPoints: [
      'Teachers create class portfolio posts to document evidence',
      'Students can create posts that require teacher approval',
      'Showcases learning and documents progress over time',
      'Especially useful for classes that need visible learning documentation',
    ],
    media: [
      {
        type: 'image',
        src: 'media/lessons/student-portfolio-1.png',
        alt: 'Classroom menu with Portfolio option highlighted',
        step: 1,
        title: 'Open Portfolio from Classroom',
        description:
          'Inside your class, click Classroom in the left sidebar. From the menu that opens, select Portfolio (shortcut P) to open the class portfolio workspace.',
      },
      {
        type: 'image',
        src: 'media/lessons/student-portfolio-2.png',
        alt: 'Portfolio In approval tab with Create post button',
        step: 2,
        title: 'Review posts or create a new one',
        description:
          'Use the tabs at the top — Published, Scheduled, Draft, and In approval — to manage portfolio posts. Student submissions waiting for your review appear under In approval. Click + Create post to add a portfolio entry yourself.',
      },
      {
        type: 'image',
        src: 'media/lessons/student-portfolio-3.png',
        alt: 'New post screen with Photo, Video, File, and Note options',
        step: 3,
        title: 'Choose what to add to the post',
        description:
          'When creating a post, choose the type of evidence to share: Photo, Video, File, or Note. Pick the format that best shows the student\'s learning — for example, a photo of classwork, a video reflection, or a written note.',
      },
      {
        type: 'image',
        src: 'media/lessons/student-portfolio-4.png',
        alt: 'Student portfolio feed showing a published post with image and caption',
        step: 4,
        title: 'View published portfolio posts',
        description:
          'Once approved and published, posts appear on the student\'s portfolio feed with the title, description, date, and any attached media. Families can view these posts to see learning progress over time.',
      },
    ],
  },
  {
    id: 'class-drive',
    number: 7,
    title: 'Class Drive',
    paragraphs: [
      'The Class Drive works like a shared drive for the class. Anything a teacher adds is **visible to students and families**.',
      'Use it to share files, handouts, presentations, reading materials, worksheets, and supporting resources. This can replace shared folders on Teams or OneDrive.',
      'Organize the Class Drive with clear folder names and unit structure so students and families can find materials easily.',
      'Follow the steps below to open Class Drive and add materials for your class.',
    ],
    keyPoints: [
      'Shared drive visible to students and families',
      'Share files, handouts, presentations, worksheets',
      'Organize folders so file sharing is easy to use',
      'Replaces Teams/OneDrive class folders',
    ],
    media: [
      {
        type: 'image',
        src: 'media/lessons/class-drive-1.png',
        alt: 'Classroom menu with Class drive option and folder view',
        step: 1,
        title: 'Open Class Drive',
        description:
          'Inside your class, click Classroom in the left sidebar, then select Class drive (shortcut D). You will see folders and files already shared with the class — anything you add here is visible to students and families immediately.',
      },
      {
        type: 'image',
        src: 'media/lessons/class-drive-2.png',
        alt: 'Create menu in Class Drive with upload and link options',
        step: 2,
        title: 'Add files or links for students',
        description:
          'Click + Create to add materials. You can upload a file or folder from your device, connect Google Drive or OneDrive, or create a folder, link, or Microsoft document. Organize resources into unit folders so students and families can find them easily.',
      },
      {
        type: 'image',
        src: 'media/lessons/microsoft-account.png',
        alt: 'Connecting a Microsoft account to import from OneDrive',
        step: 3,
        title: 'Connect Microsoft to import from Drive',
        description:
          'To import files from OneDrive or SharePoint in Class Drive, connect your Microsoft account in Toddle settings first. This lets you attach school files directly without downloading them to your device.',
      },
    ],
  },
  {
    id: 'attendance',
    number: 8,
    title: 'Attendance',
    paragraphs: [
      'Teachers can view attendance on Toddle. **Admins take attendance daily each morning**; teachers can view records and **edit them if needed** when corrections are required.',
      'From your Toddle homepage, open your class, then use the attendance view to review or update each student for the day. The screenshots below walk through the process step by step.',
    ],
    keyPoints: [
      'Open your class from the homepage',
      'Admins mark attendance each morning',
      'Teachers can view and edit if needed',
      'Select the date you want to review in the attendance grid',
    ],
    media: [
      {
        type: 'image',
        src: 'media/lessons/attendance1.png',
        alt: 'Toddle homepage showing class cards in the Classes section',
        step: 1,
        title: 'Open your class',
        description:
          'From the Toddle homepage, scroll to the Classes section. Click your class — for example, Grade 6 A - Homeroom — to open that class workspace.',
      },
      {
        type: 'image',
        src: 'media/lessons/attendance2.png',
        alt: 'Class attendance overview with student names and a weekly date grid',
        step: 2,
        title: 'Open the attendance view for a date',
        description:
          'Inside the class, open Attendance. You will see a weekly grid with student names on the left and dates across the top. Click the date column you want to review (for example, 15 Mon) to open that day\'s attendance.',
      },
      {
        type: 'image',
        src: 'media/lessons/attendance3.png',
        alt: 'Mark attendance screen with Present, Absent, and other status buttons per student',
        step: 3,
        title: 'Review or update each student\'s status',
        description:
          'On the Mark attendance screen, set each student\'s status using the buttons: P (Present), A (Absent), V (Vacation/leave), L (Late), and M (Medical). Use Mark all Present if everyone attended, and add an optional note in the Note column when needed.',
      },
    ],
  },
  {
    id: 'gradebook',
    number: 9,
    title: 'Gradebook',
    paragraphs: [
      'The Toddle gradebook shows assessments and marks connected to classroom work in one place — any assignment or assessment with a grading tool appears automatically, and you can track student progress with marks and feedback. Official report cards for this academic year remain on Edunation because of technical limitations in Toddle; Toddle is used for classroom assessment tracking while report cards are still generated through Edunation.',
    ],
    keyPoints: [
      'All graded assessments appear in the gradebook',
      'Track progress and feedback in one place',
      'Report cards stay on Edunation this year',
      'Toddle is for classroom assessment tracking',
    ],
    media: [
      {
        type: 'image',
        src: 'media/lessons/gradebook-1.png',
        alt: 'Gradebook menu with Assessment gradebook option highlighted',
        step: 1,
        title: 'Open the Assessment gradebook',
        description:
          'Inside your class, click Gradebook in the left sidebar. From the menu, select Assessment gradebook (shortcut G) to open the marks view for all graded assignments and assessments.',
      },
      {
        type: 'image',
        src: 'media/lessons/gradebook-2.png',
        alt: 'Assessment gradebook grid with student marks and rubric columns',
        step: 2,
        title: 'Review marks and assessment columns',
        description:
          'The gradebook shows each student\'s marks across assessments. Use the term dropdown to switch grading periods, scroll horizontally to see all assignments, and check criteria columns (A, B, C, D, rubrics, checklists). Any assignment with a grading tool appears here automatically.',
      },
    ],
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
    media: [
      {
        type: 'image',
        src: 'media/lessons/announcements-1.png',
        alt: 'Class sidebar with Class announcements option highlighted',
        step: 1,
        title: 'Open Class Announcements from your class',
        description:
          'Inside your class, click Class announcements in the left sidebar. This opens the announcements area for that class, where you can view published notices and create new ones.',
      },
      {
        type: 'image',
        src: 'media/lessons/announcements-2.png',
        alt: 'Class announcements page with Create announcement button',
        step: 2,
        title: 'Create an announcement',
        description:
          'On the Class announcements page, click + Create announcement. Add a title and message, choose your audience, and publish. Use the All published, Drafts, Scheduled, and Bin tabs to manage your posts. Remember: use announcements for notices only — create assignments through the Assignments feature.',
      },
    ],
  },
  {
    id: 'calendar',
    number: 11,
    title: 'Calendar and Timetable',
    paragraphs: [
      'The calendar gives teachers, students, and parents one shared view of school events, holidays, assignments, assessments, and important dates. The school calendar from the website can also be shared through Toddle.',
      'You can also view your **timetable** through Toddle — open the Timetable module from the homepage to see your weekly schedule.',
      'The steps below show how to open the calendar, filter by class, and access your timetable.',
    ],
    keyPoints: [
      'Open Calendar from the homepage Modules section',
      'Filter by class and assignment type using the sidebar',
      'View your timetable from the Timetable module',
      'Assignments, assessments, and school events all appear on the calendar',
    ],
    media: [
      {
        type: 'image',
        src: 'media/lessons/calendar1.png',
        alt: 'Toddle weekly calendar with filters and assignment tags',
        step: 1,
        title: 'Open the Calendar and explore the weekly view',
        description:
          'From the Toddle homepage, click Calendar in the Modules section. The weekly view shows school events, holidays, and class activities across the week. Use the left sidebar to filter by assignment tags (summative, formative, learning experiences, and more) and to show whole-school events or holidays.',
      },
      {
        type: 'image',
        src: 'media/lessons/calendar2.png',
        alt: 'Filter classes dropdown to show events for specific classes',
        step: 2,
        title: 'Filter the calendar by class',
        description:
          'Click Classes at the top of the sidebar to choose which classes appear on your calendar. Search or select specific classes, then click Apply. This helps you focus on the deadlines that matter for the classes you teach.',
      },
      {
        type: 'image',
        src: 'media/lessons/timetable-1.png',
        alt: 'Timetable module on the Toddle homepage',
        step: 3,
        title: 'Open the Timetable module',
        description:
          'From the Toddle homepage, click Timetable in the Modules section to open your weekly schedule.',
      },
      {
        type: 'image',
        src: 'media/lessons/timetable-2.png',
        alt: 'Weekly timetable view showing class periods',
        step: 4,
        title: 'View your weekly timetable',
        description:
          'The timetable shows your class periods for the week. Use it alongside the calendar to plan your teaching and stay on top of deadlines.',
      },
    ],
  },
  {
    id: 'messages',
    number: 12,
    title: 'Messages',
    paragraphs: [
      'Toddle includes a messaging feature. Teachers can communicate with individual students, parents, and groups.',
      'This works similarly to tools we already use, but keeps school communication centralized and connected to the learning platform.',
      'Follow the steps below to message students and families in Toddle.',
    ],
    keyPoints: [
      'Message students, parents, and groups',
      'Centralized school communication',
      'Connected to the learning platform',
    ],
    media: [
      {
        type: 'image',
        src: 'media/lessons/communicating-1.png',
        alt: 'Toddle homepage with Messaging module highlighted',
        step: 1,
        title: 'Open Messaging from the homepage',
        description:
          'From the Toddle homepage, click the Messaging module in the Modules section. This opens the school messaging area where you can chat with students, families, and staff.',
      },
      {
        type: 'image',
        src: 'media/lessons/communicating-2.png',
        alt: 'Messaging sidebar with Students and Families filter tabs',
        step: 2,
        title: 'Filter conversations by audience',
        description:
          'Use the filter tabs — All, Unread, Students, Families, Staff, and Public — to find the right conversations. Select Students to message learners directly, or Families to communicate with parents and guardians.',
      },
      {
        type: 'image',
        src: 'media/lessons/communicating-3.png',
        alt: 'Create menu with Chat, Family channel, and Custom channel options',
        step: 3,
        title: 'Start a new chat or channel',
        description:
          'Click the + button to start a new conversation. Choose Chat for a direct message with students, families, or staff; Family channel to reach all family members of a student; Custom channel for a specific group; or Browse public channels to join school-wide discussions.',
      },
      {
        type: 'image',
        src: 'media/lessons/communicating-4.png',
        alt: 'One-to-one chat window with a student and message input',
        step: 4,
        title: 'Send a message',
        description:
          'Select a student or family member to open the conversation. Type your message in the box at the bottom and send it. School messaging stays inside Toddle, so communication is connected to the learning platform.',
      },
    ],
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
    media: [
      {
        type: 'image',
        src: 'media/lessons/notifications-1.png',
        alt: 'Toddle header showing the notifications bell icon with unread count',
        step: 1,
        title: 'Open your notifications',
        description:
          'Click the bell icon in the top bar to open your notifications panel. The badge shows how many unread alerts you have — including assignment updates, messages, portfolio activity, and other class events. Check it regularly so you do not miss anything important.',
      },
    ],
  },
  {
    id: 'mobile-app',
    number: 14,
    title: 'Mobile App',
    paragraphs: [
      'Teachers should install the Toddle Educator app on their phones. This helps access classes, check notifications, communicate when needed, and review updates on the go.',
      'Students and parents use their own Toddle apps depending on their role.',
      'Download Toddle Educator: [Android](https://play.google.com/store/apps/details?id=com.toddle.teacher) · [Apple/iOS](https://apps.apple.com/us/app/toddle-educator/id1529065681)',
    ],
    keyPoints: [
      'Install the Toddle Educator app',
      'Access classes and notifications on the go',
      'Students and parents have their own apps',
    ],
  },
  {
    id: 'wrap-up',
    number: 15,
    title: 'Wrap-up and Next Steps',
    paragraphs: [
      'The goal is not to learn everything in one session. The main goal is to understand why we use Toddle, see how it connects to what you already do, explore the main classroom features, practice using the platform, ask questions, and build confidence throughout the year.',
      'Toddle makes the classroom experience more organized, more connected, and more visible for teachers, students, and parents.',
      'If you need help, contact the Learning Management Team — see the email addresses below.',
    ],
    keyPoints: [
      'You don\'t need to learn everything today',
      'Build on what you already know',
      'Practice in your Toddle classes',
      'Ask questions and build confidence',
      'Toddle makes learning more organized and visible',
    ],
    showLmtContacts: true,
  },
];

export const TOTAL_LESSONS = lessons.length;
export const QUIZ_PASS_THRESHOLD = 70;
