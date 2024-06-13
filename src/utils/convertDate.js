import moment from "moment";

export default function convertDate() {
  const formattedDate = moment(isoDate).format("DD-MM-YYYY");

  return formattedDate;
}
