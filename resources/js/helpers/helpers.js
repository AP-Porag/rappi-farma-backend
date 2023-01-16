import variables from "../utils/globalconstant";
const helpers = {
    getOrderStatusColor: (status) => {

        if (status === variables.ORDER_STATUS_PENDING){
            return variables.ORDER_STATUS_PENDING_COLOR
        }
        if (status === variables.ORDER_STATUS_SHIPPED){
            return variables.ORDER_STATUS_SHIPPED_COLOR
        }
        if (status === variables.ORDER_STATUS_DELIVERED){
            return variables.ORDER_STATUS_DELIVERED_COLOR
        }
        if (status === variables.ORDER_STATUS_CANCELED){
            return variables.ORDER_STATUS_CANCELED_COLOR
        }
        if (status === variables.ORDER_STATUS_REJECTED){
            return variables.ORDER_STATUS_REJECTED_COLOR
        }

    },

    getHistoryStatusColor: (status) => {

        if (status === variables.HISTORY_TYPE_ORDER_PENDING){
            return variables.ORDER_STATUS_PENDING_COLOR
        }
        if (status === variables.HISTORY_TYPE_ORDER_SHIPPED){
            return variables.ORDER_STATUS_SHIPPED_COLOR
        }
        if (status === variables.HISTORY_TYPE_ORDER_DELIVERED){
            return variables.ORDER_STATUS_DELIVERED_COLOR
        }
        if (status === variables.HISTORY_TYPE_ORDER_CANCELED){
            return variables.ORDER_STATUS_CANCELED_COLOR
        }
        if (status === variables.HISTORY_TYPE_ORDER_REJECTED){
            return variables.ORDER_STATUS_REJECTED_COLOR
        }

    },
}

export default helpers;
