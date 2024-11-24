const data = import.meta.env.VITE_DATA;
const startDate = import.meta.env.VITE_DATA_START_DATE;
const endDate = import.meta.env.VITE_DATA_END_DATE;
const timeAndRegion = import.meta.env.VITE_DATA_TIME_AND_REGION;

const startHours = ["00:00", "06:00", "12:00", "18:00"];
const endHours = ["06:00", "12:00", "18:00", "23:59"];

export const RangeHourSelect = () => {
    try{
        const response = await fetch(`${data}${startDate}${endDate}${timeAndRegion}`);
    }
};