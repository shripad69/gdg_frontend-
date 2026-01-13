import { Linkedin, Github } from 'lucide-react';
import type { TeamMember } from '@/data/mockData';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  return (
    <article
      className="group bg-card rounded-xl p-6 text-center card-shadow hover:card-shadow-hover transition-all duration-300 animate-scale-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative w-24 h-24 mx-auto mb-4">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover rounded-full ring-4 ring-secondary group-hover:ring-primary/30 transition-all duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-google-blue/20 via-google-red/20 to-google-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <h3 className="font-display font-semibold text-lg mb-1">{member.name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
      
      <div className="flex justify-center gap-3">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary hover:bg-google-blue hover:text-white transition-all duration-200"
            aria-label={`${member.name}'s LinkedIn`}
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary hover:bg-foreground hover:text-background transition-all duration-200"
            aria-label={`${member.name}'s GitHub`}
          >
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </article>
  );
};

export default TeamMemberCard;
