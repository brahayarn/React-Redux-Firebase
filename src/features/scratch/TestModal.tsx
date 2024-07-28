import ModalsWrapper from "../../app/common/modals/ModalsWrapper";
import { useAppSelector } from "../../app/store/store";


export default function TestModal() {
    const {data} = useAppSelector(state => state.modals);
  return (
    <ModalsWrapper header={'test'}>
        <div >
            {data}
        </div>
    </ModalsWrapper>
  )
}