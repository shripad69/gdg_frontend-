import { useYear } from '@/contexts/YearContext';
import { teamMembers } from '@/data/mockData';
import TeamMemberCard from './TeamMemberCard';

const Team = () => {
  const { selectedYear } = useYear();
  const filteredMembers = teamMembers.filter((member) => member.year === selectedYear);

  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Our Team - {selectedYear}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate individuals who make our community thrive.
          </p>
        </div>

        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {filteredMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No team members found for {selectedYear}.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
