import { motion } from "framer-motion";

export default function FeatureCard({
  icon,
  title,
  desc,
  accent = "from-[#00B74F]",
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  accent?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative rounded-2xl border border-gray-100/60 bg-white/90 p-6 shadow-lg backdrop-blur-sm transition-all"
    >
      <div className={`pointer-events-none absolute -top-2 -right-2 h-14 w-14 rounded-full bg-gradient-to-br ${accent} to-transparent opacity-20 blur-lg transition-opacity group-hover:opacity-40`} />
      <div className="mb-3 flex items-center justify-center">{icon}</div>
      <h3 className="mb-1 text-center text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-center text-sm leading-relaxed text-gray-600">{desc}</p>
    </motion.div>
  );
}
