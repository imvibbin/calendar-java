import { useState } from "react";
import { toast } from "react-toastify";
import { motion, PanInfo } from "framer-motion";
import EventDisplay from "../EventDisplay/EventDisplay";
import UserInterface from "../../../models/UserInterface";
import Habit from "../../../models/Habit";
import Appointment from "../../../models/Appointment";
import "./HourRender.css";
import { parseInt } from "lodash";
import { updateActivity } from "../../../services/ActivityService";
import CustomError from "../../../models/CustomError";

interface WeeklyViewProps {
  weeklyViewData: string[]; // Replace 'any' with the appropriate type for your data
}

const HourRender: React.FC<WeeklyViewProps> = ({ weeklyViewData }) => {
  const hours = Array.from({ length: 24 }, (_, index) => index);
  const [addingEvent, setAddingEvent] = useState(false);
  const [selectedCell, setSelectedCell] = useState("");
  const [calendarSlotId, setCalendarSlotId] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const userData: UserInterface =
    JSON.parse(localStorage.getItem("USER_DATA") ?? "{}") || null;

  const notification = (updateSuccess: boolean) => {
    const toastMessage = updateSuccess ? "Success!" : "Event not updated";

    toast[updateSuccess ? "success" : "error"](toastMessage, {
      position: "top-center",
      autoClose: updateSuccess ? 1000 : 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const generateEventsFromUserData = (userData: UserInterface) => {
    return userData.activities.map((activity) => {
      const {
        task_name: name,
        task_description: description,
        task_id: eventId,
      } = activity;
      const [startHourStr, endHourStr] = activity.task_hour_range.split("|");
      const [startHour, startMinute] = startHourStr.split(":").map(Number);
      const [endHour, endMinute] = endHourStr.split(":").map(Number);
      const duration = (endHour - startHour) * 60 + (endMinute - startMinute);

      if (
        activity.task_type === "habit" &&
        "task_habit_repetitions" in activity
      ) {
        const habit = activity as Habit;
        const type = habit.task_type;

        // const days = habit.task_habit_repetitions;
        // Add a leading zero to the day if it is a single digit
        // const formattedDays = days < 10 ? `0${days}` : days;
        // const info = `hour${startHour}/day${formattedDays}`;

        // return { eventId, name, description, info, duration, days, type };
      } else if (
        activity.task_type === "appointment" &&
        "task_date_range" in activity
      ) {
        const appointment = activity as Appointment;
        const type = appointment.task_type;
        const [startDate, endDate] = appointment.task_date_range.split("|");
        const [day_start, month_start, year_start] = startDate.split("-");
        const [day_end, month_end, year_end] = endDate.split("-");

        // Calculate the number of days between the start and end dates
        const days =
          (Number(year_end) - Number(year_start)) * 365 +
          (Number(month_end) - Number(month_start)) * 30 +
          (Number(day_end) - Number(day_start)) +
          1;

        // Add a leading zero to the day if it is a single digit
        const formattedHour =
          Number(startHour) < 10 ? `0${startHour}` : startHour;
        const info = `hour${formattedHour}/day${day_start}/month${month_start}/year${year_start}`;
        return {
          eventId,
          name,
          description,
          info,
          startHour,
          endHour,
          duration,
          days,
          type,
        };
      } else {
        return null;
      }
    });
  };

  const [eventsData, setEventsData] = useState({
    events: generateEventsFromUserData(userData),
  });

  const generateCurrentDivIdCalendarCell = (
    hour: number,
    weeklyViewData: string[],
    index: number,
  ) => {
    // Extract the date from the weeklyViewData array at the given index
    const date = weeklyViewData[index];
    // Extract the day, month, and year from the date
    const [year, month, day] = date.split("-").map(Number);
    // Generate the currentDivId string
    const formattedHour = hour < 10 ? `0${hour}` : hour;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const currentDivId = `hour${formattedHour}/day${formattedDay}/month${formattedMonth}/year${year}`;
    return currentDivId;
  };

  const handleCellClick = (cellId: string) => {
    if (!addingEvent && !isDragging) {
      setAddingEvent(true);
      setSelectedCell(cellId);
    }
  };

  const handleDragCommon = (info: PanInfo) => {
    setCalendarSlotId("");
    const slots = document.querySelectorAll(".calendar-slot");
    slots.forEach((slot) => {
      const rect = slot.getBoundingClientRect();
      if (
        info.point.x > rect.left &&
        info.point.x < rect.right &&
        info.point.y > rect.top &&
        info.point.y < rect.bottom
      ) {
        const id = slot.getAttribute("id") || "";
        setCalendarSlotId(id);
      }
    });
  };

  // TODO: implement drag
  const updateActivityData = async (newFormatEvent: any) => {
    try {
      console.log(newFormatEvent);
      const response = await updateActivity(newFormatEvent);
      console.log(response);
      notification(true);
    } catch (error) {
      notification(false);
      const backendError = error as CustomError; // Cast to custom error type
      if (backendError.message) {
        console.error("Failed to authenticate user:", backendError.message);
      } else {
        console.error(
          "Failed to authenticate user: An unknown error occurred.",
        );
      }
    }
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
    eventId: number,
  ) => {
    setIsDragging(false);
    handleDragCommon(info);
    setCalendarSlotId("");

    // Update eventsData
    setEventsData((prevState) => ({
      ...prevState,
      events: prevState.events.map((event) =>
        event?.eventId === eventId ? { ...event, info: calendarSlotId } : event,
      ),
    }));

    const newFormatEvent = eventsData.events.map((event) => {
      if (event?.eventId === eventId) {
        const [hourStr, dayStr, monthStr, yearStr] = calendarSlotId.split("/");
        const hour = parseInt(hourStr.slice(4));
        const day = parseInt(dayStr.slice(3));
        const month = parseInt(monthStr.slice(5));
        const year = parseInt(yearStr.slice(4));
        const formattedStartDay = day < 10 ? `0${day}` : day;
        const formattedStartMonth = month < 10 ? `0${month}` : month;

        if (event.type === "habit") {
          return {
            task_id: eventId,
            user_id: userData.user_id,
            task_name: event.name,
            task_description: event.description,
            task_hour_range: `${hour}:00|${hour + event.duration / 60}:00`,
            task_type: event.type, // Discriminator property
            task_habit_repetitions: `1|4|5`,
          };
        } else if (event.type === "appointment") {
          const endDay = day + event.days;
          const date = new Date(year, month, 0);
          const daysInMonth = date.getDate();
          let newEndDay = endDay;
          let newMonth = month;
          if (endDay > daysInMonth) {
            newEndDay = endDay % daysInMonth;
            newMonth = month + 1;
          }
          const formattedEndDay = newEndDay < 10 ? `0${newEndDay}` : newEndDay;
          const formattedEndMonth = newMonth < 10 ? `0${newMonth}` : newMonth;

          return {
            task_id: eventId,
            user_id: userData.user_id,
            task_name: event.name,
            task_description: event.description,
            task_hour_range: `${hour}:00|${hour + event.duration / 60}:00`,
            task_date_range: `${formattedStartDay}-${formattedStartMonth}-${year}|${formattedEndDay}-${formattedEndMonth}-${year}`,
            task_type: event.type, // Discriminator property
          };
        }
      }
    });

    console.log(newFormatEvent[0]);

    // Find the index of the activity with task_id 19 in the activities array
    userData.activities = userData.activities.map((activity) =>
      activity.task_id === eventId ? newFormatEvent : activity,
    );

    console.log(newFormatEvent);
    updateActivityData(newFormatEvent[0]);
  };

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    setIsDragging(true);
    handleDragCommon(info);
  };

  // Main component
  return (
    <>
      {hours.map((hour) => (
        <div key={hour} className="row row-height w-100">
          {/* Display the hour */}
          <div className="col d-flex align-items-center justify-content-center text-center">
            {hour}:00 - {(hour + 1) % 24}:00
          </div>
          {/* Loop through days */}
          {[...Array(7)].map((_, index) => {
            const currentDivId = generateCurrentDivIdCalendarCell(
              hour,
              weeklyViewData,
              index,
            );
            const event = eventsData.events.find(
              (event) => event?.info === currentDivId,
            );
            const eventDuration = event?.duration || 60;
            const eventDays = event?.days || 1;
            const isAddingEvent = addingEvent && selectedCell === currentDivId;

            return (
              <motion.div
                key={`event-${index}`}
                id={currentDivId}
                className={`col calendar-slot position-relative h-100 ${
                  isAddingEvent ? "add-event" : ""
                } ${
                  calendarSlotId === currentDivId ? "dragging-indicator" : ""
                }`}
                onClick={() => handleCellClick(currentDivId)}
              >
                {event && eventsData.events.length > 0 && (
                  // Display EventDisplay component
                  <EventDisplay
                    eventData={event}
                    eventDuration={eventDuration}
                    eventDays={eventDays}
                    handleDragEnd={handleDragEnd}
                    handleDrag={handleDrag}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default HourRender;
