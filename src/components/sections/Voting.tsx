import { useState } from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { ThumbsUp, Clock, Users, ArrowUp, MapPin } from 'lucide-react';

interface Activity {
  id: number;
  title: string;
  description: string;
  votes: number;
  deadline: string;
  category: string;
  location: string;
}

const Voting = () => {
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: 1,
      title: 'Clean Water Project in Rajasthan',
      description: 'Install water purification systems in 10 villages across Rajasthan to provide clean drinking water.',
      votes: 1234,
      deadline: '2024-04-30',
      category: 'Water',
      location: 'Rajasthan, India'
    },
    {
      id: 2,
      title: 'Food Distribution in Mumbai Slums',
      description: 'Weekly food distribution program for 1000 families in Mumbai\'s underprivileged areas.',
      votes: 956,
      deadline: '2024-04-25',
      category: 'Food',
      location: 'Mumbai, India'
    },
    {
      id: 3,
      title: 'Emergency Shelter Construction',
      description: 'Build temporary shelters for 50 homeless families in Delhi during the winter season.',
      votes: 789,
      deadline: '2024-05-15',
      category: 'Shelter',
      location: 'Delhi, India'
    }
  ]);

  const handleVote = (activityId: number) => {
    setActivities(activities.map(activity => 
      activity.id === activityId 
        ? { ...activity, votes: activity.votes + 1 }
        : activity
    ));
  };

  return (
    <Section id="voting" background="light">
      <SectionTitle 
        title="Vote for Next Priority"
        subtitle="Help us decide which projects to prioritize. Your vote shapes our collective impact."
        centered
      />

      <div className="max-w-4xl mx-auto mt-12">
        <div className="mb-8 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-3">How Voting Works</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <ThumbsUp size={20} className="text-blue-600 mr-2" />
              Vote for projects you believe need immediate attention
            </li>
            <li className="flex items-center">
              <Clock size={20} className="text-blue-600 mr-2" />
              Voting periods last for 2 weeks
            </li>
            <li className="flex items-center">
              <Users size={20} className="text-blue-600 mr-2" />
              Top voted projects receive priority funding and implementation
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          {activities.sort((a, b) => b.votes - a.votes).map(activity => (
            <Card key={activity.id} className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-blue-900">{activity.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {activity.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      Deadline: {activity.deadline}
                    </span>
                    <span className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {activity.location}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Button
                    variant="outline"
                    size="small"
                    icon={<ArrowUp size={16} />}
                    onClick={() => handleVote(activity.id)}
                  >
                    Vote
                  </Button>
                  <div className="mt-2 text-center">
                    <div className="text-2xl font-bold text-blue-900">{activity.votes}</div>
                    <div className="text-sm text-gray-500">votes</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href="#propose"
            variant="primary"
            size="large"
          >
            Propose New Activity
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Voting;