import { TrendingUp, ArrowRight, DollarSign, Clock, Target } from 'lucide-react';

const careerPaths = [
  {
    role: 'Senior Full Stack Developer',
    level: 'Next Step (6-12 months)',
    timeline: '6-12 months',
    requiredSkills: ['TypeScript', 'Node.js', 'Docker', 'AWS', 'System Design'],
    averageSalary: '$120k - $160k',
  },
  {
    role: 'Technical Lead',
    level: 'Mid-term Goal (1-2 years)',
    timeline: '1-2 years',
    requiredSkills: ['Leadership', 'Architecture', 'Code Review', 'Mentoring', 'Project Management'],
    averageSalary: '$140k - $180k',
  },
  {
    role: 'Engineering Manager',
    level: 'Long-term Goal (2-4 years)',
    timeline: '2-4 years',
    requiredSkills: ['Team Management', 'Strategic Planning', 'Hiring', 'Budget Management', 'Stakeholder Communication'],
    averageSalary: '$160k - $220k',
  },
  {
    role: 'VP of Engineering',
    level: 'Executive Path (4+ years)',
    timeline: '4+ years',
    requiredSkills: ['Org Design', 'Strategic Vision', 'Executive Communication', 'P&L Management', 'Innovation Leadership'],
    averageSalary: '$220k - $350k+',
  },
];

const alternativePaths = [
  {
    title: 'Staff Engineer (IC Track)',
    description: 'Deep technical expertise without management responsibilities',
    salary: '$180k - $280k',
    skills: ['Advanced Architecture', 'Technical Strategy', 'Cross-team Collaboration'],
  },
  {
    title: 'Solutions Architect',
    description: 'Design complex systems and guide technical decisions',
    salary: '$140k - $200k',
    skills: ['Cloud Architecture', 'System Design', 'Client Consulting'],
  },
  {
    title: 'DevOps Lead',
    description: 'Focus on automation, infrastructure, and deployment',
    salary: '$130k - $180k',
    skills: ['Kubernetes', 'CI/CD', 'Infrastructure as Code', 'Monitoring'],
  },
];

export function CareerPathView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl mb-2">AI-Generated Career Path</h2>
            <p className="opacity-90">
              Based on your current skills, market trends, and career progression data, here's your personalized roadmap to success.
            </p>
          </div>
        </div>
      </div>

      {/* Current Position */}
      <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-purple-300">
        <div className="flex items-center gap-3 mb-2">
          <Target className="w-5 h-5 text-purple-600" />
          <span className="text-sm text-purple-600">CURRENT POSITION</span>
        </div>
        <h3 className="text-2xl text-gray-900 mb-2">Mid-Level Full Stack Developer</h3>
        <p className="text-gray-600 mb-4">You have strong foundational skills in web development with room to grow in modern technologies.</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">JavaScript</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">React</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Python</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">SQL</span>
        </div>
      </div>

      {/* Career Progression */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-2xl text-gray-900 mb-6">Your Career Progression Path</h3>
        <div className="space-y-6">
          {careerPaths.map((path, index) => (
            <div key={index}>
              <div className="relative">
                {index < careerPaths.length - 1 && (
                  <div className="absolute left-6 top-full h-6 w-0.5 bg-gradient-to-b from-purple-300 to-transparent" />
                )}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1 border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl text-gray-900 mb-1">{path.role}</h4>
                        <span className="text-sm text-purple-600">{path.level}</span>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-green-600 mb-1">
                          <DollarSign className="w-4 h-4" />
                          <span className="text-sm">{path.averageSalary}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{path.timeline}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Required Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {path.requiredSkills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alternative Career Paths */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-2xl text-gray-900 mb-4">Alternative Career Paths</h3>
        <p className="text-gray-600 mb-6">
          Not interested in management? Consider these alternative paths that leverage your technical skills.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {alternativePaths.map((alt, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="text-gray-900 mb-2">{alt.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{alt.description}</p>
              <div className="flex items-center gap-2 text-green-600 mb-3">
                <DollarSign className="w-4 h-4" />
                <span className="text-sm">{alt.salary}</span>
              </div>
              <div className="space-y-1">
                {alt.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <ArrowRight className="w-3 h-3" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Steps */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-xl text-gray-900 mb-4">Next Steps to Advance Your Career</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">1</div>
            <div>
              <p className="text-gray-900 mb-1">Complete TypeScript & Node.js courses</p>
              <p className="text-sm text-gray-600">Estimated: 2-3 months</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">2</div>
            <div>
              <p className="text-gray-900 mb-1">Build 2-3 full-stack projects</p>
              <p className="text-sm text-gray-600">Portfolio enhancement</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">3</div>
            <div>
              <p className="text-gray-900 mb-1">Get AWS certification</p>
              <p className="text-sm text-gray-600">Career differentiator</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">4</div>
            <div>
              <p className="text-gray-900 mb-1">Apply to senior positions</p>
              <p className="text-sm text-gray-600">6-9 months from now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
