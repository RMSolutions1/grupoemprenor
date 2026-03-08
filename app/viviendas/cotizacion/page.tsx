import { CotizacionService } from '@/components/service-pages/CotizacionService';
import { VIVIENDAS_SERVICIOS } from '@/lib/viviendas-data';

export default function ViviendasCotizacionPage() {
  const options = VIVIENDAS_SERVICIOS.map((s) => ({ value: s.title, label: s.title }));
  return (
    <CotizacionService
      slug="viviendas"
      title="Solicitar cotización"
      description="Describa el modelo o superficie que necesita para su vivienda."
      serviceOptions={options}
    />
  );
}
