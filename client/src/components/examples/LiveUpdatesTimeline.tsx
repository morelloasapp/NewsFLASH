import LiveUpdatesTimeline from '../LiveUpdatesTimeline';

export default function LiveUpdatesTimelineExample() {
  const mockUpdates = [
    {
      id: '1',
      content: 'Autoritățile au confirmat că situația este sub control. Traficul rutier a fost reluat pe toate benzile.',
      timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
    },
    {
      id: '2',
      content: 'Echipele de intervenție rapidă au sosit la fața locului. Zona a fost securizată.',
      timestamp: new Date(Date.now() - 45 * 60000).toISOString(),
    },
    {
      id: '3',
      content: 'Primele rapoarte indică un incident minor în zona centrală. Forțele de ordine se deplasează către locație.',
      timestamp: new Date(Date.now() - 90 * 60000).toISOString(),
    },
    {
      id: '4',
      content: 'Apelul de urgență a fost recepționat de dispecerat. Toate unitățile disponibile au fost alertate.',
      timestamp: new Date(Date.now() - 120 * 60000).toISOString(),
    },
  ];

  return (
    <div className="p-6 bg-background max-w-2xl">
      <LiveUpdatesTimeline updates={mockUpdates} />
    </div>
  );
}
