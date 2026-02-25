import "./BookingButton.css";
import { Link } from "@/i18n/navigation";
export default function BookingButton({ children }) {
  return (
    <Link href={"/contact"} className='block w-full'>
      <button className="bookingButton active:opacity-50 active:duration-75">
        {children}
      </button>
    </Link>
  );
}
