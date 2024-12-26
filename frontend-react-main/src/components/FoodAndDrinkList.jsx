const FoodAndDrinkList = ({ foodAndDrinkList }) => {
  if (!Array.isArray(foodAndDrinkList) || foodAndDrinkList.length === 0) {
    return <span>No items available</span>;
  }

  return foodAndDrinkList.map((fan, index) => (
    <span key={index}>
      <span className="label label-warning">{fan}</span>
      &nbsp;
    </span>
  ));
};

export default FoodAndDrinkList;
