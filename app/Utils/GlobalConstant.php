<?php

namespace App\Utils;

class GlobalConstant
{
    // Status
    public const STATUS_ACTIVE   = 'active';
    public const STATUS_INACTIVE = 'inactive';
    public const STATUS_PENDING   = 'pending';
    public const STATUS_DRAFT     = 'draft';

    // Default
    public const DEFAULT_PER_PAGE     = 12;
    public const DEFAULT_RECENT_LIMIT = 5;
    public const DEFAULT_THUMB_WIDTH  = 300;
    public const DEFAULT_THUMB_HEIGHT = 170;

    // Order status
    public const ORDER_STATUS_PENDING   = 'pending';
    public const ORDER_STATUS_SHIPPED   = 'shipped';
    public const ORDER_STATUS_DELIVERED = 'delivered';
    public const ORDER_STATUS_CANCELED  = 'canceled';
    public const ORDER_STATUS_REJECTED  = 'rejected';

    // History type
    public const HISTORY_STRATUS_READ   = 'read';
    public const HISTORY_STRATUS_UNREAD   = 'unread';


    // History type
    public const HISTORY_TYPE_ORDER   = 'pending';
    public const HISTORY_TYPE_ORDER_SHIPPED   = 'order-shipped';
    public const HISTORY_TYPE_ORDER_DELIVERED   = 'order-delivered';
    public const HISTORY_TYPE_ORDER_CANCELED   = 'order-canceled';
    public const HISTORY_TYPE_ORDER_REJECTED   = 'order-rejected';

    // History message
    public const HISTORY_MESSAGE_ORDER_CREATE   = 'You have new order please check this out';
    public const HISTORY_MESSAGE_ORDER_SHIPPED   = 'A order has shipped!';
    public const HISTORY_MESSAGE_ORDER_DELIVERED   = 'A Product has delivered!';
    public const HISTORY_MESSAGE_ORDER_CANCELED   = 'A order has canceled!';
    public const HISTORY_MESSAGE_ORDER_REJECTED   = 'A order has rejected!';


    // Chat message
    public const CHAT_MESSAGE_READ   = 'read';
    public const CHAT_MESSAGE_UNREAD   = 'unread';



}
