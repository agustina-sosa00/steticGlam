export interface IServicios {
  name: string;
  description: string;
  tiempoSesion: string;
  sesion: string;
  beneficios: string;
  image: string;
}
export const servicios: IServicios[] = [
  {
    name: "Reduccion Abdominal",
    description:
      "Tratamiento que se realiza mediante drenaje linfatico manual y vacumterapia, que desprenden las grasas localizadas. Se utilizan cremas de frio o calor para degradar la adipocidad, es muy importante el consumo de agua para eliminar los adipositos a traves de la orina.",
    tiempoSesion: "1hs",
    sesion: "6 sesiones (1 vez por semana).",
    beneficios: "Piel más firme, moldeado del cuerpo, perdida de centrímetros.",
    image: "https://i.ibb.co/NtQgYDK/quema-grasa.webp",
  },
  {
    name: "Levantamiento de Glúteos + Piernas",
    description:
      "Tratamiento que tonifica los musculos a traves de electroestimulacion, mejoramiento de la elasticidad de los tejidos, piel mas tersa y suave. Es indoloro, no invasivo.",
    tiempoSesion: "1hs",
    sesion: "2 veces por semana.",
    beneficios:
      "Elimina adiposidad localizada, reduce celulitis y flacidez, aumento de la masa muscular.",
    image: "https://i.ibb.co/54P8Ywh/e5db591de4fb7c7b0d5563544b6c9d15.jpg",
  },
  {
    name: "Depilacion Láser Unisex",
    description:
      "Tratamiento que se elimina el vello de forma permanente mediante la emisión lumínica del láser, eliminando entre el 20% y 80% del vello. Se puede realizar en todo el cuerpo, tanto en hombres como en mujeres. Es indoloro y no quema. Apto para pieles con foliculitis",
    tiempoSesion: "",
    sesion: "1 vez por mes",
    beneficios:
      "Aclara manchas en la piel, estimula la formacion de colágeno en la piel,no hace falta rasurarte.",
    image: "https://i.ibb.co/hsYNLBq/piernas-depila.jpg",
  },
];
