'use client';

const WEB_EDUCATORZ_COURSES = [
  {
    title: 'Become A Software Engineer',
    subtitle: '1 year diploma',
  },
  {
    title: 'AI Powered ECommerce Development',
  },
  {
    title: 'Professional Angular Js Development',
  },
  {
    title: 'Professional Laravel Livewire',
  },
  {
    title: 'AI Chatbot Development',
  },
  {
    title: 'Triple Stack API',
  },
];

export default function WebEducatorsEducationPanel() {
  return (
    <div className="bg-green-50/50 rounded-xl p-6 border border-green-100">
      <h4 className="font-bold text-green-900 text-sm uppercase tracking-wide mb-3">Courses</h4>
      <ol className="rounded-xl border border-green-200/80 bg-white/60 overflow-hidden divide-y divide-green-100 list-none m-0 p-0">
          {WEB_EDUCATORZ_COURSES.map((course, index) => (
            <li
              key={course.title}
              className="flex flex-col sm:flex-row sm:items-start gap-2 px-4 py-4 text-sm"
            >
              <span className="font-black text-green-800 shrink-0 w-24">
                Course {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-green-900 font-semibold leading-snug">{course.title}</p>
                {course.subtitle ? (
                  <p className="text-green-700 text-xs mt-1 font-medium">{course.subtitle}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
    </div>
  );
}
