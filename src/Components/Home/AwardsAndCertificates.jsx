import { FaAward } from 'react-icons/fa';

import { awards } from '../../assets/certificates';

const AwardCard = ({ award }) => {
  return (
    <div className="max-w-sm mx-5 md:mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="px-4 py-2">
        <h2 className="text-gray-800 font-bold text-2xl uppercase">{award.title}</h2>
        <p className="text-gray-600 text-sm mt-1">{award.issuer}</p>
        <p className="text-gray-600 text-sm mt-1">{award.date}</p>
      </div>
      <img className="w-full p-3 object-cover mt-2" src={award.image} alt="award" />
      <div className="flex justify-end my-2 mx-4">
        <FaAward className="text-yellow-500" size={30} />
      </div>
    </div>
  );
};

function AwardsAndCertificates() {
  return (
    <div className="container m-auto my-10">
    <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">Awards and Certificates</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      {awards.map((award) => (
        <AwardCard key={award.id} award={award} />
      ))}
    </div>
  </div>
  );
}
export default AwardsAndCertificates