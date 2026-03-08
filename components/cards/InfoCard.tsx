'use client';

import { motion } from 'framer-motion';
import {
  Eye,
  Heart,
  Award,
  Users,
  Building2,
  Zap,
  Target,
  Store,
  Factory,
  Tractor,
  Clock,
  FileCheck,
  Shield,
  BadgeCheck,
  ClipboardList,
  FileText,
  HardHat,
  CheckCircle,
  Package,
  BookOpen,
  Route,
  type LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  eye: Eye,
  heart: Heart,
  award: Award,
  users: Users,
  building: Building2,
  zap: Zap,
  target: Target,
  store: Store,
  factory: Factory,
  tractor: Tractor,
  bookopen: BookOpen,
  route: Route,
  clock: Clock,
  filecheck: FileCheck,
  shield: Shield,
  badge: BadgeCheck,
  clipboard: ClipboardList,
  filetext: FileText,
  hardhat: HardHat,
  checkcircle: CheckCircle,
  package: Package,
};

interface InfoCardProps {
  title: string;
  description: string;
  /** Nombre del icono: eye, heart, award, users, building, zap, target, store, factory, tractor, clock, filecheck, shield, badge, clipboard, filetext, hardhat, checkcircle, package */
  iconName?: string;
  delay?: number;
}

export function InfoCard({
  title,
  description,
  iconName,
  delay = 0,
}: InfoCardProps) {
  const Icon = iconName ? ICON_MAP[iconName] : null;
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="rounded-xl border border-steel-200 bg-white p-6 shadow-sm"
    >
      {Icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-accent">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h3 className="font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm text-steel-600">{description}</p>
    </motion.div>
  );
}
