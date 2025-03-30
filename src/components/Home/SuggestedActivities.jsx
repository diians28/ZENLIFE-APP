const SuggestedActivities = () => {
  const activities = [
    { title: "Meditación", duration: "5 minutos", icon: "🧘‍♀️" },
    { title: "Respiración", duration: "3 minutos", icon: "🫁" },
    { title: "Gratitud", duration: "2 minutos", icon: "🙏" },
    { title: "Journaling", duration: "10 minutos", icon: "📝" }
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Actividades sugeridas</h2>
      <div className="grid grid-cols-2 gap-4">
        {activities.map((activity) => (
          <ActivityCard key={activity.title} {...activity} />
        ))}
      </div>
    </div>
  );
};

const ActivityCard = ({ title, duration, icon }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <span className="text-2xl mb-2">{icon}</span>
    <h3 className="font-medium">{title}</h3>
    <p className="text-sm text-gray-600">{duration}</p>
  </div>
); 