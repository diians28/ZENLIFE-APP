const MoodSelector = () => {
  const moods = [
    { emoji: "😔", label: "Triste" },
    { emoji: "😐", label: "Normal" },
    { emoji: "😊", label: "Bien" },
    { emoji: "😃", label: "Excelente" }
  ];

  return (
    <div className="bg-green-50 p-6 rounded-lg">
      <h2 className="text-lg mb-4">¿Cómo te sientes hoy?</h2>
      <div className="flex justify-between">
        {moods.map((mood) => (
          <button
            key={mood.label}
            className="flex flex-col items-center p-2 rounded-lg hover:bg-green-100"
          >
            <span className="text-3xl">{mood.emoji}</span>
          </button>
        ))}
      </div>
    </div>
  );
}; 