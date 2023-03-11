const searchRestaurants = (searchText, restaurants) => {
  const filteredRestros = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredRestros;
};

export default searchRestaurants;
