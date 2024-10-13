export const Services = () => {
    return (
      <div className="bg-teal-500 w-full" id="services">
        {/* header title */}
          <div className="py-10">
              <h1 className="font-medium text-6xl flex justify-center text-white hover:text-gray-500">Pay Once, use forever</h1>
          </div>
        {/* the boxes */}
        <div className="min-h-screen flex items-center justify-center gap-4">
            <div className="grig grid-cols-1 gap-8 md:grid-cols-3 w-5/12 max-w-6xl">
        
        {/*Basic plan*/}  
              <div className="bg-black text-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4">
                <h3 className="text-2xl font-bold text-yellow-400">Basic</h3>
                <p className="text-gray-300 ">AI chatbot, personalized recommendations</p>
                <div className="text-5xl font-bold">$0</div>
                <button className="bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700">Get started</button>
                <ul className="space-y-2 text-left w-full mt-6">
                    <li className="flex items-center">
                        <span className="text-purple-400">✅</span>
                        <span className="ml-2">An AI chatbot that can understand your queries</span>
                    </li>
                    <li className="flex items-center">
                        <span className="text-purple-400">✅</span>
                        <span className="ml-2">Explore features for free</span>
                    </li>
                </ul>
              </div>
              {/*Premium Plan*/}
        <div className="bg-black text-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4">
                <h3 className="text-2xl font-bold text-yellow-400">Premium</h3>
                <p className="text-gray-300">Advanced AI chatbot, priority support, analytics dashboard</p>
                <div className="text-5xl font-bold">$9.99</div>
                <button className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-500">Get started</button>
                <ul className="space-y-2 text-left w-full mt-6">
                    <li className="flex items-center">
                        <span className="text-purple-400">✅</span>
                        <span className="ml-2">Advanced AI chatbot</span>
                    </li>
                    <li className="flex items-center">
                        <span className="text-purple-400">✅</span>
                        <span className="ml-2">Analytics dashboard</span>
                    </li>
                    <li className="flex items-center">
                        <span className="text-purple-400">✅</span>
                        <span className="ml-2">Priority support</span>
                    </li>
                </ul>
              </div>
              {/*Enterprise Plan*/}
        <div className="bg-black text-white p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4 pb-10">
                <h3 className="text-2xl font-bold text-red-400">Enterprise</h3>
                <p className="text-gray-300">Custom AI chatbot, advanced analytics, dedicated account</p>
                <div className="text-2xl font-bold">Contact us</div>
                <button className="bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700">Contact us</button>
                <ul className="space-y-2 text-left w-full mt-6">
                    <li className="flex items-center">
                        <span className="text-purple-400">✅</span>
                        <span className="ml-2">Custom AI chatbot</span>
                    </li>
                    <li className="flex items-center">
                        <span className="text-purple-400">✅</span>
                        <span className="ml-2">Advanced analytics</span>
                    </li>
                    <li className="flex items-center">
                        <span className="text-purple-400">✅</span>
                        <span className="ml-2">Dedicated support</span>
                    </li>
                </ul>
              </div>



            
        </div>
        
              

          </div>
      </div>
    )
  }
  
  export default Services