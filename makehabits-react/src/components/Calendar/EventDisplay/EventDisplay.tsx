import React, { memo } from "react";
import { motion, Variants } from "framer-motion";

interface EventDisplayProps {
  eventData: {
    eventId: number;
    name: string;
    description: string;
    info: string;
    startHour: number;
    endHour: number;
    duration: number;
    days: number;
    type: string;
  };
  eventDuration: number;
  eventDays: number;
  handleDragEnd: (event: any, info: any, eventId: number) => void;
  handleDrag: (event: any, info: any) => void;
}

const animations: Variants = {
  intitial: { opacity: 0, scale: 0.3 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  click: {
    scale: 0.8,
    opacity: 0.5,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const EventDisplay: React.FC<EventDisplayProps> = ({
  eventData,
  eventDuration,
  eventDays,
  handleDragEnd,
  handleDrag,
}) => {
  return (
    <motion.div
      drag={eventData.type != "habit"}
      onDragEnd={(event, info) => handleDragEnd(event, info, eventData.eventId)}
      onDrag={handleDrag}
      variants={animations}
      initial="intitial"
      animate="animate"
      whileHover="hover"
      whileTap="click"
      className="event d-flex flex-column align-items-center justify-content-center p-2"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: `${eventDays * 100}%`, // Event spans the entire cell width
        height: `${(eventDuration / 60) * 100}%`,
        backgroundColor: "#5852FF", // Add your preferred styling here
      }}
    >
      <div className="event-info text-center">{eventData.name.toUpperCase()}</div>
    </motion.div>
  );
};

// <div className="event-info-duration">
//   {eventData.startHour}:00 - {eventData.endHour}:00
// </div>
export default memo(EventDisplay);
