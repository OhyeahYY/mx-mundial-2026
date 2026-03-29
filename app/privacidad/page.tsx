import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Copa Mundial 2026 Predicciones: datos recopilados, uso de cookies y derechos del usuario.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold mb-4">Política de Privacidad</h1>
      <p className="text-sm text-gray-500 mb-8">Última actualización: 29 de marzo de 2026</p>

      <div className="prose">
        <h2>1. Quiénes somos</h2>
        <p>
          Este sitio ("Copa Mundial 2026 Predicciones") publica contenido informativo
          y análisis deportivos sobre fútbol internacional.
        </p>

        <h2>2. Datos que recopilamos</h2>
        <p>Podemos recopilar los siguientes datos de forma limitada:</p>
        <ul>
          <li>Datos de navegación (páginas vistas, tiempo de sesión, país aproximado).</li>
          <li>Datos técnicos (navegador, dispositivo, sistema operativo).</li>
          <li>Datos enviados voluntariamente por el usuario en formularios o contacto.</li>
        </ul>

        <h2>3. Finalidad del tratamiento</h2>
        <p>Usamos estos datos para:</p>
        <ul>
          <li>Mejorar el contenido y experiencia del sitio.</li>
          <li>Medir rendimiento y tráfico (analítica web).</li>
          <li>Prevenir abuso, fraude o uso malicioso.</li>
        </ul>

        <h2>4. Cookies</h2>
        <p>
          Este sitio puede usar cookies técnicas y de analítica. También pueden existir
          cookies de terceros (por ejemplo, servicios de analítica o publicidad).
        </p>

        <h2>5. Servicios de terceros</h2>
        <p>
          Podemos usar plataformas como proveedores de hosting, analítica, publicidad y
          redes sociales. Cada tercero tiene su propia política de privacidad.
        </p>

        <h2>6. Conservación de datos</h2>
        <p>
          Conservamos los datos durante el tiempo necesario para cumplir las finalidades
          descritas o las obligaciones legales aplicables.
        </p>

        <h2>7. Derechos del usuario</h2>
        <p>En la medida permitida por la ley aplicable, el usuario puede:</p>
        <ul>
          <li>Solicitar acceso, rectificación o eliminación de sus datos.</li>
          <li>Solicitar limitación u oposición al tratamiento.</li>
          <li>Retirar su consentimiento cuando corresponda.</li>
        </ul>

        <h2>8. Menores de edad</h2>
        <p>
          Este sitio no está dirigido específicamente a menores de edad. Si detectamos
          datos personales de menores sin autorización, procederemos a su eliminación.
        </p>

        <h2>9. Cambios en esta política</h2>
        <p>
          Podremos actualizar esta política cuando sea necesario. Publicaremos siempre
          la versión vigente en esta misma página.
        </p>

        <h2>10. Contacto</h2>
        <p>
          Para solicitudes relacionadas con privacidad, puedes contactar a través del
          canal oficial de Telegram indicado en el sitio.
        </p>
      </div>
    </div>
  );
}
