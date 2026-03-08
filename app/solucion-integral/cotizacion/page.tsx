import { CotizacionService } from '@/components/service-pages/CotizacionService';
import { SOLUCION_INTEGRAL_SERVICIOS } from '@/lib/solucion-integral-data';

export default function SolucionIntegralCotizacionPage() {
  const options = SOLUCION_INTEGRAL_SERVICIOS.map((s) => ({ value: s.title, label: s.title }));
  return (
    <CotizacionService
      slug="solucion-integral"
      title="Solicitar cotización"
      description="Describa su necesidad de mantenimiento o instalaciones."
      serviceOptions={options}
    />
  );
}
