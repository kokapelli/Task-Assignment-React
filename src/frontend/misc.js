import Turf from 'turf';

export function getTotalCost(productList){
    return productList.reduce((totalCost, { cost: itemCost }) => totalCost + parseFloat(itemCost), 0);
  };

export function getDistanceInfo(coordinates, costScalar) {
    const distance = (Turf.lineDistance({
    "type": "LineString",
    "coordinates": coordinates,
  }, 'kilometres')).toFixed(2);

  const cost = distance * costScalar;

  return [distance, cost]
}