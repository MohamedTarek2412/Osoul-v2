import type { IconName } from '@/types/icon.types';
import {
  ArrowLeft,
  Building2,
  Car,
  ChevronLeft,
  HeartPulse,
  
  Moon,
  ShieldCheck,
  Ship,
  Star,
  Sun,
  Users,
  
} from 'lucide-react';

import { Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Shield as ShieldIcon } from './customIcons';
import { Menu as MenuIcon, X as XIcon, ChevronRight as ChevronRightIcon, Check as CheckIcon } from './customIcons';

// Use local icons where available to reduce external dependency surface and allow branding.
export const iconMap: Record<IconName, any> = {
  ArrowLeft,
  Building2,
  Car,
  ChevronLeft,
  HeartPulse,
  Mail: MailIcon,
  MapPin: MapPinIcon,
  Menu: MenuIcon,
  Moon,
  Phone: PhoneIcon,
  Shield: ShieldIcon,
  X: XIcon,
  ChevronRight: ChevronRightIcon,
  Check: CheckIcon,
  ShieldCheck,
  Ship,
  Star,
  Sun,
  Users,
};
