import React, { memo } from "react";
import { motion, Variants } from "framer-motion";

interface EventDisplayProps {
  eventData: { name: string; info: string; duration: number; days: number };
  eventDuration: number;
  eventDays: number;
  handleDragEnd: (event: any, info: any, name: string) => void;
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
      drag
      onDragEnd={(event, info) => handleDragEnd(event, info, eventData.name)}
      onDrag={handleDrag}
      variants={animations}
      initial="intitial"
      animate="animate"
      whileHover="hover"
      whileTap="click"
      className="event d-flex align-items-center justify-content-center p-2"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: `${eventDays * 100}%`, // Event spans the entire cell width
        height: `${(eventDuration / 60) * 100}%`,
        backgroundColor: "#5852FF", // Add your preferred styling here
      }}
    >
      <div className="event-photo h-100"></div>
      <div className="event-info h-100">{eventData.name}</div>
      <div className="event-info-duration h-100">10:00</div>
    </motion.div>
  );
};

export default memo(EventDisplay);
