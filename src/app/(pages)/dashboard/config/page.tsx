import BreadCrumb from "@/src/components/breadCrumb";
import UserPage from "./User";

export default function Main() {
    return (
        <div className="w-10/12 h-full overflow-y-auto overflow-x-hidden">
            <BreadCrumb />
            <UserPage />
        </div>
    );
}
