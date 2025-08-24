export default function TestImages() {
  const images = [
    { src: '/gemstone-enhancement.jpg', title: 'Gemstone Enhancement' },
    { src: '/polymer-crosslinking.jpg', title: 'Polymer Crosslinking' },
    { src: '/medical-sterilization.jpg', title: 'Medical Sterilization' },
    { src: '/material-enhancement.jpg', title: 'Material Enhancement' }
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Image Test Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{image.title}</h3>
                <p className="text-gray-600">Path: {image.src}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 