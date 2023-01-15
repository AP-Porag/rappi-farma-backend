<?php

namespace Database\Factories;

use App\Models\Order;
use App\Utils\GlobalConstant;
use Illuminate\Database\Eloquent\Factories\Factory;

class HistoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $order_id = rand(1,100);
        $status = $this->faker->randomElement([
            GlobalConstant::ORDER_STATUS_PENDING,
            GlobalConstant::ORDER_STATUS_DELIVERED,
            GlobalConstant::ORDER_STATUS_SHIPPED,
            GlobalConstant::ORDER_STATUS_CANCELED,
            GlobalConstant::ORDER_STATUS_REJECTED,
        ]);

        $history_type = GlobalConstant::ORDER_STATUS_PENDING;
        $history_message = GlobalConstant::HISTORY_MESSAGE_ORDER_CREATE;

        if ($status == GlobalConstant::ORDER_STATUS_SHIPPED){
            $history_type = GlobalConstant::HISTORY_TYPE_ORDER_SHIPPED;
            $history_message = GlobalConstant::HISTORY_MESSAGE_ORDER_SHIPPED;
        }

        if ($status == GlobalConstant::ORDER_STATUS_DELIVERED){
            $history_type = GlobalConstant::HISTORY_TYPE_ORDER_DELIVERED;
            $history_message = GlobalConstant::HISTORY_MESSAGE_ORDER_DELIVERED;
        }

        if ($status == GlobalConstant::ORDER_STATUS_CANCELED){
            $history_type = GlobalConstant::HISTORY_TYPE_ORDER_CANCELED;
            $history_message = GlobalConstant::HISTORY_MESSAGE_ORDER_CANCELED;
        }

        if ($status == GlobalConstant::ORDER_STATUS_REJECTED){
            $history_type = GlobalConstant::HISTORY_TYPE_ORDER_REJECTED;
            $history_message = GlobalConstant::HISTORY_MESSAGE_ORDER_REJECTED;
        }

        return [
            'order_id'=>$order_id,
            'type'=>$history_type,
            'message'=>$history_message,
            'status'=>GlobalConstant::HISTORY_STRATUS_UNREAD,
        ];
    }
}
