const searchPhonesList = (phonesList, searchPattern, numberOfPhones) => {
  if (!searchPattern) {
    return phonesList.slice(numberOfPhones, numberOfPhones + 20);
  }

  const searchedPhones = [];

  phonesList.forEach((phone) => {
    if (
      phone.brand.toLowerCase().includes(searchPattern.toLowerCase()) ||
      phone.model.toLowerCase().includes(searchPattern.toLowerCase())
    ) {
      searchedPhones.push(phone);
    }
  });

  return searchedPhones.length > 20
    ? searchedPhones.slice(numberOfPhones, numberOfPhones + 20)
    : searchedPhones;
};

export default searchPhonesList;
