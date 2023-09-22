import React, { useContext, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { styles } from "./NewReservaScreen.styles";
import { AmountSelector, ModalInfo, TimeSelector } from "../../components/index";
import { COLORS } from "../../utils/theme";
import { UserContext } from "../../contexts/UserContext";
import { createReserva } from "../../api/reservas";

LocaleConfig.locales["es"] = {
  monthNames: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  monthNames: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  monthNamesShort: [
    "Ene.",
    "Feb.",
    "Mar.",
    "Abr.",
    "May.",
    "Jun.",
    "Jul.",
    "Ago.",
    "Sep.",
    "Oct.",
    "Novi",
    "Dic",
  ],
  dayNames: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ],
  dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
  today: "Hoy es",
};

LocaleConfig.defaultLocale = "es";

export const NewReservaScreen = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const { credentials } = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState("");
  const [time, setTime] = useState({
    hours: 8,
    minutes: 0,
  });
  const [amount, setAmount] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const handleDayPress = (day) => setSelectedDate(day.dateString);

  const confirmReserva = () => {
    const data = {
      clienteId: credentials.user.id,
      recorridoId: item.id,
      cantidadPersonas: amount,
      fechaHora: new Date(
        Date.parse(`${selectedDate} ${time.hours}:${time.minutes}`)
      ),
    };

    createReserva(data, credentials.token.token)
      .then((res) => setIsVisible(true))
      .catch((error) => console.log(error));
  };

  const handleClose = () => {
    setIsVisible(false);
    navigation.navigate("Reservas");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.title}>{item.lugar.nombre}</Text>
        <View style={styles.row}>
          <Text style={styles.subTitle}>Selecciona la fecha</Text>
          <Calendar
            style={styles.calendar}
            horizontal={true}
            pagingEnabled={true}
            monthFormat={"MMMM yyyy"}
            theme={{
              calendarBackground: COLORS.white,
              textSectionTitleColor: COLORS.dark,
              todayTextColor: COLORS.primary,
              dayTextColor: COLORS.text,
              textDisabledColor: COLORS.grey,
              arrowColor: COLORS.secondary,
              monthTextColor: COLORS.dark,
              textMonthFontFamily: "Poppins_500Medium",
              textMonthFontSize: 20,
              textDayFontFamily: "Poppins_400Regular",
              textDayFontSize: 16,
              textDayHeaderFontFamily: "Poppins_400Regular",
              textDayHeaderFontSize: 12,
            }}
            onDayPress={handleDayPress}
            markedDates={{
              [selectedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: COLORS.primary,
                selectedTextColor: COLORS.white,
              },
            }}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.subTitle}>Selecciona el horario</Text>
          <TimeSelector time={time} setTime={setTime} />
        </View>

        <View style={styles.row}>
          <Text style={styles.subTitle}>Indica la cantidad de pasajeros</Text>
          <AmountSelector
            setAmount={setAmount}
            amount={amount}
            max={item.cantidadPersonas}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceTag}>Costo Total</Text>
          <Text style={styles.priceValue}>${item.precio * amount}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={confirmReserva}>
          <Text style={styles.buttonText}>Reservar</Text>
        </TouchableOpacity>
      </View>

      <ModalInfo
        isVisible={isVisible}
        content="¡Tu reserva se ha registrado con éxito!"
        handleClose={handleClose}
      />
    </ScrollView>
  );
};
