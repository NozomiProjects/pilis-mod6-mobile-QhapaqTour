export const calculateRating = (rating) => {
  const total = rating.reduce(
    (accumulator, calificacion) => accumulator + calificacion.nota,
    0
  );
  const average = Math.floor((total / rating.length) * 10) / 10;
  return average;
};
