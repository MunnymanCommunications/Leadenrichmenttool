
import React from 'react';
import type { Lead } from '../types';
import { UserIcon } from './icons/UserIcon';
import { BriefcaseIcon } from './icons/BriefcaseIcon';
import { EmailIcon } from './icons/EmailIcon';
import { PhoneIcon } from './icons/PhoneIcon';

interface LeadCardProps {
  lead: Lead;
}

const InfoRow: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => {
    const isAvailable = value && value.toLowerCase() !== 'not found';
    return (
        <div className="flex items-start space-x-3">
            <span className={`mt-1 ${isAvailable ? 'text-blue-400' : 'text-gray-600'}`}>
                {icon}
            </span>
            <div className="flex-1">
                <p className="text-sm text-gray-400">{label}</p>
                <p className={`font-medium ${isAvailable ? 'text-gray-200' : 'text-gray-500 italic'}`}>
                    {value}
                </p>
            </div>
        </div>
    );
};


export const LeadCard: React.FC<LeadCardProps> = ({ lead }) => {
  return (
    <div className="relative bg-gray-800/70 border border-gray-700 rounded-lg p-5 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
        {lead.isPrimaryTarget && (
            <div className="absolute top-3 right-3 text-yellow-400" title="Primary Target Contact">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            </div>
        )}
        <div className="space-y-4">
            <InfoRow icon={<UserIcon />} label="Name" value={lead.name} />
            <InfoRow icon={<BriefcaseIcon />} label="Role" value={lead.role} />
            <InfoRow icon={<EmailIcon />} label="Email" value={lead.email} />
            <InfoRow icon={<PhoneIcon />} label="Phone" value={lead.phone} />
        </div>
    </div>
  );
};
