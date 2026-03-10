import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcular presupuesto',
  description:
    'Solicite una cotización gratuita para su proyecto de construcción, instalaciones o mantenimiento. Respuesta en menos de 24 horas.',
};

export default function CalculadoraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
