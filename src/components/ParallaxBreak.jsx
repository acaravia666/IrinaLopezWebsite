export default function ParallaxBreak({ image, height = 'h-[60vh]', tint = 'bg-brand-gold/20' }) {
  return (
    <div className={`relative w-full ${height} overflow-hidden`} aria-hidden="true">

      {/* Mobile: regular image — background-attachment:fixed broken on iOS/Android */}
      <img
        src={image}
        alt=""
        className="lg:hidden absolute inset-0 w-full h-full object-cover"
      />

      {/* Desktop: fixed background creates the window/reveal effect */}
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 bg-brand-ink/40" />
      <div className={`absolute inset-0 ${tint}`} />
    </div>
  );
}
