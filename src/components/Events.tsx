import { useYear } from '@/contexts/YearContext';
import { events } from '@/data/mockData';
import EventCard from './EventCard';

const Events = () => {
  const { selectedYear } = useYear();
  const filteredEvents = events.filter((event) => event.year === selectedYear);

  return (
    <section id="events" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Events in {selectedYear}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our past and upcoming events. Join us for workshops, talks, and networking opportunities.
          </p>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No events found for {selectedYear}.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
