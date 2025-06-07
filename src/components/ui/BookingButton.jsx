import "./BookingButton.css";
import { Link } from "@/i18n/navigation";
export default function BookingButton({ children }) {
  return (
    <Link href={"/contact"}>
      <button className="bookingButton active:opacity-50 active:duration-75 cursor-pointer">
        {children}
      </button>
    </Link>
  );
}
