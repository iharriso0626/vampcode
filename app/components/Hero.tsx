// The hero words are sized against the viewport, but on wide screens they sit
// inside the 65% content column — hence the smaller vw factor at xl, which is
// where the split layout kicks in. Without it "SOFTWARE" runs off the edge.
const SIZE =
  "text-[clamp(2.75rem,13vw,9rem)] xl:text-[clamp(3rem,7.5vw,10rem)]";

export default function Hero() {
  return (
    // Centred against the panel's visible height. A percentage height would
    // resolve to auto here, since every ancestor is only min-height constrained.
    <div className="flex min-h-[45vh] items-center xl:min-h-[calc(100dvh-8rem)]">
      <div className="space-y-1 text-left sm:space-y-2">
        {["SECURITY", "SOFTWARE"].map((word) => (
          <h1 key={word} className={`${SIZE} font-light leading-none`}>
            {word}
          </h1>
        ))}
        <h1 className={`${SIZE} font-light leading-none text-blood`}>SIMPLE</h1>
      </div>
    </div>
  );
}
