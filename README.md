# Payments Service

Microservicio responsable de la integración con pasarelas de pago externas.

## 📋 Características
-   💳 **Pagos**: Integración oficial con Stripe.
-   🪝 **Webhooks**: Manejo de confirmaciones asíncronas de la pasarela.
-   ⚡ **Notificación**: Envío de eventos tras pago exitoso.

## 🛠️ Tecnologías
-   NestJS
-   TypeScript
-   Stripe SDK
-   RabbitMQ

## 🚀 Configuración
1.  **Variables de Entorno**:
    ```bash
    cp .env.example .env
    ```
2.  **Stripe**: Necesitarás una clave secreta de Stripe para pruebas.
3.  **Ejecución**:
    ```bash
    pnpm run start:dev
    ```

## 📡 Patrones de Mensajería
-   `create_payment_session`: Genera la sesión de Stripe Checkout.
-   `handle_webhook`: Procesa eventos de Stripe (requiere exponer puerto).
