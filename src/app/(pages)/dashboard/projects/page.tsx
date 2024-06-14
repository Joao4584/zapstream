
import BreadCrumb from '@/src/components/breadCrumb';
import { ListTable } from './List';

export default function Main() {

    return (
        <div className="w-10/12 ml-2 h-full overflow-y-auto overflow-x-hidden">
            <BreadCrumb />
            <ListTable />
        </div>
    );
}
