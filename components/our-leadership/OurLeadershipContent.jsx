import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OurLeadershipContent = () => {
  const [member, setMember] = useState(0);

  // Data for the teams (assuming unchanged)
  const people = [
    {
      firstname: "Tonyo",
      lastname: "Delapena",
      role: "Boss",
      picture: "https://fancytailwind.com/static/profile8-34d5f5980ca5030c155a2ffbb50b5802.jpg",
      description: "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
    },
    {
      firstname: "Laetitia",
      lastname: "Librals",
      role: "Designer",
      picture: "https://fancytailwind.com/static/profile14-e9ac6c7d68a78a1cbbf29458acacc95a.jpg",
      description: "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
    },
    {
      firstname: "Laetitia",
      lastname: "Librals",
      role: "Designer",
      picture: "https://fancytailwind.com/static/profile14-e9ac6c7d68a78a1cbbf29458acacc95a.jpg",
      description: "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
    },
    {
      firstname: "Laetitia",
      lastname: "Librals",
      role: "Designer",
      picture: "https://fancytailwind.com/static/profile14-e9ac6c7d68a78a1cbbf29458acacc95a.jpg",
      description: "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
    },
    {
      firstname: "Laetitia",
      lastname: "Librals",
      role: "Designer",
      picture: "https://fancytailwind.com/static/profile14-e9ac6c7d68a78a1cbbf29458acacc95a.jpg",
      description: "Harum iusto exercitationem assumenda quas nostrum perspiciatis quos iste sit reprehenderit, libero quae aperiam sapiente delectus, porro tempore minus repellendus ratione distinctio!",
    },
  ]
  
  const GlobalPeople = [
    {
      name: "Tonyo Delapena",
      role: "Boss",
      picture: "https://fancytailwind.com/static/profile3-7d5e2246807e801f5e5037c1234fc121.jpg",
    },
    {
      name: "Laetitia Librals",
      role: "Designer",
      picture: "https://fancytailwind.com/static/profile14-e9ac6c7d68a78a1cbbf29458acacc95a.jpg",
    },
    {
      name: "Albert Jones-Marcel",
      role: "Developer",
      picture: "https://fancytailwind.com/static/profile10-9e05bd5638c669c34c11cb0462d95aa9.jpg",
    },
  ]

  return (
    <motion.div initial="hidden" animate="visible">
      {/* Meet Our Founders Section - Completely Redesigned */}
      <motion.div className="my-10 mx-auto w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-gray-800">Our Visionary Founders</h2>
        <div className="flex flex-col md:flex-row justify-around items-center mt-6">
          <motion.img src="/oth.jpg" alt="Founder 1" className="w-48 h-48 rounded-full border-4 border-purple-500"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img src="/oth.jpg" alt="Founder 2" className="w-48 h-48 rounded-full border-4 border-purple-500 mt-4 md:mt-0"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <p className="mt-4 text-gray-600">Dr. Kay and Pastor May Ijisesan, with their visionary leadership, have nurtured KingsWord Ministries International into a global beacon of hope and faith.</p>
      </motion.div>

      {/* Our Global Pastors - As requested, kept as is */}
      <div className="my-10 mx-auto w-full max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-center">Our Global Pastors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GlobalPeople.map((person, index) => (
            <motion.div key={index} className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <img className="rounded-t-lg" src={person.picture} alt="" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{person.name}</h5>
                <p className="font-normal text-gray-700">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Resident Pastors Section - Enhanced Avatar Circles */}
      <div className="relative mx-auto py-10 w-full max-w-7xl bg-gray-50 text-gray-700">
        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold uppercase">Our Resident Pastors</h2>
          <span className="inline-block h-1 w-20 rounded bg-gray-700"></span>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="flex justify-center gap-4 flex-wrap">
            {people.map((person, index) => (
              <motion.div key={index} className={`w-24 h-24 rounded-full overflow-hidden border-4 border-purple-500 ${index !== member ? "opacity-50" : "opacity-100"}`}
                onClick={() => setMember(index)}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={person.picture} alt="" className="object-cover" />
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-4 lg:mt-0 w-full max-w-md p-4 bg-white rounded-lg shadow"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold">{people[member].firstname} {people[member].lastname}</h3>
            <p className="text-gray-600">{people[member].description}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurLeadershipContent;

