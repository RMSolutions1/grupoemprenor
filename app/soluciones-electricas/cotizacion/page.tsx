import { CotizacionService } from '@/components/service-pages/CotizacionService';
import { SOLUCIONES_ELECTRICAS_SERVICIOS } from '@/lib/soluciones-electricas-data';

export default function SolucionesElectricasCotizacionPage() {
  const options = SOLUCIONES_ELECTRICAS_SERVICIOS.map((s) => ({ value: s.title, label: s.title }));
  return (
    <CotizacionService
      slug="soluciones-electricas"
      title="Solicitar cotización"
      description="Describa su necesidad de instalación eléctrica."
      serviceOptions={options}
    />
  );
}
