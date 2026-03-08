import { CotizacionService } from '@/components/service-pages/CotizacionService';
import { ARQUITECTURA_SERVICIOS } from '@/lib/arquitectura-data';

export default function ArquitecturaCotizacionPage() {
  const options = ARQUITECTURA_SERVICIOS.map((s) => ({ value: s.title, label: s.title }));
  return (
    <CotizacionService
      slug="arquitectura-construccion"
      title="Solicitar presupuesto"
      description="Describa su proyecto de construcción y le enviaremos una propuesta."
      serviceOptions={options}
    />
  );
}
