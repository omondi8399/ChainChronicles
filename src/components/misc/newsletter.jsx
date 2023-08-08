export default function Newsletter() {
  return (
    <section className="bg-gray-900 mt-20">
      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className="font-bold text-3xl text-white">Subscribe Newsletter</h1>

        <div className="py-4">
          <input type="text" className="shadow border rounded w-full md:w-9/12 py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline" placeholder="Enter your Email"/>
        </div>

        <button className="relative bg-gradient-to-br from-green-600 to-blue-500 hover:from-green-700 hover:to-blue-600 hover:scale-105 px-10 py-3 rounded-full text-gray-50 text-lg transition-all ease-out duration-300">
          Subscribe
        </button>
      </div>
    </section>
  );
}
