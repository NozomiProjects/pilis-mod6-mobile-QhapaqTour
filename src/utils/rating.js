export const calculateRating = (rating) =>
  rating.reduce(
    (accumulator, calificacion) => accumulator + calificacion.nota,
    0
  ) / rating.length;
