import React from 'react';

const CallToActionSection = ({ title, content, buttonText, imageSrc, imageAlt, reverse }) => {
  const sectionClasses = `flex ${
    reverse ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col lg:flex-row'
  } items-center justify-center bg-white text-gray-800 shadow-lg my-8`;
  const textClasses = `w-full lg:w-1/2 p-6 text-center lg:text-left`;
  const imageClasses = `w-full lg:w-1/2 flex justify-center items-center p-6`;

  return (
    <div className={sectionClasses}>
      <div className={textClasses}>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="mb-4 max-w-xl">{content}</p>
        <a target='_blank' href="https://kingswordcalgary.churchcenter.com/giving" className="inline-block bg-[#c27803] hover:bg-transparent hover:border-2 border-lg border-[#c27803] hover:text-[#c27803] text-white font-bold py-4 px-6 rounded-lg transition duration-300">
          {buttonText}
        </a>
      </div>
      <div className={imageClasses}>
        {/* Adjust the size of the image as needed */}
        <img src={imageSrc} alt={imageAlt} className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain" />
      </div>
    </div>
  );
};

const GivingPage = () => {
  return (
    <div className="min-h-screen">
      <CallToActionSection
        title="Giving"
        content="God is able to make all grace abound toward you, that you, always having all sufficiency in all things, may have an abundance for every good work."
        buttonText="Give Now"
        imageSrc="/connect2.png" // Replace with your image path
        imageAlt="Illustration for Giving"
        reverse={false}
      />
      <CallToActionSection
        title="Partner with Us"
        content="With your love gift to the ministry, we can plant new churches, strengthen local missions & take the message of God's supernatural power to the ends of the earth."
        buttonText="Give Now"
        imageSrc="/connect2.png" // Replace with your image path
        imageAlt="Illustration for Partnership"
        reverse={true}
      />
    </div>
  );
};

export default GivingPage;
