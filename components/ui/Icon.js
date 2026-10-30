import {
  ArrowLeft,
  ArrowUp,
  ArrowUpRight,
  Bot,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code2,
  CreditCard,
  Database,
  FileText,
  Layers,
  LayoutDashboard,
  Link2,
  Mail,
  MapPin,
  Menu,
  Quote,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
  X,
} from "lucide-react";

// Data files refer to icons by name so they stay plain JavaScript objects.
const icons = {
  "arrow-left": ArrowLeft,
  "arrow-up": ArrowUp,
  "arrow-up-right": ArrowUpRight,
  bag: ShoppingBag,
  bot: Bot,
  calendar: CalendarDays,
  card: CreditCard,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  code: Code2,
  database: Database,
  file: FileText,
  layers: Layers,
  layout: LayoutDashboard,
  link: Link2,
  mail: Mail,
  pin: MapPin,
  menu: Menu,
  quote: Quote,
  shield: ShieldCheck,
  smartphone: Smartphone,
  sparkles: Sparkles,
  users: Users,
  workflow: Workflow,
  x: X,
};

export function Icon({ name, size = 20, strokeWidth = 1.75, className }) {
  const Component = icons[name] ?? Sparkles;
  return <Component aria-hidden="true" size={size} strokeWidth={strokeWidth} className={className} />;
}

