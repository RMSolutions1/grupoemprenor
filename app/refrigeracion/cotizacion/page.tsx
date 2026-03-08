import { CotizacionService } from '@/components/service-pages/CotizacionService';
import { REFRIGERACION_SERVICIOS } from '@/lib/refrigeracion-data';

export default function RefrigeracionCotizacionPage() {
  const options = REFRIGERACION_SERVICIOS.map((s) => ({ value: s.title, label: s.title }));
  return (
    <CotizacionService
      slug="refrigeracion"
      title="Solicitar cotización"
      description="Describa su necesidad de refrigeración o climatización."
      serviceOptions={options}
    />
  );
}
