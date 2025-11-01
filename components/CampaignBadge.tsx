'use client';

import { Ribbon } from 'lucide-react';
import { cn } from '@/lib/utils';

export type CampaignMonth = 
  | 'janeiro' 
  | 'fevereiro' 
  | 'marco' 
  | 'abril' 
  | 'maio' 
  | 'junho' 
  | 'julho' 
  | 'agosto' 
  | 'setembro' 
  | 'outubro' 
  | 'novembro' 
  | 'dezembro'
  | null;

interface CampaignConfig {
  name: string;
  bgColor: string;
  textColor: string;
  iconColor: string;
}

const campaigns: Record<NonNullable<CampaignMonth>, CampaignConfig> = {
  janeiro: {
    name: 'Janeiro Branco',
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-700',
    iconColor: 'text-gray-600',
  },
  fevereiro: {
    name: 'Fevereiro Roxo',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-700',
    iconColor: 'text-purple-600',
  },
  marco: {
    name: 'Março Azul',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-700',
    iconColor: 'text-blue-600',
  },
  abril: {
    name: 'Abril Azul',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-700',
    iconColor: 'text-blue-600',
  },
  maio: {
    name: 'Maio Amarelo',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-700',
    iconColor: 'text-yellow-600',
  },
  junho: {
    name: 'Junho Vermelho',
    bgColor: 'bg-red-100',
    textColor: 'text-red-700',
    iconColor: 'text-red-600',
  },
  julho: {
    name: 'Julho Amarelo',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-700',
    iconColor: 'text-yellow-600',
  },
  agosto: {
    name: 'Agosto Dourado',
    bgColor: 'bg-amber-100',
    textColor: 'text-amber-700',
    iconColor: 'text-amber-600',
  },
  setembro: {
    name: 'Setembro Amarelo',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-700',
    iconColor: 'text-yellow-600',
  },
  outubro: {
    name: 'Outubro Rosa',
    bgColor: 'bg-pink-100',
    textColor: 'text-pink-600',
    iconColor: 'text-pink-500',
  },
  novembro: {
    name: 'Novembro Azul',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-700',
    iconColor: 'text-blue-600',
  },
  dezembro: {
    name: 'Dezembro Vermelho',
    bgColor: 'bg-red-100',
    textColor: 'text-red-700',
    iconColor: 'text-red-600',
  },
};

interface CampaignBadgeProps {
  month: CampaignMonth;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CampaignBadge({ 
  month, 
  size = 'md',
  className 
}: CampaignBadgeProps) {
  if (!month) return null;

  const campaign = campaigns[month];

  if (!campaign) return null;

  const sizeClasses = {
    sm: {
      container: 'px-2 py-0.5 text-xs',
      icon: 'h-3 w-3 mr-1',
    },
    md: {
      container: 'px-2.5 py-1 text-xs',
      icon: 'h-3.5 w-3.5 mr-1',
    },
    lg: {
      container: 'px-3 py-1.5 text-sm',
      icon: 'h-4 w-4 mr-1.5',
    },
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-semibold',
        campaign.bgColor,
        campaign.textColor,
        sizeClasses[size].container,
        className
      )}
    >
      <Ribbon className={cn(sizeClasses[size].icon, campaign.iconColor)} />
      {campaign.name}
    </span>
  );
}

