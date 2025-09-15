export default function FeaturedVideo() {
  const reels = [
    {
      id: "1093965812913739",
      src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1093965812913739%2F&show_text=false&width=267&t=0"
    },
    {
      id: "4000805040180385",
      src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F4000805040180385%2F&show_text=false&width=267&t=0"
    },
    {
      id: "1394298611824864",
      src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1394298611824864%2F&show_text=false&width=267&t=0"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            See Our Work In Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch how we transform properties with professional pressure washing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {reels.map((reel, index) => (
            <div key={reel.id} className="max-w-sm">
              <iframe 
                src={reel.src}
                width="267" 
                height="476" 
                style={{border: 'none', overflow: 'hidden'}} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="rounded-lg shadow-lg"
                data-testid={`facebook-reel-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}