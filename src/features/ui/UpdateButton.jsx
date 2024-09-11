import { useFetcher } from "react-router-dom";
import Button from "./Button";
import { updateOrder } from "../services/apiRestaurant";

function UpdateButton() {
    const fetcher = useFetcher()
    return (
        <fetcher.Form method="PATCH" className="text-right">
            <Button type='primary'>Make Priority</Button>
        </fetcher.Form>
    )
}

export async function updateAction({request, params}){
 const data = {priority: true}
await updateOrder(params.orderId, data)
return null;
}

export default UpdateButton
