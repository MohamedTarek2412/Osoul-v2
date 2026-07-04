import type { IconName } from '@/types/icon.types';
import {
  ArrowLeft,
  Building2,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Menu,
  Moon,
  ShieldCheck,
  Ship,
  Star,
  Sun,
  Users,
  X,
} from 'lucide-react';

import { Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Shield as ShieldIcon } from './customIcons';

// Use local icons where available to reduce external dependency surface and allow branding.
export const iconMap: Record<IconName, any> = {
  ArrowLeft,
  Building2,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Mail: MailIcon,
  MapPin: MapPinIcon,
  Menu,
  Moon,
  Phone: PhoneIcon,
  Shield: ShieldIcon,
  ShieldCheck,
  Ship,
  Star,
  Sun,
  Users,
  X,
};
