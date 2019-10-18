import visitorInfo from 'visitor-info';

const getUserCountryCode = async () => {
  try {
    return await visitorInfo().country.alpha2;
  } catch (error) {
    return 'US';
  }
};

export default getUserCountryCode;
