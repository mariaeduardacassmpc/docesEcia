const WhatsAppButton = () => (
  <a
    href="https://wa.me/5543991334770?text=Olá! Gostaria de mais informações sobre os produtos."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50"
  >
    <img
      src="/uploads/whatsapp.png"
      alt="WhatsApp"
      className="w-16 h-16 rounded-full hover:scale-110 transition-transform"
    />
  </a>
);

export default WhatsAppButton;
