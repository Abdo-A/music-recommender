import visitorInfo from 'visitor-info';

const getUserCountryInfo = async () => {
  try {
    const info = await visitorInfo();
    return {
      name: info.country.name,
      code: info.country.alpha2,
    };
  } catch (error) {
    return 'US';
  }
};

export default getUserCountryInfo;
